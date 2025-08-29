import { editActivity } from '../../lib/actions';
import { PrimaryButton, SecondaryButton } from '../buttons';
import Link from 'next/link';
import { FetchActivitybyId } from '@/app/lib/data';
import { formatDate } from '@/app/lib/utils';
import { auth } from '@/auth'
import { redirect } from 'next/navigation';

export async function EditActivityForm({
    id,
} : {
    id: number, 
}) {
    // javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')
    const session = await auth();
    if (!session) {
        redirect('/activities');  // doesn't work
    }
    
    const activity = await FetchActivitybyId(id);

    if (!activity) {
        return (
            <div className="text-red-500">
                Activity not found.
            </div>
        );
    }

    if (session.user.email !== activity.author || session.user.role !== "admin") {
        redirect('/activities');  // doesn't work
    }

    return (
        <form action={editActivity} className="flex flex-col gap-y-4">
            {/* <h1>Make a class activity suggestion</h1> */}
            <input type="hidden" name="id" value={activity.id} />
            <input type="hidden" name="author" value={activity.author} />
            <div className="flex flex-row justify-between gap-x-6">
                {/* title */}
                <div className="flex flex-col grow">
                    <label>
                        Title *
                    </label>
                    <div>
                        <div className="flex">
                            <input 
                                name="title"
                                className="peer block grow cursor-pointer rounded-md border border-gray-200 py-2 px-2 text-md placeholder:text-gray-50"
                                defaultValue={activity.title}
                            />
                            {/* icon */}
                        </div>
                        <div>
                            {/* input error */}
                        </div>
                    </div>
                </div>

                {/* date */}
                <div>
                    <label>
                        Date
                    </label>
                    <div>
                        <div>
                            <input 
                                name="date"
                                className="peer block w-full flex-none cursor-pointer rounded-md border border-gray-200 py-2 px-2 text-md placeholder:text-gray-50"
                                type="datetime-local"
                                defaultValue={formatDate(new Date(activity.date))}
                            />
                            {/* icon */}
                        </div>
                        <div>
                            {/* input error */}
                        </div>
                    </div>
                </div>

                
            </div>
            

            {/* description */}
            <div>
                <label>
                    Description *
                </label>
                <div>
                    <div>
                        <textarea 
                            name="description"
                            className="peer block w-full min-h-24 cursor-pointer rounded-md border border-gray-200 py-1 px-1 text-md placeholder:text-gray-50"
                            defaultValue={activity.description}
                        />
                        {/* icon */}
                    </div>
                    <div>
                        {/* input error */}
                    </div>
                </div>
            </div>

            
            
            {/* buttons */}
            <div className="flex flex-row pt-4 justify-end space-x-6"> 
                <SecondaryButton>
                    <Link href="/activities">
                        Cancel
                    </Link>
                </SecondaryButton>

                <PrimaryButton type="submit">
                    Update activity
                </PrimaryButton>
            </div>
        </form>
    );
}