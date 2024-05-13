import { Image } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"

export default function ImageAddButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" className="rounded-full">
            <Image className="w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"画像を追加する"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
