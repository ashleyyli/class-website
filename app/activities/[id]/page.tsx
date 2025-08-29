import { FetchActivitybyId } from "../../lib/data";
import { Activity } from "../../lib/definitions";
import { ActivityContent } from "../../ui/content";

/**
 * Shows when the /new route is intercepted
 */
export default async function ActivityModal({params}: {params: Promise<{ id: string }>}) {
  console.log("I am the modal that is shown during interception");
  const { id } = await params;
  const activity: Activity | null = await FetchActivitybyId(Number(id));

  if (!activity) {
    return (
      <p>No activity found with the provided ID.</p>
    );
  }
  return (
    <div className="">
        <h1 className="text-3xl">{activity?.title}</h1>   
        <ActivityContent activity={activity} />
    </div>
  );
}