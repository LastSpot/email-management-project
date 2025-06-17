export default function FlowGuide() {
  return (
    <div className="p-4">
      <ol className="space-y-6 list-decimal list-inside mb-4">
        <li>
          <h3 className="inline font-semibold text-lg">
            Connect Your Email Provider
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 pl-6">
            Log in using one of our supported email providers, like Google. We
            plan to add more based on user requests.
          </p>
        </li>
        <li>
          <h3 className="inline font-semibold text-lg">Create Folders</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 pl-6">
            Create folders with names and descriptions that reflect the kind of
            emails you want to group, such as &quot;Weekly Newsletters&quot; or
            &quot;Project Updates.&quot;
          </p>
        </li>
        <li>
          <h3 className="inline font-semibold text-lg">
            Scan and Let AI Organize
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 pl-6">
            Click the &quot;Scan&quot; button to analyze your unread emails. Our
            AI will read the content of each email and move it to the correct
            folder for you.
          </p>
        </li>
      </ol>
      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold">Tips for folder creation</div>
        <div className="text-sm font-normal leading-normal">
          <ul className="list-disc list-inside">
            <li>
              Use descriptive names that reflect the kind of emails you want to
              group.
            </li>
            <li>
              Be as specific as you can when writing the description. This will
              help the AI understand the folder and move the emails to the
              correct folder.
            </li>
            <li>
              Avoid duplicate folders or confusing names, keep it simple and
              functional. This will cause the AI to get confused.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
