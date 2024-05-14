import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "~/components/ui/dialog"
import {} from "~/components/ui/tooltip"

export default function ClearButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <p>{"ゴミ箱の中身を空にする"}</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <div>
          {
            "ゴミ箱の中身を空にしますか？ゴミ箱内のメモはすべて完全に削除されます。"
          }
        </div>
        <DialogFooter>
          <Button variant={"secondary"}>{"キャンセル"}</Button>
          <Button variant={"ghost"}>{"ゴミ箱を空にする"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
