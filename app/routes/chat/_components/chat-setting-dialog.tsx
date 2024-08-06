import { DialogContent } from "@radix-ui/react-dialog"
import { Button } from "~/components/ui/button"
import { Dialog, DialogTrigger } from "~/components/ui/dialog"

export default function ChatSettingDailog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{"設定"}</Button>
      </DialogTrigger>
      <DialogContent>
        <div>{""}</div>
      </DialogContent>
    </Dialog>
  )
}
