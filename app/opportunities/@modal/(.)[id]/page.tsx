import ModalBody from "../../../ui/modal/modal-body";
import ModalBackground from "../../../ui/modal/modal-background";
import { FetchOpportunitybyId } from "../../../lib/data";
import { Opportunity } from "../../../lib/definitions";
import { OpportunityContent } from "../../../ui/content";

/**
 * Shows when the /new route is intercepted
 */
export default async function ActivityModal({params}: {params: Promise<{ id: string }>}) {
  console.log("ID PARALLEL");
  const id = await params;
  const opportunity: Opportunity | null = await FetchOpportunitybyId(Number(id));

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