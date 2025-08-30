import { EditActivityForm } from "../../../ui/activities/edit-form"

/**
 * Shown on /activities/new on fresh page load (refresh, open in new tab, etc.)
 */
export default async function ParallelRoutePage({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  return (
    <div className="min-h-screen flex flex-col justify-center">
        <h1 className="text-3xl pb-4">Update class activity suggestion</h1>
        <EditActivityForm id={Number(id)}/>
    </div>
  );
}