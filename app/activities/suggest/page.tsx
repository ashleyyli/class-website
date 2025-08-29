import { CreateActivityForm } from "../../ui/activities/create-form"

/**
 * Shown on /activities/new on fresh page load (refresh, open in new tab, etc.)
 */
export default function ParallelRoutePage() {
  console.log("I am the modal that is shown when the page is refreshed")

  // not properly centered and looks very barren but whatever
  return (
    <div className="min-h-screen flex flex-col justify-center">
        <h1 className="text-3xl pb-4">Make a class activity suggestion</h1>
        <CreateActivityForm />
    </div>
  );
}