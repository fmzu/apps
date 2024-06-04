import type { MetaFunction } from "@remix-run/node"
import { useMutation } from "@tanstack/react-query"
import { Button } from "~/components/ui/button"
import FishCard from "./_components/fish-card"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

type FishType = {
  name: string
  classification: string
  appearance: {
    color: string
    shape: string
    features: string
  }
  habitat: {
    ocean_region: string
    depth: number
  }
  habits: {
    diet: string
    behavior: string
  }
  ecology: {
    predators: string
    breed: string
  }
}

export default function FishPage() {
  const mutation = useMutation<FishType>({
    async mutationFn() {
      const result = await fetch("/api/fish", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ message: "Hello, world!" }),
      })
      const data: FishType = await result.json()
      return data
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
            features={mutation.data?.appearance.features!}
            diet={mutation.data?.habits.diet!}
            behavior={mutation.data?.habits.behavior!}
            breed={mutation.data?.ecology.breed!}
          />
        )}
      </div>
      <pre className="text-xs">{JSON.stringify(mutation.data, null, 2)}</pre>
    </div>
  )
}
