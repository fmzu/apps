import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Separator } from "~/components/ui/separator"

type Props = {
  iconImage: string
}

export default function ChatNavigation(props: Props) {
  return (
    <div className="flex h-full w-96">
      <div className="flex w-20 flex-col items-center pt-4">
        <Avatar>
          <AvatarImage src={props.iconImage} alt="iconImage" />
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
            <AvatarImage src={props.iconImage} alt="iconImage" />
            <AvatarFallback>{"CN"}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-bold">{"アイちゃん"}</p>
            <p className="opacity-80">{"title"}</p>
          </div>
        </div>
        <Separator />
      </div>
      <Separator orientation="vertical" className="h-full" />
    </div>
  )
}
