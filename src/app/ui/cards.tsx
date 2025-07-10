// needs so much styling
import { getDate } from "../utils";
import { SecondaryButton } from "./buttons";

export function Card({
    title,
    startDate,
    endDate,
    description, 
    children,
}: {
    title: string,
    startDate?: Date,
    endDate?: Date,
    description: string,
    children: React.ReactNode,
}) {
    return (
        <div className="rounded w-2xs shadow-sm p-4">
            <h3 className="text-xl font-medium">
                {title}
            </h3>
            {/* bad */}
            {
                startDate !== undefined && endDate !== undefined ? 
                    <EventDate startDate={startDate} endDate={endDate} /> 
                    : 
                    <div>NO DATE TODO REMOVE</div>
            }
            <p className="truncate text-lg text-gray-500 py-8 ">
                {description}
            </p>
            <div>
                {children}
            </div>
        </div>
    );
}

function EventDate({ startDate, endDate} : { startDate: Date, endDate: Date}) {
    const start = getDate({ date: startDate});
    const end = getDate({ date: endDate});

    if (start === end) {
        return (
            <h4>{start}</h4>
        );
    }

    return (
        <h4>{start} - {end}</h4>
    );
}

export function CardWrapper() {
    return (
        <div>
            todo after sql fetch
        </div>
    );
}

export function ActivitiesCard({
    title,
    description, 
    votes,
}: {
    title: string,
    description: string,
    votes: number,
}) {
    // handle vote goes... here?
    function handleVote() {
        // async?
        console.log('vote');
    }
    return (
        <Card title={title} description={description}>
            <div className="flex flex-row justify-between items-center">
                <p className="text-lg">
                    {votes} votes
                </p>
                <SecondaryButton>
                    <button className="rounded bg-gray-50 px-3 py-1" onClick={handleVote}>
                        Vote
                    </button>
                </SecondaryButton>
                
            </div>
            
        </Card>
    );
}

export function OpportunitiesCard({
    title,
    startDate,
    endDate,
    // sameDay,
    description, 
    hours,
}: {
    title: string,
    startDate: Date,
    endDate: Date,
    // sameDay: boolean,
    description: string,
    hours: number | string,
}) {
    return (
        <Card title={title} description={description} startDate={startDate} endDate={endDate}>
            {hours} hours
        </Card>
    );
}

export function ScheduleCard({
    title,
    date,
    // sameDay,
    // description, 
    location,
}: {
    title: string,
    date: Date,
    // sameDay: boolean,
    // description: string,
    location: string,
}) {
    // link to slides/pdf download
    return (
        <div className="md:grid md:grid-cols-3 w-full border-t border-b border-gray-100">
            <p>{getDate({date: date})}</p>  
            {/* figure out how to get class activity to stretch */}
            <p className="flex flex-grow">{title}</p>
            <p>{location}</p>
        </div>
    )
}