'use client';

import { SecondaryButton } from './buttons';
import { handleVote, handleSignUp } from '../lib/actions';
import { getDate } from '../lib/utils';
import { HiOutlinePencil } from "react-icons/hi";
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { StatusButton } from './buttons';
import { Status } from '../lib/definitions';


function EventDate({ startDate, endDate} : { startDate: Date, endDate: Date}) {
    const start = getDate({ date: new Date(startDate)});
    const end = getDate({ date: new Date(endDate)});

    if (start === end) {
        return (
            <h4>{start}</h4>
        );
    }

    return (
        <h4>{start} - {end}</h4>
    );
}

export function Card({
    title,
    startDate,
    endDate,
    description, 
    onClick,
    children,
}: {
    title: string,
    startDate?: Date,
    endDate?: Date,
    description: string,
    onClick: () => void,
    children: React.ReactNode,
}) {
    return (
        <div className="rounded w-2xs shadow-sm p-4 flex flex-col justify-between h-full cursor-pointer" onClick={onClick}>
            <div>
                <h3 className="text-xl font-medium">
                    {title}
                </h3>
                {/* bad */}
                {
                    startDate !== undefined && endDate !== undefined &&
                    startDate !== null && endDate !== null ? 
                        <EventDate startDate={startDate} endDate={endDate} /> 
                        : 
                        <div></div>
                }
                
                <p className="truncate text-lg text-gray-500 py-2 ">
                    {description}
                </p>
            </div>
            
            <div className="mt-4">
                {children}
            </div>
        </div>
    );
}

export function ActivitiesCard({
    id,
    title,
    date,
    description, 
    status,
    votes,
    author,
}: {
    id: number,
    title: string,
    date?: Date,
    description: string,
    status: Status,
    votes: number,
    author: string,
}) {
    const { data: session } = useSession()
    const router = useRouter();

    return (
        <Card 
            title={title} 
            startDate={date} 
            endDate={date} 
            description={description}
            onClick={() => router.push(`/activities/${id}`)}
        >
            <div className="flex flex-row justify-between items-center">
                <div className="flex w-full justify-end space-x-2">
                    {(session?.user.role == "admin" && 
                        <StatusButton type="activity" id={id} initialStatus={status}/>
                    )}

                    { (session?.user?.email === author || session?.user?.role === "admin") && (
                        <SecondaryButton 
                            onClick={(e) => {
                                router.push(`/activities/edit/${id}`)
                                e.stopPropagation(); // prevent card click
                            }}
                        >
                            <HiOutlinePencil />
                        </SecondaryButton>
                    )}
                    
                    <SecondaryButton 
                        onClick={(e) => {
                            handleVote(id, votes);
                            e.stopPropagation(); // prevent card click
                        }}
                    >
                        {votes === 1 ? `${votes} vote` : `${votes} votes`}
                    </SecondaryButton> 
                </div>
                
                
            </div>
        </Card>
        
    );
}


export function OpportunitiesCard({
    id,
    title,
    startDate,
    endDate,
    description, 
    status,
    min_hours,
    max_hours,
    author,
}: {
    id: number,
    title: string,
    startDate: Date,
    endDate: Date,
    description: string,
    status: Status,
    min_hours: number | string,     // hopefully this is always a number
    max_hours: number | string,
    author: string,
}) {
    const { data: session } = useSession()
    const router = useRouter();

    return (
        <Card 
            title={title} 
            description={description} 
            startDate={startDate} 
            endDate={endDate}
            onClick={() => router.push(`/opportunities/${id}`)}
        >
            <div className="flex flex-row justify-between items-center">
                <div className="flex w-full justify-between space-x-2">
                    <p className="text-lg">
                        {max_hours > min_hours ? min_hours + " - " + max_hours : min_hours} hours
                    </p>

                    {(session?.user.role == "admin" && 
                        <StatusButton type="opportunity" id={id} initialStatus={status}/>
                    )}

                    { (session?.user?.email === author || session?.user?.role === "admin") && (
                        <SecondaryButton 
                            onClick={(e) => {
                                router.push(`/opportunities/edit/${id}`)
                                e.stopPropagation(); // prevent card click
                            }}
                        >
                            <HiOutlinePencil />
                        </SecondaryButton>
                    )}

                    <SecondaryButton 
                        onClick={(e) => {
                            handleSignUp(id);
                            e.stopPropagation();
                        }}
                    >
                        Sign up
                    </SecondaryButton>
                </div>
            </div>
        </Card>
    );
}

export function ScheduleCard({
    title,
    date,
    location,
    content,
}: {
    title: string,
    date: Date,
    location: string,
    content?: string,
}) {
    // link to slides/pdf download
    return (
        <div className="grid grid-cols-[140px_1fr_140px] w-full pt-1 pb-1 border-t  border-gray-200 items-center">
            <div className="justify-self-start pl-2">
                <EventDate startDate={date} endDate={date} />
            </div>

            <p>{title}</p>

            <p className="justify-self-end pr-2">{location}</p>
        </div>


    )
}