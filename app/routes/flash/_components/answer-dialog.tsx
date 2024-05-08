import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"

type Props = {
  answer: string
  flashSum: number
}

export default function AnswerDialog(props: Props) {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        // onClick={() => {
        //   if (props.answer === props.flashSum.toString()) {
        //     alert("正解")
        //   }
        //   if (props.answer !== props.flashSum.toString()) {
        //     alert("不正解")
        //   }
        // }}
      >
        <Button variant="outline">{"確定"}</Button>
      </DialogTrigger>
      {props.answer === props.flashSum.toString() && (
        <DialogContent className="bg-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{"正解"}</DialogTitle>
            <DialogDescription>{"正解です！素晴らしい！"}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      )}
      {props.answer !== props.flashSum.toString() && (
        <DialogContent className="bg-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{"不正解"}</DialogTitle>
            <DialogDescription className="whitespace-pre-wrap">
              {`不正解です・・・。\n正しい答えは${props.flashSum}です。もう一度チャレンジしてみましょう！`}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      )}
    </Dialog>
  )
}
