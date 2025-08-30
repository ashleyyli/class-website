import ModalBody from "../../../ui/modal/modal-body";
import ModalBackground from "../../../ui/modal/modal-background";
import { FetchActivitybyId } from "../../../lib/data";
import { Activity } from "../../../lib/definitions";
import { ActivityContent } from "../../../ui/content";

/**
 * Shows when the /new route is intercepted
 */
export default async function ActivityModal({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const activity: Activity | null = await FetchActivitybyId(Number(id));

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