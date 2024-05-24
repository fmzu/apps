import { useLoaderData } from "@remix-run/react"

export async function loader() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m&hourly=temperature_2m&timezone=Asia%2FTokyo&forecast_days=1",
  )
  if (!response.ok) {
    throw new Response("ネットワークエラーが発生しました", { status: 500 })
  }
  return await response.json()
}

export default function WeatherPage() {
  const data = useLoaderData<typeof loader>()
  console.log("data", data)

  return (
    <div className="flex h-screen items-center justify-center space-x-4 bg-cyan-200 p-8">
      <div>
        <h1>{"現在の東京の気温"}</h1>
        <p className="flex justify-center">
          {`${
            (data as { current: { temperature_2m: number } }).current
              .temperature_2m
          }°C`}
        </p>
      </div>
    </div>
  )
}
