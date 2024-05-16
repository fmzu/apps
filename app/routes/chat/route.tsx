import type { MetaFunction } from "@remix-run/node"
import { useChat } from "ai/react"
import { Input } from "~/components/ui/input"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="stretch mx-auto flex w-full max-w-md flex-col py-24">
      {messages.length > 0
        ? messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === "user" ? "User: " : "AI: "}
              {m.content}
            </div>
          ))
        : null}
      <form onSubmit={handleSubmit}>
        <Input
          className="fixed bottom-0 mb-8 w-full max-w-md rounded border border-gray-300 p-2 shadow-xl"
          value={input}
          placeholder="どうしましたか？"
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
