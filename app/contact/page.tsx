export default function Contact() {
  return (
    <main className="flex flex-grow flex-col p-6 w-full max-w-[800px] space-y-8">
      
      <h1 className="pb-4 text-3xl font-bold">Contact Us</h1>

      <p>
        Here&apos;s an example contact page!  This can be a place for students to provide feedback on the website or class, or find help.
      </p>

      <section className="space-y-4 pb-4">
        <h2 className="text-2xl font-semibold">Questions?</h2>
        <p className="text-lg">
          Need help navigating the site or have questions about how something
          works? Reach out and we&apos;ll get back to you as soon as possible:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>
            📧 <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a> - direct support for troubleshooting and account issues
          </li>
          <li>📞 Phone support: 123-456-7890</li>
        </ul>
      </section>

      {/* Feedback / Suggestions Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Feedback?</h2>
        <p className="text-lg">
          Found a bug, or have an idea to improve the site? We would love to hear from you!
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>
            📧 <a href="mailto:yourteam@example.com" className="text-blue-600 hover:underline">yourteam@example.com</a> - for general feedback and bug reports
          </li>
          <li>
            🐛 If reporting a bug, please include details such as your browser, device, and steps to reproduce the issue
          </li>
        </ul>
      </section>

      {/* Help & Support Section */}
      
    </main>
  );
}
