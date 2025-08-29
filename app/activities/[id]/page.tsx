import { FetchActivitybyId } from "../../lib/data";
import { Activity } from "../../lib/definitions";
import { ActivityContent } from "../../ui/content";

/**
 * Shows when the /new route is intercepted
 */
export default async function ActivityModal(props: { params: Promise<{ id: number }> }) {
  console.log("I am the modal that is shown during interception");
  const params = await props.params;
  const id = params.id;
  const activity: Activity | null = await FetchActivitybyId(id);

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