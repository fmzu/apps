import {} from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"
import {} from "~/components/ui/tooltip"

export default function LoginButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>{"ログイン"}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{"ログイン"}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <Input placeholder="メールアドレス" />
          <Input placeholder="パスワード" />
          <Button variant={"outline"}>{"ログイン"}</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
