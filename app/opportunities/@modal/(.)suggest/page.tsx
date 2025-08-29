import ModalBody from "../../../ui/modal/modal-body";
import ModalBackground from "../../../ui/modal/modal-background";
import { CreateOpportunityForm } from "../../../ui/opportunities/create-form";

/**
 * Shows when the /new route is intercepted
 */
export default function InterceptedPage() {
  console.log("SUGGEST PARALLEL")
  return (
    <ModalBackground>
      <ModalBody title="Add an opportunity">    
        <CreateOpportunityForm />
      </ModalBody>
    </ModalBackground>

  );
}