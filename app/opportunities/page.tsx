import Link from 'next/link';
import { PrimaryButton } from "../ui/buttons";
import { OpportunitiesCardsWrapper } from "../ui/cards";

export default function Opportunities() {
    console.log("I am the opportunities page");
    return (
        <main className="flex flex-grow flex-col p-6 w-full max-w-[800px] space-y-6">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-3xl pb-4">Opportunities</h1>
                <PrimaryButton>
                    <nav className="text-center">
                        <Link href={"/opportunities/suggest"}>
                            Add opportunity
                        </Link>
                    </nav>
                </PrimaryButton>
            </div>
            <p className="text-xl">
                This is similar to the activities page where authorized students can post and vote.  Administrators can also manage submissions from here.
                The main difference is that opportunities have more detailed characteristics and the number of signups is not displayed.
            </p>

            <OpportunitiesCardsWrapper />
        </main>
    );
}