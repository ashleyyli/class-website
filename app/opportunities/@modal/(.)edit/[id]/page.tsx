import ModalBody from "../../../../ui/modal/modal-body";
import ModalBackground from "../../../../ui/modal/modal-background";
import { FetchOpportunitybyId } from "../../../../lib/data";
import { Opportunity } from "../../../../lib/definitions";
import { OpportunityContent } from "../../../../ui/content";

/**
 * Shows when the /new route is intercepted
 */
export default async function OpportunityModal(props: { params: Promise<{ id: number }> }) {
  console.log("EDIT PARALLEL");
  const params = await props.params;
  const id = params.id;
  const opportunity: Opportunity | null = await FetchOpportunitybyId(id);

  if (!opportunity) {
    return (
      <ModalBackground>
        <ModalBody title="Opportunity Not Found">
          <p>No opportunity found with the provided ID.</p>
        </ModalBody>
      </ModalBackground>
    );
  }

  return (
    <ModalBackground>
      <ModalBody title={opportunity?.title}>    
        <OpportunityContent opportunity={opportunity} />
      </ModalBody>
    </ModalBackground>
  );
}