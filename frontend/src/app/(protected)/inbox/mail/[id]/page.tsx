import { getFullMessage } from "@/lib/email/gmail";
import he from "he";
import MarkAsRead from "@/components/inbox/mark-as-read";
import MailHeader from "@/components/inbox/mail-header";

function extractNameOrEmail(from?: string) {
  if (!from) return "Unknown Sender";
  const match = from.match(/^(.*?)\s*<(.+?)>$/);
  if (match) {
    return match[1].trim() || match[2];
  }
  return from;
}

export default async function MailPage({ params }: { params: { id: string } }) {
  const email = await getFullMessage(params.id);

  return (
    <>
      <MarkAsRead id={params.id} />
      <MailHeader id={params.id} />
      <div className="h-full flex flex-col">
        {/* Email Header */}
        <div className="border-b p-6 bg-white">
          <h1 className="text-3xl font-bold mb-4">{email.subject}</h1>

          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold mr-3">
                  {extractNameOrEmail(email.from).charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    {extractNameOrEmail(email.from)}
                  </div>
                  <div className="text-sm text-gray-600">{email.from}</div>
                </div>
              </div>

              <div className="text-sm text-gray-600 ml-13">
                <div className="mb-1">
                  <span className="font-medium">To: </span>
                  <span>{email.to}</span>
                </div>
                <div className="mb-2">
                  <span className="font-medium">Date: </span>
                  <span>{email.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Body */}
        <div className="flex-1 overflow-y-auto">
          {email.isHtml ? (
            <iframe
              srcDoc={email.body}
              className="w-full h-full border-none"
              title="Email Content"
              sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            />
          ) : (
            <div
              className="p-6 whitespace-pre-wrap text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: he.decode(email.body) }}
            />
          )}
        </div>
      </div>
    </>
  );
}
