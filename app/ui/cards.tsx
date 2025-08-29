import { getDate } from "../lib/utils";
import { 
    Activity, 
    Opportunity,
    Schedule
} from "../lib/definitions"
import { 
    fetchActivities, 
    fetchOpportunities, 
    fetchSchedules 
} from "../lib/data";
import { 
    ActivitiesCard, 
    OpportunitiesCard,
    ScheduleCard,
 } from "./card";
import { auth } from '@/auth'

export async function ActivityCardsWrapper() {
    const session = await auth();
    const activities: Activity[] = await fetchActivities();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-1 md:gap-y-6 p-8">
            {
                activities.map((activity) => {
                    if (activity.status === "Approved" || activity.status === "Planned" || session?.user.role === "admin") {
                        return (
                            <ActivitiesCard 
                                id={activity.id}
                                key={activity.id}
                                title={activity.title} 
                                date={activity.date}
                                description={activity.description} 
                                status={activity.status}
                                votes={activity.votes}
                                author={activity.author}
                            />
                        );
                    }
                    
                })
            }
        </div>
    );
}

export async function OpportunitiesCardsWrapper() {
    const session = await auth();
    const opportunities: Opportunity[] = await fetchOpportunities();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-1 md:gap-y-6 p-8">
            {
                opportunities.map((opportunity) => {
                    if (opportunity.status === "Approved" || opportunity.status === "Planned" || session?.user.role === "admin") {
                        return (
                            <OpportunitiesCard 
                                id={opportunity.id}
                                key={opportunity.id}
                                title={opportunity.title} 
                                startDate={opportunity.start_date}
                                endDate={opportunity.end_date}
                                description={opportunity.description} 
                                status={opportunity.status}
                                min_hours={opportunity.min_hours}
                                max_hours={opportunity.max_hours}
                                author={opportunity.author}
                            />
                        );
                    }
                })
            }
        </div>
    );
}

export async function ScheduleCardsWrapper() {
    const schedules: Schedule[] = await fetchSchedules();

    return (
        <div className="p-2">
            <div className="md:grid md:grid-cols-[140px_1fr_140px] w-full border-b border-gray-400 font-bold">
                <p className="justify-self-start pl-2">Date</p>  
                <p>Class Activity</p>
                <p className="justify-self-end pr-2">Location</p>
            </div>
            <div>
                { 
                    schedules.map((schedule) => {
                        return (
                            <ScheduleCard 
                                key={schedule.id}
                                title={schedule.title}
                                date={schedule.date}
                                location={schedule.location}
                                content={schedule.description}
                            />
                        );
                    })
                }
            </div>
            
        </div>
    );
}