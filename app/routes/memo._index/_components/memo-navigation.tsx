import { ArchiveRestore, Bell, Badge, Trash2 } from "lucide-react"
import { Link } from "@remix-run/react"
import BadgeAddDialog from "./badge-add-dialog"
import { Separator } from "~/components/ui/separator"

export default function MemoNavigation() {
  return (
    <div className="flex w-96 flex-col border-r">
      <Link
        to={"/memo/notification"}
        className="flex h-20 items-center space-x-2"
      >
        <Bell className="w-4" />
        <p>{"通知"}</p>
      </Link>
      <Separator />
      <BadgeAddDialog />
      <Separator />
      <div className="flex h-20 items-center space-x-2">
        <Badge className="w-4" />
        <p>{"TypeScript"}</p>
      </div>
      <Separator />
      <div className="flex h-20 items-center space-x-2">
        <Badge className="w-4" />
        <p>{"CloudFlare"}</p>
      </div>
      <Separator />
      <div className="flex h-20 items-center space-x-2">
        <Badge className="w-4" />
        <p>{"Remix"}</p>
      </div>
      <Separator />
      <div className="flex h-20 items-center space-x-2">
        <ArchiveRestore className="w-4" />
        <p>{"アーカイブ"}</p>
      </div>
      <Separator />
      <Link to={"/memo/delete"} className="flex h-20 items-center space-x-2">
        <Trash2 className="w-4" />
        <p>{"ゴミ箱"}</p>
      </Link>
      <Separator />
    </div>
  )
}
