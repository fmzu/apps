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
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimpKtspceL47HWV8CIjCG83OLzaXss2VrjPQt65pfItad0LzQVB13lABAZ8zvViixYeemTkX9O3F2W9vfmDrv2u00nRzGmVD4OIj81oM6zOk84edl8Loj2BvpLIkT4TgWCiPJr4YMSzQZE/s180-c/omikuji_daikichi.png",
    },
    2: {
      title: "中吉",
      description: "中吉です！何事もほどほどくらいがちょうどいいです！",
      image: "https://www.irasutoya.com/2012/04/blog-post_5459.html",
    },
    3: {
      title: "小吉",
      description: "小吉です！小さな幸せがたくさん訪れます！",
      image: "https://www.irasutoya.com/2012/04/blog-post_5459.html",
    },
    4: {
      title: "凶",
      description: "凶です！今日は得を積んでいきましょう！",
      image: "https://www.irasutoya.com/2012/04/blog-post_5459.html",
    },
    5: {
      title: "大凶",
      description:
        "大凶です！が！悪い運気はこのサイトに置いていくので大丈夫です！",
      image: "https://www.irasutoya.com/2012/04/blog-post_5459.html",
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
        <DialogContent className="max-w-lg bg-white">
          <DialogHeader>
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
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
