import { Share } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"

export default function ShareButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" className="rounded-full">
            <Share className="w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"メモを共有する"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
