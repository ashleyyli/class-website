'use server'

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import supabase from "./supabaseClient";
import { signIn } from '../../auth';
import { AuthError } from 'next-auth';
import { id } from 'zod/locales';
import { auth } from '@/auth'


const ActivityFormSchema = z.object({
    id: z.string(),
    title: z.string()
        .min(0, {
            message: 'Please enter a title.',
        }).max(1024, {
            message: 'Title exceeds 1024 characters.',
        }),
    status: z.string(),
    date: z
        .string()
        .transform((val) => {
            if (val === "") return null; 
            
            const dateObj = new Date(val);
            return dateObj.toISOString();
        })
        .nullable()
        .optional(),
    description: z.string()
        .min(0, {
            message: 'Please enter a description.',
        }).max(1024, {
            message: 'Description exceeds 1024 characters.',
        }),
    votes: z.coerce.number(),
    created_at: z.string(),
    author: z.string(),
});

const OpportunityFormSchema = z.object({
    id: z.string(),
    title: z.string()
        .min(0, {
            message: 'Please enter a title.',
        }).max(1024, {
            message: 'Title exceeds 1024 characters.',
        }),
    status: z.string(),
    start_date: z.string(),
    end_date: z.string(),
    description: z.string()
        .min(0, {
            message: 'Please enter a description.',
        }).max(1024, {
            message: 'Description exceeds 1024 characters.',
        }),
    min_hours: z.coerce.number(),
    max_hours: z.coerce.number(), 
    created_at: z.string(),
    author: z.string(),
});

export type ActivityState = {
    errors?: {
        title?: string[];
        date?: string[];
        description?: string[];
        votes?: string[];
    };
    message?: string;
};

export type OpportunityState = {
    errors?: {
        title?: string[];
        start_date?: string[];
        end_date?: string[];
        description?: string[];
        min_hours?: string[];
        max_hours?: string[];
    };
    message?: string;
};

const CreateActivity = ActivityFormSchema.omit({ id: true, status: true, votes: true, created_at: true, author:true });
const EditActivity = ActivityFormSchema.omit({ status: true, votes: true, created_at: true, });

const CreateOpportunity = OpportunityFormSchema.omit({ id: true, status: true, created_at: true, author: true, });
const EditOpportunity = OpportunityFormSchema.omit({ status: true, signups: true, created_at: true, });

export async function createActivity(formData: FormData) {
    const session = await auth();

    if (!session) {
        redirect("/login"); // doublecheck path
    }

    const validatedFields = CreateActivity.safeParse({
        title: formData.get('title'),
        date: formData.get('date'),
        description: formData.get('description')
    });

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return;  // horrible
        // return {
        //     errors: validatedFields.error.flatten().fieldErrors,
        //     message:  'Missing fields.Failed to create activity.',
        // };
    }

    const { title, date, description } = validatedFields.data;

    const { error } = await supabase
        .from('activities')
        .insert({ 
            title: title, 
            date: date, 
            description: description,
            author: session.user.email,
        });

    if (error) {
        console.log(error);
        return;
    //     return {
    //         message: 'Database error. Failed to create activity.',
    //     };
    }

    revalidatePath('/activties');   
    redirect('/activities');
}

export async function createOpportunity(formData: FormData) {
    const session = await auth();

    if (!session) {
        redirect("/login"); // doublecheck path
    }

    const validatedFields = CreateOpportunity.safeParse({
        title: formData.get('title'),
        start_date: formData.get('start_date'),
        end_date: formData.get('end_date'),
        description: formData.get('description'),
        min_hours: formData.get('min_hours'),
        max_hours: formData.get('max_hours'),
    });     

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return;  // horrible
        // return {
        //     errors: validatedFields.error.flatten().fieldErrors,
        //     message: 'Missing fields. Failed to create opportunity.',
        // };
    }   

    const { title, start_date, end_date, description, min_hours, max_hours } = validatedFields.data;    

    const { error } = await supabase
        .from('opportunities')
        .insert({
            title: title,
            start_date: start_date,
            end_date: end_date,
            description: description,
            min_hours: min_hours,
            max_hours: max_hours,
            author: session.user.email,
        }); 

    if (error) {
        console.log(error);
        return;
        // return {
        //     message: 'Database error. Failed to create opportunity.',
        // };
    }   

    revalidatePath('/opportunities');   
    redirect('/opportunities');
}

