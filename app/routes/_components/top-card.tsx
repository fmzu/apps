import { Card, CardContent } from "~/components/ui/card"
import {} from "~/components/ui/dialog"

export default function TopCard() {
  const sorobanImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRob8DwEHBZukvERl39g1aJ8rs8vioAKA7Q5pxU5gIgkL2ic73nZuMYznmdU2No1VkbutA8yDNtzaA9SZPS-EYVfHSt5tdcrBRok4TfAHHeGr4lcx5KDqFudYT3j-ARoMIa6EjF8zZtQqm/s180-c/soroban.png"

  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center space-y-2">
        <a href="/flash">
          <img src={sorobanImage} alt="" className="h-40 w-40" />
          <div className="flex justify-center">{"フラッシュ暗算はこちら"}</div>
        </a>
      </CardContent>
    </Card>
  )
}
