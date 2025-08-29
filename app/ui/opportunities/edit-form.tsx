import { PrimaryButton, SecondaryButton } from '../buttons';
import Link from 'next/link';
import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import { FetchOpportunitybyId } from '@/app/lib/data';
import { editOpportunity } from '../../lib/actions';
import { formatDate } from '@/app/lib/utils';

export async function EditOpportunityForm({
    id,
} : {
    id: number, 
}) {
    const session = await auth();
    if (!session) {
        redirect('/opportunities');  // doesn't work
    }
    
    const opportunity = await FetchOpportunitybyId(id);

    if (!opportunity) {
        return (
            <div className="text-red-500">
                Opportunity not found.
            </div>
        );
    }

    if (session.user.email !== opportunity.author || session.user.role !== "admin") {
        redirect('/opportunities');  // doesn't work
    }

    return (
        <form action={editOpportunity} className="flex flex-col gap-y-4">
            {/* <h1>Make a class activity suggestion</h1> */}
            <input type="hidden" name="id" value={opportunity.id} />
            <input type="hidden" name="author" value={opportunity.author} />
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
                                defaultValue={opportunity.title}
                            />
                            {/* icon */}
                        </div>
                        <div>
                            {/* input error */}
                        </div>
                    </div>
                </div>

                
                {/* hours */}
                <div>
                    <label>
                        Hours
                    </label>
                    <div>
                        <div className="flex flex-row">
                            <div>
                                <input 
                                    name="min_hours"
                                    className="cursor-pointer max-w-16 rounded-md border border-gray-200 py-2 px-2 text-md placeholder:text-gray-50 items-center"
                                    type="number"
                                    defaultValue={opportunity.min_hours}
                                    step="0.5"
                                />
                                {/* icon */}
                            </div>

                            <span className="text-2xl px-2 py-2"> - </span>

                            <div>
                                <input 
                                    name="max_hours"
                                    className="cursor-pointer max-w-16 rounded-md border border-gray-200 py-2 px-2 text-md placeholder:text-gray-50"
                                    type="number"
                                    defaultValue={opportunity.max_hours != 0 ? opportunity.max_hours : opportunity.min_hours}
                                    step="0.5"
                                />
                                {/* icon */}
                            </div>
                        </div>
                        <div>
                            {/* input error */}
                        </div>
                    </div>
                </div>
                
            </div>

            {/* date */}
            <div className="w-full flex flex-col">
                <label>
                    Date
                </label>
                <div>
                    <div className="flex flex-row">
                        <div className="flex-grow">
                            <input 
                                name="start_date"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 px-2 text-md placeholder:text-gray-50"
                                type="datetime-local"
                                defaultValue={formatDate(new Date(opportunity.start_date))}
                            />
                            {/* icon */}
                        </div>

                        <span className="flex-none text-2xl px-2 py-2"> - </span>

                        <div className="flex-grow">
                            <input 
                                name="end_date"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 px-2 text-md placeholder:text-gray-50"
                                type="datetime-local"
                                defaultValue={formatDate(new Date(opportunity.end_date))}
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
                            defaultValue={opportunity.description}
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
                    <Link href="/opportunities">
                        Cancel
                    </Link>
                </SecondaryButton>

                <PrimaryButton type="submit">
                    Update suggestion
                </PrimaryButton>
            </div>
        </form>
    );
}