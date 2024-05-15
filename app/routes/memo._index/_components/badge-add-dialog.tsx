import { Badge } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"

export default function BadgeAddDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center justify-start space-x-2 border-b py-8 pl-0">
          <Badge className="w-4" />
          <p>{"バッジの追加・編集"}</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{"バッジ"}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <Input placeholder="新しいバッジを追加" />
          <Input placeholder="TypeScript" />
          <Input placeholder="CloudFlare" />
          <Input placeholder="Remix" />
          <Button variant={"outline"}>{"完了"}</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
