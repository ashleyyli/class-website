import ModalBody from "../../../ui/modal/modal-body";
import ModalBackground from "../../../ui/modal/modal-background";
import { FetchActivitybyId } from "../../../lib/data";
import { Activity } from "../../../lib/definitions";
import { ActivityContent } from "../../../ui/content";

/**
 * Shows when the /new route is intercepted
 */
export default async function ActivityModal(props: { params: Promise<{ id: number }> }) {
  console.log("I am the modal that is shown during wewgfsdfg");
  const params = await props.params;
  const id = params.id;
  const activity: Activity | null = await FetchActivitybyId(id);

  if (!activity) {
    return (
      <ModalBackground>
        <ModalBody title="Activity Not Found">
          <p>No activity found with the provided ID.</p>
        </ModalBody>
      </ModalBackground>
    );
  }

  return (
    <ModalBackground>
      <ModalBody title={activity?.title}>    
        <ActivityContent activity={activity} />
      </ModalBody>
    </ModalBackground>
  );
}