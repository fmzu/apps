import { Card, CardContent, CardDescription } from "~/components/ui/card"
import ClipButton from "./clip-button"
import CopyButton from "./copy-button"
import ShareButton from "./share-button"
import ImageAddButton from "./image-add-button"
import NotificationButton from "./notification-button"
import { Badge } from "~/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { ArchiveRestore, EllipsisVertical, Trash2 } from "lucide-react"
import { Button } from "~/components/ui/button"

type Props = {
  text: string
}

export default function MemoCard(props: Props) {
  return (
    <Card className="p-4">
      <CardDescription className="flex items-center justify-between">
        <Badge className="outline">{"Badge"}</Badge>
        <ClipButton />
      </CardDescription>
      <CardContent className="p-2">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="flex justify-center">{props.text}</p>
        </div>
      </CardContent>
      <div className="flex justify-center">
        <NotificationButton />
        <CopyButton />
        <ImageAddButton />
        <ShareButton />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="rounded-full">
              <EllipsisVertical className="w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Button
                  variant="ghost"
                  className="flex items-center justify-center space-x-2 rounded-full"
                  onClick={() => {
                    alert(
                      "メモを削除しました（ゴミ箱にあるときは完全に消えますがいいですか？の表示）",
                    )
                  }}
                >
                  <Trash2 className="w-4" />
                  <p>{"メモを削除する"}</p>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant="ghost"
                  className="flex items-center justify-center space-x-2 rounded-full"
                  onClick={() => {
                    alert("メモをアーカイブしました。")
                  }}
                >
                  <ArchiveRestore className="w-4" />
                  <p>{"メモをアーカイブする"}</p>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  )
}
