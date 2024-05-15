import { ArchiveRestore, Bell, Badge, Trash2 } from "lucide-react"
import {} from "~/components/ui/tooltip"
import { Link } from "@remix-run/react"
import BadgeAddDialog from "./badge-add-dialog"

export default function MemoNavigation() {
  return (
    <div className="flex w-96 flex-col border-r">
      <Link
        to={"/memo/notification"}
        className="flex items-center space-x-2 border-b py-8"
      >
        <Bell className="w-4" />
        <p>{"通知"}</p>
      </Link>
      <BadgeAddDialog />
      <div className="flex items-center space-x-2 border-b py-8">
        <Badge className="w-4" />
        <p>{"TypeScript"}</p>
      </div>
      <div className="flex items-center space-x-2 border-b py-8">
        <Badge className="w-4" />
        <p>{"CloudFlare"}</p>
      </div>
      <div className="flex items-center space-x-2 border-b py-8">
        <Badge className="w-4" />
        <p>{"Remix"}</p>
      </div>
      <div className="flex items-center space-x-2 border-b py-8">
        <ArchiveRestore className="w-4" />
        <p>{"アーカイブ"}</p>
      </div>
      <Link
        to={"/memo/delete"}
        className="flex items-center space-x-2 border-b py-8"
      >
        <Trash2 className="w-4" />
        <p>{"ゴミ箱"}</p>
      </Link>
    </div>
  )
}
