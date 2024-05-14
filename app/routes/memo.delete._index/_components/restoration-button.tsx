import { Undo2 } from "lucide-react"
import { Button } from "~/components/ui/button"
import {} from "~/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"

export default function RestorationButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            className="rounded-full"
            onClick={() => {
              alert("メモを復元しました")
            }}
          >
            <Undo2 className="w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"メモを復元する"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
