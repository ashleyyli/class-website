import Link from 'next/link';
import { PrimaryButton } from "../ui/buttons";
import { ActivityCardsWrapper } from "../ui/cards";

export default function Activities() {
    return (
        <main className="flex flex-grow flex-col p-6 w-full max-w-[800px] space-y-6">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-3xl pb-4">Class activities suggestions</h1>
                <PrimaryButton>
                    <nav className="text-center">
                        <Link href={"/activities/suggest"}>
                            Make suggestion
                        </Link>
                    </nav>
                </PrimaryButton>
            </div>
            <div className="text-xl space-y-2">
                <p>
                    This is a good idea to write expectations around what should be posted here, how it should be posted, and interaction expectations.
                </p>
                <p>
                    This is a page for students to suggest activities/class topics they are interested in!  Regular students will see a page of approved
                    activities, the associated dates, and a truncated description.  They can vote for something here or click on a card to see more. For 
                    each activity a student submits, they will also see an edit button.  Only logged in accounts are able to post.
                </p>
                <p>
                    Accounts with administrator access will see all submissions made (pending, approved, denied, planned, and archived), an edit button
                    for all submissions, and a dropdown button to update the status of a submission.  Emails for each submission are tracked but not shown.
                </p>
                
            </div>

            <ActivityCardsWrapper />
        </main>
    );
}