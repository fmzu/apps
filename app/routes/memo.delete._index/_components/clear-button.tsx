import { CircleDashed } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"

export default function ClearButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center justify-center space-x-2 rounded-full"
          >
            <CircleDashed className="w-4" />
            <p>{"クリア"}</p>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"ゴミ箱を空にする"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
