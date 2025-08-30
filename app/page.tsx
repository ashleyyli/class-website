import { ScheduleCardsWrapper } from "./ui/cards";

export default function Home() {
  return (
    <main className="pt-6 max-w-[800px] space-y-2">
      <h1 className="text-4xl font-semibold">
          Class Code: Full Class Name
      </h1>

      <div className="w-full justify-center pb-4">
        <div className="rounded w-full bg-gray-100 h-2">
          <div className="rounded bg-blue-950 h-2 w-1/3"></div>
        </div>
        
        <div className="flex justify-between">
          <p className="text-gray-500">Class progress</p>
          {/* get the width and progress bar to update automatically */}
          <p className="text-gray-500">33%</p>
        </div>
      </div>
      
      <div className="text-xl pb-8 space-y-4">
        <p className="pb-2">
          Write a description of the course here! This is a good place to include a general overview of the class content, 
          the main topics that will be covered, and the skills students are expected to develop.
        </p>

        <div>
          <p className="font-semibold">Prerequisites</p>
          <p>List any prerequisites or recommended background knowledge here. This could include prior courses, technical skills, or general academic preparation.</p>
        </div>
        
        <div>
          <p className="font-semibold">Learning Outcomes</p>
          <p>Provide a bulleted list of learning goals or outcomes. For example:</p>
          <ul>
            <li>What students will understand by the end of the course</li>
            <li>What skills they will be able to apply</li>
            <li>How the course connects to broader academic or professional goals</li>
          </ul>
        </div>
        
        <div>
          <p className="font-semibold">Additional Information</p>
          <p>Add any other important details about the course here, such as grading policies, project formats, teaching style, or intended audience.</p>
        </div>
        
      </div>
            
      <div className="grid grid-cols-5 gap-4 pb-20">
        <div className="col-span-5 pr-8">
          <p className="text-2xl font-semibold">
            Schedule
          </p>
          <ScheduleCardsWrapper />
        </div>
        {/* <p className="text-2xl">
          Reminders
        </p> */}
      </div>
    </main>
  );
}