import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

type Props = {
  name: string
  subject: string
  alias: string
  features: string
  summary: string
}

export default function FishCard(props: Props) {
  return (
    <Card className="max-w-lg items-center justify-center">
      <CardContent className="items-center justify-center bg-blue-300">
        <CardHeader className="items-center justify-center">
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>
            <p>{`科目: ${props.subject}`}</p>
            <p>{`別名: ${props.alias}`}</p>
          </CardDescription>
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
            <p>{`見た目：${props.features}`}</p>
            <p>{`特徴${props.summary}`}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
