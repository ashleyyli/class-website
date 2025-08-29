'use client';

import { createActivity } from '../../lib/actions';
import { PrimaryButton, SecondaryButton } from '../buttons';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export function CreateActivityForm() {// javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')
    const { data: session } = useSession();
    if (!session) {
        redirect('/activities');  // doesn't work
    }
    
    return (
        <form action={createActivity} className="flex flex-col gap-y-4">
            {/* <h1>Make a class activity suggestion</h1> */}
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
                                placeholder=""
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
                    Submit suggestion
                </PrimaryButton>
            </div>
        </form>
    );
}