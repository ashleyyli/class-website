import ModalBody from "../../../ui/modal/modal-body";
import ModalBackground from "../../../ui/modal/modal-background";
import { CreateActivityForm } from "../../../ui/activities/create-form";

/**
 * Shows when the /new route is intercepted
 */
export default function InterceptedPage() {
  console.log("I am the modal that is shown during interception")
  return (
    <ModalBackground>
      <ModalBody title="Make a class activity suggestion">    
        {/* <p>intercepted</p> */}
        <CreateActivityForm />
      </ModalBody>
    </ModalBackground>

  );
}