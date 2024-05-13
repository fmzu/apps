import { Menu } from "lucide-react"
import { Button } from "~/components/ui/button"
import {} from "~/components/ui/tooltip"
import SearchBox from "./search-box"
import { Separator } from "~/components/ui/separator"
import LoginButton from "./login-button"

export default function MemoHeader() {
  return (
    <div className="flex flex-col">
      <div className="flex h-28 items-center justify-between space-x-4">
        <div className="flex items-center">
          <Button variant="ghost" className="rounded-full">
            <Menu className="w-4" />
          </Button>
          <p className="text-xl">{"MEMO"}</p>
        </div>
        <SearchBox />
        <LoginButton />
      </div>
      <Separator />
    </div>
  )
}
