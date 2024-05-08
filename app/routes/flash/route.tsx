import { useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import AnswerDialog from "./_components/answer-dialog"

export default function FlashPage() {
  const [flash, setFlash] = useState<[number]>([0])

  const [time, setTime] = useState(1000)

  const [answer, setAnswer] = useState("")

  const [flashSum, setFlashSum] = useState(0)

  // const [count, setCount] = useState(3)

  useEffect(() => {
    const timeOut = setInterval(() => {
      /**
       * 0以上1未満のランダムな数値を生成する
       */
      if (flash.length < 6) {
        const random1 = Math.floor(Math.random() * (99 + 1 - 10)) + 10
        flash.push(random1)
        console.log(flash)
        setFlash([random1])
      }
      const sum = flash.reduce((a, b) => a + b, 0)
      console.log(sum)
      console.log("aa", setFlashSum(sum))
    }, time)
    return () => clearInterval(timeOut)
  }, [time])

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <div className="flex h-80 w-full flex-col items-center justify-center bg-green-950">
        {flash.map((i) => (
          <p key={i.toString()} className="text-9xl text-white">
            {i}
          </p>
        ))}
      </div>
      <div className="flex space-x-2">
        <Button onClick={() => setTime(1000)} variant={"outline"}>
          {"1000"}
        </Button>
        <Button onClick={() => setTime(500)} variant={"outline"}>
          {"500"}
        </Button>
      </div>
      <div className="flex gap-x-4">
        <Input
          placeholder={"答えを入力してください"}
          onChange={(event) => {
            const inputValue = event.target.value
            setAnswer(inputValue)
          }}
        />
        <AnswerDialog answer={answer} flashSum={flashSum} />
      </div>
      {/* <div className="flex space-x-2">
        <Button onClick={() => setCount(3)}>{"3"}</Button>
        <Button onClick={() => setCount(5)}>{"5"}</Button>
      </div> */}
    </div>
  )
}
