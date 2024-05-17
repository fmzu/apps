import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Separator } from "~/components/ui/separator"

export default function ChatNavigation() {
  const iconImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgi6Dq-l2hCFIw6NfNFkRaMoix2lp5Maphyphenhyphen8suVq2k54PkN0xyXlezTVVR8nq6fnhcs5jmFdTQW2YUvNvzSbQEYnDAkgnGOLFldkQ0Bnqpn1Q-e-r-S1CAe3MtvEK7K_KDwxN4R8agM4NA/s180-c/pose_burikko.png"
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
          <p>{"履歴"}</p>
        </div>
        <Separator />
        <div className="flex h-24 items-center space-x-2">
          <Avatar>
            <AvatarImage src={iconImage} alt="@shadcn" />
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
