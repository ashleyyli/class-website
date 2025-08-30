import { FetchOpportunitybyId } from "../../lib/data";
import { Opportunity } from "../../lib/definitions";
import { OpportunityContent } from "../../ui/content";

/**
 * Shows when the /new route is intercepted
 */
export default async function OpportunityModal({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const opportunity: Opportunity | null = await FetchOpportunitybyId(Number(id));

  if (!opportunity) {
    return (
      <p>No opportunity found with the provided ID.</p>
    );
  }
  return (
    <div className="">
        <h1 className="text-3xl">{opportunity?.title}</h1>   
        <OpportunityContent opportunity={opportunity} />
    </div>
  );
}