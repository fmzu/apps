import {} from "~/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

type Props = {
  name: string
  features: string
  diet: string
  behavior: string
  breed: string
}

export default function FishCard(props: Props) {
  return (
    <Card className="max-w-lg items-center justify-center">
      <CardContent className="items-center justify-center bg-blue-300">
        <CardHeader className="items-center justify-center">
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>{props.features}</CardDescription>
        </CardHeader>
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmIv0zWDLtkWrpwH9bspXe88TTjMLODVeNuU9F0gImScWEE8DX0qrHQ3Qgh_7oFcCnVdTAclrI9Xno8gAhm4TQkNmqsh5zA7xm4eKUWJ58Iu1Bo6ORKUIIJLbLOllo1ICXPjscfolJ1mU/s180-c/youkai_umibouzu.png"
            alt="fish"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <li>{props.diet}</li>
          <li>{props.behavior}</li>
          <li>{props.breed}</li>
        </div>
      </CardContent>
    </Card>
  )
}
