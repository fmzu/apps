import { Bell } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"

export default function NotificationButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" className="rounded-full">
            <Bell className="w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"メモを通知・編集する"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
