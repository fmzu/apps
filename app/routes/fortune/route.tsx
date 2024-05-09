import { useState } from "react"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"

export default function FortunePage() {
  const results = [1, 2, 3, 4, 5]

  const [random, setRandom] = useState(
    Math.floor(Math.random() * results.length) + 1,
  )

  const handleClick = () => {
    setRandom(Math.floor(Math.random() * results.length) + 1)
  }

  // const handleClick = () => {
  //   const randoms = Math.floor(Math.random() * results.length)

  //   if (randoms === 1) {
  //     alert("大吉")
  //   }
  //   if (randoms === 2) {
  //     alert("中吉")
  //   }
  //   if (randoms === 3) {
  //     alert("小吉")
  //   }
  //   if (randoms === 4) {
  //     alert("凶")
  //   }
  //   if (randoms === 5) {
  //     alert("大凶")
  //   }
  // }

  const resultDialogs = {
    1: {
      title: "大吉",
      description: "大吉です！良い日になりますように！",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgi_nfe6sUsA9El67mO1g5bzrLpAuA_l1UffQvMSIS4xJBsDm4nrEa6ud4a_TNCiEMPKzCBgIrw5B2M13Z-Pnj0xgzTEZDJG1rw5btr9IU3ZEumWF6ULJMaWV_454iU1D_0csdaE_VfW3FO/s180-c/animalface_inu.png",
    },
    2: {
      title: "中吉",
      description: "中吉です！何事もほどほどくらいがちょうどいいですよ！",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-qZ8JzoZJPHXKJxSnF8Og9F6n13etlS7AYQkKi7iMMGK4HmLT7uFVLLDZQ9tl5zGYuPH93S9TvSxOK54gFdGm4O0xMYx23zd6evKr83egqJAdkORWDnVW_czyZECBUXx6Wc3K1ujxiOY0/s180-c/animalface_neko.png",
    },
    3: {
      title: "小吉",
      description: "小吉です！小さな幸せがたくさん訪れます！",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4a1vvAc4Wm74WATWPGdOkOtPdcpyqtNkoytzdTg10rTStJdMhQxcwKHhOXBa-hsWrk0iVgtDTTOmSmwwMk5vfvtiwXCrIvFoizIOE_-pKctGlcac5sdOqn7Bf1XG1X2xRKBkaLwKC_0zn/s180-c/animalface_hitsuji.png",
    },
    4: {
      title: "凶",
      description: "凶です！今日は得を積んでいきましょう！",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEief0jlQMQFPYXsA7ENsXPzDMZfwjWj_mHYt3OMiQQdDD8v73yS6AT86G4lX_iPvkPx9RCuFV8y-CbPOUL5konZZmCSFb1pfGVMixqeZUWGNURPOzur3WuYYZom9qBrngjHdwrrRYAcyktw/s180-c/animalface_araiguma.png",
    },
    5: {
      title: "大凶",
      description:
        "大凶です！が！悪い運気はこのサイトに置いていくので大丈夫です！",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiofywA44EM7IlWA5LLw0bI4ldFfMrDeINyP57YXK83IEgB2bQoYMAcXeQZDmQYQ6Nijh86OEG47BrecvTg0ai3paWfmJ0-RX1e7THI11fhhO2YX7FuRDr4LyvUa6RZWftJB4uNUrR7WXlj/s180-c/animalface_usagi.png",
    },
  }

  return (
    <div className="flex h-screen items-center justify-center space-x-4 bg-pink-300">
      <p className="text-white">{"fortune"}</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="items-center rounded-full bg-white text-pink-400"
            onClick={handleClick}
          >
            {"TAP!!!"}
          </Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col items-center justify-center bg-white">
          <DialogHeader className="flex items-center justify-center">
            <DialogTitle>
              {resultDialogs[random as keyof typeof resultDialogs].title}
            </DialogTitle>
            <DialogDescription>
              {resultDialogs[random as keyof typeof resultDialogs].description}
            </DialogDescription>
            <div>
              <img
                src={resultDialogs[random as keyof typeof resultDialogs].image}
                alt=""
                className="h-32 w-32"
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
