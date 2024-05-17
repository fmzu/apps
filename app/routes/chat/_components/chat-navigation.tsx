import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Separator } from "~/components/ui/separator"

export default function ChatNavigation() {
  const iconImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwQ0Rt_D5XNRWZ9ml1fe39qosoTwotUwGotjtghs17btdS-iHGkU_2-05n56v3XRZoNfQ-FO7zNUNRDxdTkFvJhqvhlHwoaUyjrCyzEiOFPJ568w3PFs31k_z89fQ0eNppyrb93-26KTf1/s180-c/otaku_girl_fashion.png"

  return (
    <div className="flex h-screen w-96 border-r">
      <div className="flex w-20 flex-col items-center pt-4">
        <Avatar>
          <AvatarImage src={iconImage} alt="@shadcn" />
          <AvatarFallback>{"CN"}</AvatarFallback>
        </Avatar>
      </div>
      <Separator orientation="vertical" />
      <div className="flex w-full flex-col px-4">
        <div className="flex h-16 items-center">
          <p className="font-bold">{"履歴"}</p>
        </div>
        <Separator />
        <div className="flex h-24 items-center space-x-2">
          <Avatar>
            <AvatarImage src={iconImage} alt="iconImage" />
            <AvatarFallback>{"CN"}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-bold">{"AIbotちゃん"}</p>
            <p className="opacity-80">{"title"}</p>
          </div>
        </div>
        <Separator />
      </div>
    </div>
  )
}
