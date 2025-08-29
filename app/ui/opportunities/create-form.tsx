'use client';

import { createOpportunity } from '../../lib/actions';
import { PrimaryButton, SecondaryButton } from '../buttons';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export function CreateOpportunityForm() {
    const { data: session } = useSession();
        if (!session) {
            redirect('/opportunities');  // doesn't work
        }

    return (
        <form action={createOpportunity} className="flex flex-col gap-y-4">
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
                                    defaultValue="1"
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
                                    defaultValue="1"
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
                            />
                            {/* icon */}
                        </div>

                        <span className="flex-none text-2xl px-2 py-2"> - </span>

                        <div className="flex-grow">
                            <input 
                                name="end_date"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 px-2 text-md placeholder:text-gray-50"
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
                    <Link href="/opportunities">
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