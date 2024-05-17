import { Search } from "lucide-react"
import { Input } from "~/components/ui/input"
import {} from "~/components/ui/tooltip"

export default function SearchBox() {
  return (
    <div className="flex items-center space-x-2">
      <Search className="w-4" />
      <Input placeholder="Search" className="w-96" />
    </div>
  )
}
