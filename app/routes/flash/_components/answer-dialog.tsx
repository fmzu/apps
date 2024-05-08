import { ArrowRight } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"

type Props = {
  answer: string
  flashSum: number
  setAnswer: (value: string) => void
}

export default function AnswerDialog(props: Props) {
  const correctImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgODs0SOLvtxpiLD9Gg68laFF3uLQz48MOxvdzERanawil4fyxHUC5ot5PzXPJ0y3H7HH_1wRFOj4qL3zLu_wR1QnRdIBnZM7vSvQDd7vggassWAcTJk-EvXNIq6PRSDIGUUWIOkfSr_hY/s400/kuji_atari_woman.png"

  const incorrectImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguvdKVh5t7YFcEnzSCzxoRVro87G5yksu-uKpwnLLn0laqlj7wUyyBtYvSQU-brXFKJmVu-aArF_6Twna5ZTHsA_fFKoyc49dAgs0VDDilRiIUzRw7bDv5sVCuDWgP6NgvtmhmJT7VTyH0/s400/question_head_girl.png"

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          disabled={props.answer === ""}
          className="bg-white text-black"
        >
          {"確定"}
        </Button>
      </DialogTrigger>
      {props.answer === props.flashSum.toString() && (
        <DialogContent className="max-w-lg bg-white">
          <DialogHeader>
            <DialogTitle>{"正解"}</DialogTitle>
            <DialogDescription>{"正解です！素晴らしい！"}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center">
            <img src={correctImage} alt="正解" />
          </div>
          <DialogFooter className="flex items-center">
            <Button className="flex items-center">
              {"次の問題へ"}
              <ArrowRight className="w-4" />
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
      {props.answer !== props.flashSum.toString() && (
        <DialogContent className="max-w-lg bg-white">
          <DialogHeader>
            <DialogTitle>{"不正解"}</DialogTitle>
            <DialogDescription className="whitespace-pre-wrap">
              {`不正解です・・・。\n正しい答えは${props.flashSum}です。もう一度チャレンジしてみましょう！`}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center">
            <img src={incorrectImage} alt="正解" />
          </div>
          <DialogFooter className="flex items-center">
            <Button className="flex items-center">
              {"次の問題へ"}
              <ArrowRight className="w-4" />
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  )
}
