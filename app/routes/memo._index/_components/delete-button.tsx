import { Trash2 } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"

export default function DeleteButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className="rounded-full"
            onClick={() => {
              alert(
                "メモを削除しました（ゴミ箱にあるときは完全に消えますがいいですか？の表示）",
              )
            }}
          >
            <Trash2 className="w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"メモを削除する"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
