import type { MetaFunction } from "@remix-run/node"
import { useMutation } from "@tanstack/react-query"
import { Button } from "~/components/ui/button"
import FishCard from "./_components/fish-card"
import { hc } from "hono/client"
import type { Api } from "api/route"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function FishPage() {
  const mutation = useMutation({
    async mutationFn() {
      const client = hc<Api>("/")
      const result = await client.api.fish.$get()
      return await result.json()
    },
  })

  console.log("あいうえお", mutation.data)

  const onClick = async () => {
    await mutation.mutateAsync()
  }

  const isLoading = mutation.status === "pending"

  return (
    <div className="p-4">
      <Button onClick={onClick}>{isLoading ? "実行中" : "実行"}</Button>
      <div>
        {mutation.data?.name && (
          <FishCard
            name={mutation.data?.name!}
            subject={mutation.data?.subject!}
            alias={mutation.data?.alias!}
            features={mutation.data?.appearance.features!}
            summary={mutation.data?.summary!}
          />
        )}
      </div>
      <pre className="text-xs">{JSON.stringify(mutation.data, null, 2)}</pre>
    </div>
  )
}
