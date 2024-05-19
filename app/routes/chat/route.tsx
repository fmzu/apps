import type { MetaFunction } from "@remix-run/node"
import { useChat } from "ai/react"
import ChatNavigation from "./_components/chat-navigation"
import { Input } from "~/components/ui/input"
import { Separator } from "~/components/ui/separator"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="flex h-screen space-x-4">
      <ChatNavigation />
      <div className="flex w-full flex-col pr-2">
        <div className="flex h-16 items-center">
          <p className="font-bold">{"AIbotちゃん"}</p>
        </div>
        <Separator />
        {messages.length > 0
          ? messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === "user" ? "User: " : "AI: "}
                {m.content}
              </div>
            ))
          : null}

        <div className="fixed bottom-0 mb-8 flex flex-1">
          <form onSubmit={handleSubmit}>
            <Input
              value={input}
              placeholder="メッセージを入力"
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
    </div>
  )
}
