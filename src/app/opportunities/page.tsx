import { PrimaryButton } from "../ui/buttons";
import { OpportunitiesCard } from "../ui/cards";

export default function Opportunities() {
    const startDate = new Date();
    const endDate = new Date();

    return (
        <main className="flex flex-grow flex-col p-6 w-full max-w-[800px] space-y-6">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-3xl pb-4">
                    Opportunities
                </h1>
                <PrimaryButton>
                    {/* height is low on this */}
                    <button>Add opportunity</button>
                </PrimaryButton>
            </div>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div>
                Cards, title, truncated description, num hours, see more
            </div>
            <div>
                <OpportunitiesCard 
                    title="title" 
                    description="description" 
                    startDate={startDate} 
                    endDate={endDate} 
                    // sameDay={false} 
                    hours="1" 
                />
            </div>
        </main>
    );
}