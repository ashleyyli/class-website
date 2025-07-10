import { ActivitiesCard } from "../ui/cards";
import { PrimaryButton } from "../ui/buttons";
// fetch activities


export default function Activities() {
    // function handleClick() {
        
    // }

    return (
        <main className="flex flex-grow flex-col p-6 w-full max-w-[800px] space-y-6">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-3xl pb-4">Class activities suggestions</h1>
                <PrimaryButton>
                    {/* height is low on this */}
                    <button>Make suggestion</button>
                </PrimaryButton>
            </div>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div>
                Cards1
            </div>
            <div>
                Cards2, title, truncated description, num votes + quick votes, see more
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-1 md:gap-y-6 p-8">
                <ActivitiesCard title="title" description="description" votes={1} />
                <ActivitiesCard title="title" description="description" votes={1} />
                <ActivitiesCard title="title" description="description" votes={1} />
                <ActivitiesCard title="title" description="description" votes={1} />
                <ActivitiesCard title="title" description="description" votes={1} />
                <ActivitiesCard title="title" description="description" votes={1} />
                <ActivitiesCard title="title" description="description" votes={1} />
            </div>
        </main>
    );
}