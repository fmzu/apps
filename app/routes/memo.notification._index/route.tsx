import { Card, CardContent, CardDescription } from "~/components/ui/card"
import MemoAddForm from "../memo._index/_components/memo-add-form"
import MemoHeader from "../memo._index/_components/memo-header"
import MemoNavigation from "../memo._index/_components/memo-navigation"
import ClipButton from "../memo._index/_components/clip-button"
import CopyButton from "../memo._index/_components/copy-button"
import DeleteButton from "../memo._index/_components/delete-button"
import ImageAddButton from "../memo._index/_components/image-add-button"
import NotificationButton from "../memo._index/_components/notification-button"
import ShareButton from "../memo._index/_components/share-button"
import { Badge } from "~/components/ui/badge"
import NotificationDropdown from "./_components/notification-dropdown"
import RestorationButton from "../memo.delete._index/_components/restoration-button"

export default function NotificationPage() {
  return (
    <div className="flex h-full w-full flex-col space-y-4 px-8">
      <div className="border-b">
        <MemoHeader />
      </div>
      <div className="flex space-x-4">
        <MemoNavigation />
        <div className="flex w-full flex-col space-y-4">
          <MemoAddForm />
          <div className="grid grid-cols-3 gap-x-2 gap-y-2">
            <Card className="p-4">
              <CardDescription className="flex items-center justify-between">
                <Badge className="outline">{"Badge"}</Badge>
                <ClipButton />
              </CardDescription>
              <CardContent className="p-2">
                <div className="flex flex-col items-center justify-center gap-y-2">
                  <p className="flex justify-center">{"text"}</p>
                </div>
              </CardContent>
              <NotificationDropdown />
              <div className="flex">
                <NotificationButton />
                <CopyButton />
                <ImageAddButton />
                <ShareButton />
                <RestorationButton />
                <DeleteButton />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
