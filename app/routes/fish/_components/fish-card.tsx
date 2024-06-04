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
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://www.aipictors.com/wp-content/uploads/2024/06/gQdAj5VXR1ebUwHZuKfPtJByn9Sr0W.webp"
              alt="fish"
              className="h-40 w-40"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <li>{props.diet}</li>
            <li>{props.behavior}</li>
            <li>{props.breed}</li>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
