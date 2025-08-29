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

// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>