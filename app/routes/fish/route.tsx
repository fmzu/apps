import type { MetaFunction } from "@remix-run/node"
import { useMutation } from "@tanstack/react-query"
import { Button } from "~/components/ui/button"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function FishPage() {
  const mutation = useMutation({
    async mutationFn() {
      const result = await fetch("/api/fish", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ message: "Hello, world!" }),
      })
      return await result.json()
    },
  })

  console.log("あいうえお", mutation.data)

  const onClick = async () => {
    await mutation.mutateAsync()
  }

  const isLoading = mutation.status === "pending"

  const fish = mutation.data

  return (
    <div className="p-4">
      <Button onClick={onClick}>{isLoading ? "実行中" : "実行"}</Button>
      <pre>{JSON.stringify(mutation.data, null, 2)}</pre>
      <p>{}</p>
    </div>
  )
}
