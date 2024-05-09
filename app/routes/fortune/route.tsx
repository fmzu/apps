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
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZ4saXQS_vHBKazM9OJF2wxyuXyeN_zaqiAQ1iteC7r9ZK8t5XyJqnntVFsaGvv7oQFv5t1BjUmzt8Bi1P6fYSSdmWlcd36nzgxNmeB39DkQe6j2qU63C8eyn47jGeqKh5L_imU2V0S3PD/s800/dog_miniature_dachshund.png",
    },
    2: {
      title: "中吉",
      description: "中吉です！何事もほどほどくらいがちょうどいいですよ！",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj43Qf67CecA7zIR3NJUaooyxmvqD3e1O4x7qxMCMJgudBM7tE7TxP7cy-lT6m8roSpsdfQa3NZNikCVnPk-s2rpQkaZxQJ2pyjha1R-SohqlG5pH7CKev51j3Z9I19Pmakyhmgn4Gcj_W5/s180-c/hamster_sleeping_golden.png",
    },
    3: {
      title: "小吉",
      description: "小吉です！小さな幸せがたくさん訪れます！",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-CddTy25iWDx4gsP0QvHC8Qlach696Od-B26GSPJaQFS9FoJ7HIqiMuFssOUWBaHe3MPhqvymLmOeHy7tjTrX4uVI3Sqk8bW-ftEA6bfhQmTbA1muXmfrDVDHYxp27Y-qi0QH2qMNnXRT/s180-c/cat_sabineko.png",
    },
    4: {
      title: "凶",
      description: "凶です！今日は得を積んでいきましょう！",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKOHoLru5H0fchEUhNLRAdtrfYPEVZcBzaDtobRXibei7Q0OgLJVlP087HCpudg4yFx2acDKLPYWVEYkTCkDnxfnH7xEfTf1QalN70QpT_8eQs4S2JVxFSf_T7aPOuAuOCNgRDDyCW-JI_/s180-c/animal_alpaca_huacaya.png",
    },
    5: {
      title: "大凶",
      description:
        "大凶です！が！悪い運気はこのサイトに置いていくので大丈夫です！",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh05bFfvysjY5SwF1P_VKuIWSpZz6K3mlqFnA2uQUyGXUV51_FuiQG_uXkguwOnasKPgWV9S41KbSdxWrlbNofq1Yd5wC4_m3wY9obQeklvu-gHpov5xpCwX9MErbfrE4xvmmBob6r5oHvs/s180-c/animal_okojo_summer.png",
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
