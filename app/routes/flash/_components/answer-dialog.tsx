import { useState } from "react"
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
import { Input } from "~/components/ui/input"

type Props = {
  flashSum: number
}

export default function AnswerDialog(props: Props) {
  const correctImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgODs0SOLvtxpiLD9Gg68laFF3uLQz48MOxvdzERanawil4fyxHUC5ot5PzXPJ0y3H7HH_1wRFOj4qL3zLu_wR1QnRdIBnZM7vSvQDd7vggassWAcTJk-EvXNIq6PRSDIGUUWIOkfSr_hY/s400/kuji_atari_woman.png"

  const incorrectImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguvdKVh5t7YFcEnzSCzxoRVro87G5yksu-uKpwnLLn0laqlj7wUyyBtYvSQU-brXFKJmVu-aArF_6Twna5ZTHsA_fFKoyc49dAgs0VDDilRiIUzRw7bDv5sVCuDWgP6NgvtmhmJT7VTyH0/s400/question_head_girl.png"

  const [answer, setAnswer] = useState("")

  return (
    <div className="flex w-full gap-x-4 p-4">
      <Input
        placeholder={"半角の数字で答えを入力してください"}
        onChange={(event) => {
          setAnswer(event.target.value)
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setAnswer("")
          }
        }}
      />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" disabled={answer === ""}>
            {"確定"}
          </Button>
        </DialogTrigger>
        {answer === props.flashSum.toString() && (
          <DialogContent className="max-w-lg bg-white">
            <DialogHeader>
              <DialogTitle>{"正解"}</DialogTitle>
              <DialogDescription>{"正解です！素晴らしい！"}</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center">
              <img src={correctImage} alt="正解" />
            </div>
            <DialogFooter className="flex items-center">
              {/* <Button className="flex items-center">
                {"次の問題へ"}
                <ArrowRight className="w-4" />
              </Button> */}
            </DialogFooter>
          </DialogContent>
        )}
        {answer !== props.flashSum.toString() && (
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
              {/* <Button>
                {"次の問題へ"}
                <ArrowRight className="w-4" />
              </Button> */}
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
