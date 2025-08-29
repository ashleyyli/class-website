import { FetchActivitybyId } from "../../lib/data";
import { Activity } from "../../lib/definitions";
import { ActivityContent } from "../../ui/content";

/**
 * Shows when the /new route is intercepted
 */
export default async function ActivityModal(props: { params: { id: string } }) {
  console.log("I am the modal that is shown during interception");
  const id = Number(props.params.id);
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