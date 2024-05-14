import { Bell, Trash2 } from "lucide-react"
import {} from "~/components/ui/tooltip"
import SeriesAccordion from "./series-accordion"
import { Link } from "@remix-run/react"

export default function MemoNavigation() {
  return (
    <div className="flex w-96 flex-col border-r">
      <div className="flex items-center space-x-2 border-b py-8">
        <Bell className="w-4" />
        <p>{"通知"}</p>
      </div>
      <div>
        <SeriesAccordion />
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
