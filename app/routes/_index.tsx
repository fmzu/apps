import type { MetaFunction } from "@remix-run/node"
import TopCard from "./_components/top-card"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <div className="flex space-x-4 p-8">
      <TopCard />
    </div>
  )
}
