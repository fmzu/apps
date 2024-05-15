import { Bell } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

export default function NotificationDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={"sm"}
          className="flex items-center space-x-2 rounded-full border-b"
        >
          <Bell className="w-4" />
          {"今日 20:00"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>{"リマインダー"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>{"2024年05月15日"}</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>{"20:00"}</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>{"繰り返し"}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className="flex justify-end">
          <Button>{"保存"}</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
