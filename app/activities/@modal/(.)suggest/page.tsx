import ModalBody from "../../../ui/modal/modal-body";
import ModalBackground from "../../../ui/modal/modal-background";
import { CreateActivityForm } from "../../../ui/activities/create-form";

/**
 * Shows when the /new route is intercepted
 */
export default function InterceptedPage() {
  return (
    <ModalBackground>
      <ModalBody title="Make a class activity suggestion">    
        {/* <p>intercepted</p> */}
        <CreateActivityForm />
      </ModalBody>
    </ModalBackground>

  );
}