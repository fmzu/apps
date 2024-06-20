import type { MetaFunction } from "@remix-run/node"
import { useChat } from "ai/react"
import ChatNavigation from "./_components/chat-navigation"
import { Separator } from "~/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import ChatSendInput from "./_components/chat-send-input"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  const iconImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwQ0Rt_D5XNRWZ9ml1fe39qosoTwotUwGotjtghs17btdS-iHGkU_2-05n56v3XRZoNfQ-FO7zNUNRDxdTkFvJhqvhlHwoaUyjrCyzEiOFPJ568w3PFs31k_z89fQ0eNppyrb93-26KTf1/s180-c/otaku_girl_fashion.png"

  return (
    <div className="flex h-screen space-x-4">
      <ChatNavigation iconImage={iconImage} />
      <div className="flex w-full flex-col pr-2">
        <div className="flex min-h-16 items-center">
          <p className="font-bold">{"アイちゃん"}</p>
        </div>
        <Separator />
        <div className="flex flex-col">
          <div className="flex h-full flex-col pb-20">
            {messages.length > 0
              ? messages.map((m) => (
                  <div key={m.id} className="space-y-4 whitespace-pre-wrap p-4">
                    {m.role === "user" ? (
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="font-bold">{"あなた"}</p>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={iconImage} alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="font-bold">{"アイちゃん"}</p>
                      </div>
                    )}
                    {m.content}
                  </div>
                ))
              : null}
          </div>
          <div>
            <ChatSendInput
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
