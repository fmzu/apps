import { Card, CardContent, CardDescription } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import DeleteButton from "~/routes/memo._index/_components/delete-button"
import RestorationButton from "./restoration-button"

type Props = {
  text: string
}

export default function DeleteMemoCard(props: Props) {
  return (
    <Card className="p-4">
      <CardDescription>
        <Badge className="outline">{"Badge"}</Badge>
      </CardDescription>
      <CardContent className="p-2">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="flex justify-center">{props.text}</p>
        </div>
      </CardContent>
      <div className="flex justify-start">
        <DeleteButton />
        <RestorationButton />
      </div>
    </Card>
  )
}
