import { Pin } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"

export default function ClipButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" className="rounded-full">
            <Pin className="w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"メモを固定する"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
