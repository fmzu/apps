import { useEffect, useState } from "react"
import { Button } from "~/components/ui/button"

export default function FlashPage() {
  const [flash, setFlash] = useState<[number]>([0])

  const [time, setTime] = useState(1000)

  useEffect(() => {
    const timeOut = setInterval(() => {
      /**
       * 0以上1未満のランダムな数値を生成する
       */
      const numbers = []
      for (let i = 0; i < 3; i = i + 1) {
        const random1 = Math.floor(Math.random() * (99 + 1 - 10)) + 10
        numbers.push(random1)
        setFlash([random1])
        console.log(numbers)
      }
    }, time)
    return () => clearInterval(timeOut)
  }, [time])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-80 w-80 flex-col items-center justify-center bg-green-950">
        {flash.map((i) => (
          <p key={i.toString()} className="text-9xl text-white">
            {i}
          </p>
        ))}
      </div>
      <div className="flex space-x-2">
        <Button onClick={() => setTime(1000)}>{"1000"}</Button>
        <Button onClick={() => setTime(500)}>{"500"}</Button>
      </div>
    </div>
  )
}
