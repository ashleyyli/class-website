import { EditOpportunityForm } from "@/app/ui/opportunities/edit-form"

/**
 * Shown on /activities/new on fresh page load (refresh, open in new tab, etc.)
 */
export default async function ParallelRoutePage(props: { params: { id: string } }) {
  console.log("EDIT INTERCEPTED")
  const id = Number(props.params.id);


  // not properly centered and looks very barren but whatever
  return (
    <div className="min-h-screen flex flex-col justify-center">
        <h1 className="text-3xl pb-4">Update opportunity suggestion</h1>
        <EditOpportunityForm id={id}/>
    </div>
  );
}