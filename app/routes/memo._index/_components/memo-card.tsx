import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "~/components/ui/card"
import ClipButton from "./clip-button"
import CopyButton from "./copy-button"
import DeleteButton from "./delete-button"
import ShareButton from "./share-button"
import ImageAddButton from "./image-add-button"
import NotificationButton from "./notification-button"
import { Badge } from "~/components/ui/badge"

type Props = {
  text: string
}

export default function MemoCard(props: Props) {
  return (
    <Card>
      <CardHeader className="flex items-end justify-end px-4">
        <ClipButton />
      </CardHeader>
      <CardDescription className="px-4">
        <Badge className="outline">{"Badge"}</Badge>
      </CardDescription>
      <CardContent className="p-2 pb-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="flex justify-center">{props.text}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <NotificationButton />
        <CopyButton />
        <ImageAddButton />
        <ShareButton />
        <DeleteButton />
      </CardFooter>
    </Card>
  )
}