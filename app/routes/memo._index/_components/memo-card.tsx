import { Card, CardContent, CardDescription } from "~/components/ui/card"
import ClipButton from "./clip-button"
import CopyButton from "./copy-button"
import DeleteButton from "./delete-button"
import ShareButton from "./share-button"
import ImageAddButton from "./image-add-button"
import NotificationButton from "./notification-button"
import { Badge } from "~/components/ui/badge"
import ArchiveButton from "./archive-button"

type Props = {
  text: string
}

export default function MemoCard(props: Props) {
  return (
    <Card className="p-4">
      <CardDescription className="flex items-center justify-between">
        <Badge className="outline">{"Badge"}</Badge>
        <ClipButton />
      </CardDescription>
      <CardContent className="p-2">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="flex justify-center">{props.text}</p>
        </div>
      </CardContent>
      <div className="flex">
        <NotificationButton />
        <CopyButton />
        <ImageAddButton />
        <ShareButton />
        <ArchiveButton />
        <DeleteButton />
      </div>
    </Card>
  )
}
