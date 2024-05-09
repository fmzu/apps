import type { MetaFunction } from "@remix-run/node"
import TopCard from "./_components/top-card"

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

  return (
    <div className="flex space-x-4 p-8">
      <TopCard adress="flash" image={sorobanImage} title="フラッシュ暗算" />
      <TopCard adress="fortune" image={fortuneImage} title="おみくじ" />
    </div>
  )
}
