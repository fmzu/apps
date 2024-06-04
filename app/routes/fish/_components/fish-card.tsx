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
}

export default function FishCard(props: Props) {
  return (
    <Card>
      <CardContent>
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>{props.features}</CardDescription>
        </CardHeader>
        <div>
          <p>{""}</p>
        </div>
      </CardContent>
    </Card>
  )
}
