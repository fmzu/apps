import { Copy } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"

export default function CopyButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" className="rounded-full">
            <Copy className="w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"メモをコピーする"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
