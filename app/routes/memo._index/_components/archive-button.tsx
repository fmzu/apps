import { ArchiveRestore } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"

export default function ArchiveButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className="rounded-full"
            onClick={() => {
              alert("メモをアーカイブしました。")
            }}
          >
            <ArchiveRestore className="w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"アーカイブ"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
