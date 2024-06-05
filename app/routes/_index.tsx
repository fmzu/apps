import type { MetaFunction } from "@remix-run/node"
import { TopCard } from "~/components/top-card"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const sorobanImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRob8DwEHBZukvERl39g1aJ8rs8vioAKA7Q5pxU5gIgkL2ic73nZuMYznmdU2No1VkbutA8yDNtzaA9SZPS-EYVfHSt5tdcrBRok4TfAHHeGr4lcx5KDqFudYT3j-ARoMIa6EjF8zZtQqm/s180-c/soroban.png"

  const fortuneImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmg2kn9DyMES8p81iw0-civQjYw0bIDleQAH8gOAp_mv75OnJaeBgcv6vsVIRNnHT-BTuDfmmQ4X8bgRi3U6tQdG-m5C0nYzWahyDp4vyYTPs7BvcsAZVIhzkHt-scsWxKhE3B3JMs_Y8/s180-c/syougatsu2_omijikuji2.png"

  const chatImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSGZpqkV7YwWFAMKWF4nsi4QIQUy4gHmDYGc1_yFAd0fLA6sIQZCaQeoeVGm8jv-gPY7dGwVIrC5GFxfMOQdhgpoVh42GvjUc3nUNU9KyaPxdM-kzw7HqUK1CC8UZU0BtOJFEKCaOaGm4/s180-c/idol_akusyu.png"

  const fishImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhh1pRQqTF0AJmY9FkoFPzDNPuN5JRbvnbhvDtuofK7rWMV-OIEfbr14VepX1F5oKC0CLjlP0LqJsTBQInCCScICpqAvbhkrvezD0BdvSV0Gn5llPXZ2E8nfNiZRSR5lBGqqHsvdmrhZbdj/s180-c/suizokukan_jinbeizame.png"

  return (
    <div className="flex space-x-4 p-8">
      <TopCard adress="flash" image={sorobanImage} title="フラッシュ暗算" />
      <TopCard adress="fortune" image={fortuneImage} title="おみくじ" />
      <TopCard adress="chat" image={chatImage} title="AIチャット" />
      <TopCard adress="fish" image={fishImage} title="架空の海洋生物図鑑" />
    </div>
  )
}
