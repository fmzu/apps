import type { MetaFunction } from "@remix-run/node"
import { useChat } from "ai/react"
import ChatNavigation from "./_components/chat-navigation"
import { Separator } from "~/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import ChatSendInput from "./_components/chat-send-input"
import ChatSettingDailog from "./_components/chat-setting-dialog"

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
    <div className="flex h-screen">
      <ChatNavigation iconImage={iconImage} />
      <div className="flex w-screen flex-col">
        <div className="flex min-h-16 items-center justify-between px-4">
          <p className="font-bold">{"AI"}</p>
          <ChatSettingDailog />
        </div>
        <div className="px-4">
          <Separator />
        </div>
        <div className="flex flex-col">
          <div className="flex h-full flex-col px-4 pb-20">
            {messages.length > 0
              ? messages.map((m) => (
                  <div
                    key={m.id}
                    className="space-y-4 whitespace-pre-wrap py-2"
                  >
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
                        <p className="font-bold">{"AI"}</p>
                      </div>
                    )}
                    {m.content}
                  </div>
                ))
              : null}
          </div>
          <div className="fixed bottom-0 w-full bg-gray-800 p-4">
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
