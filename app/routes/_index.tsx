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
    <div className="flex p-8">
      <TopCard />
    </div>
  )
}
