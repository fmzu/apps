import { Card, CardContent } from "~/components/ui/card"
import {} from "~/components/ui/dialog"

type Props = {
  adress: string
  image: string
  title: string
}

export default function TopCard(props: Props) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col items-center justify-center space-y-2 pt-6">
          <a href={`/${props.adress}`}>
            <img src={props.image} alt="" className="h-40 w-40" />
            <div className="flex justify-center">
              {`${props.title}はこちら`}
            </div>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
