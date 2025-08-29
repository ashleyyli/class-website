import { FetchOpportunitybyId } from "../../lib/data";
import { Opportunity } from "../../lib/definitions";
import { OpportunityContent } from "../../ui/content";

/**
 * Shows when the /new route is intercepted
 */
export default async function OpportunityModal(props: { params: Promise<{ id: number }> }) {
  console.log("ID INTERCEPTED");
  const params = await props.params;
  const id = params.id;
  const opportunity: Opportunity | null = await FetchOpportunitybyId(id);

  if (!opportunity) {
    return (
      <p>No Opportunity found with the provided ID.</p>
    );
  }
  return (
    <div className="">
        <h1 className="text-3xl">{opportunity?.title}</h1>   
        <OpportunityContent opportunity={opportunity} />
    </div>
  );
}