export async function editActivity(formData: FormData) {
    const validatedFields = EditActivity.safeParse({
        id: formData.get('id'),
        title: formData.get('title'),
        date: formData.get('date'),
        description: formData.get('description'),
        author: formData.get('author'),
    });

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return;  // horrible
    }

    console.log(validatedFields.data);
    const { id, title, date, description, author } = validatedFields.data;

    const session = await auth();

    if (!session || session.user.role !== "admin" || session.user.email !== author) {
        redirect("/login"); // doublecheck path
    }

    const { error } = await supabase
        .from('activities')
        .update({ title: title, date: date, description: description})
        .eq('id', id);

    if (error) {
        console.log(error);
        return;
    }

    revalidatePath('/activities');   
    redirect('/activities');
}

export async function editOpportunity(formData: FormData) {
    const validatedFields = EditOpportunity.safeParse({
        title: formData.get('title'),
        start_date: formData.get('start_date'),
        end_date: formData.get('end_date'),
        description: formData.get('description'),
        min_hours: formData.get('min_hours'),
        max_hours: formData.get('max_hours'),
    });

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return;  // horrible
    }

    const { id, title, start_date, end_date, description, min_hours, max_hours, author } = validatedFields.data;

    const session = await auth();

    if (!session || session.user.role !== "admin" || session.user.email !== author) {
        redirect("/login"); // doublecheck path
    }

    const { error } = await supabase
        .from('activities')
        .update({ 
            title: title, 
            start_date: start_date, 
            end_date: end_date,
            description: description,
            min_hours: min_hours,
            max_hours: max_hours,
        })
        .eq('id', id);

    if (error) {
        console.log(error);
        return;
    }

    revalidatePath('/activities');   
    redirect('/activities');
}

export async function deleteActivity(id: number) {
    const { error } = await supabase
        .from('activities')
        .delete()
        .eq('id', id);

    if (error) {
        console.log(error);
        return;
    }
}

export async function updateActivityStatus(id: number, status: string) {
    const { error } = await supabase
        .from('activities')
        .update({ status: status })
        .eq('id', id);
    
    if (error) {
        console.log(error);
        return;
    }

    console.log("updated status", status)

    revalidatePath('/activities');   
}

export async function updateOpportunityStatus(id: number, status: string) {
    const { error } = await supabase
        .from('opportunities')
        .update({ status: status })
        .eq('id', id);
    
    if (error) {
        console.log(error);
        return;
    }

    console.log("updated status", status)

    revalidatePath('/opportunities');   
}

export async function handleVote(id: number, votes: number) {
    console.log("voting");

    const session = await auth();

    if (!session) {
        console.log("not signed in");
        return;
    }
    // check if user has already voted
    const { data: existingVotes, error: selectError } = await supabase
        .from('activity_votes')
        .select('activity_id, email')
        .eq('activity_id', id)
        .eq('email', session.user.email);

    if (selectError) {
        // fetch error
        console.log(selectError);
        return;
    }

    if (existingVotes && existingVotes.length > 0) {
      // already voted
      console.log("already voted");
      return;
    }
    const { error: insertError } = await supabase
        .from('activity_votes')
        .insert({ 
            email: session.user.email,
            activity_id: id,
        });

    if (insertError) {
        console.log(insertError);
        return;
    }   
    
    const { error: updateError } = await supabase
        .from('activities')
        .update({votes: votes + 1})
        .eq('id', id);
    
    if (updateError) {
        console.log(updateError);
        return;
    }

    revalidatePath('/activities');

    console.log('voted for ' + id);
}

export async function handleSignUp(id: number) {
    console.log("signing up");

    const session = await auth();

    if (!session) {
        console.log("not signed in");
        return;
    }
    // check if user has already signed up
    const { data: existingSignups, error: selectError } = await supabase
        .from('opportunity_signups')
        .select('opportunity_id, email')
        .eq('opportunity_id', id)
        .eq('email', session.user.email);

    if (selectError) {
        // fetch error
        console.log(selectError);
        return;
    }

    if (existingSignups && existingSignups.length > 0) {
      // already voted
      console.log("already signed up");
      return;
    }
    const { error: insertError } = await supabase
        .from('opportunity_signups')
        .insert({ 
            email: session.user.email,
            opportunity_id: id,
        });

    if (insertError) {
        console.log(insertError);
        return;
    }   
    
    // const { error: updateError } = await supabase
    //     .from('opportunities')
    //     .update({signups: signups + 1})
    //     .eq('id', id);
    
    // if (updateError) {
    //     console.log(updateError);
    //     return;
    // }

    revalidatePath('/opportunities');

    console.log('signed up for ' + id);
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}