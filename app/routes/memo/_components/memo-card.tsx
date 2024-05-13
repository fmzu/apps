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
import { Badge } from "~/components/ui/badge"

export default function MemoCard() {
  return (
    <Card className="w-screen lg:w-1/3 md:w-1/2">
      <CardHeader className="flex items-end justify-end px-4">
        <ClipButton />
      </CardHeader>
      <CardDescription className="px-4">
        <Badge className="outline">{"Badge"}</Badge>
      </CardDescription>
      <CardContent className="p-2 pb-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="flex justify-center">{"memo"}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CopyButton />
        <ImageAddButton />
        <ShareButton />
        <DeleteButton />
      </CardFooter>
    </Card>
  )
}
