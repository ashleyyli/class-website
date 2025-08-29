import { CreateOpportunityForm } from "../../ui/opportunities/create-form";

/**
 * Shows when the /new route is intercepted
 */
export default function InterceptedPage() {
  console.log("SUGGEST INTERCEPTED")
  return (
    <div>
      <h1 className="text-3xl pb-4">Suggestion an opportunity</h1>
      <CreateOpportunityForm />
    </div>
    

  );
}