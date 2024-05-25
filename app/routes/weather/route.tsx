import { useLoaderData } from "@remix-run/react"
import WeatherCard from "./_components/weather-card"

type Forecast = {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: 32400
  timezone: "Asia/Tokyo"
  timezone_abbreviation: "JST"
  elevation: number
  current_units: {
    time: string
    interval: string
    temperature_2m: string
  }
  current: {
    time: string
    interval: number
    temperature_2m: number
  }
  hourly_units: {
    time: string
    temperature_2m: string
  }
  hourly: {
    time: string[]
    temperature_2m: number[]
  }
}

export async function loader() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m&hourly=temperature_2m&timezone=Asia%2FTokyo&forecast_days=1",
  )
  if (!response.ok) {
    throw new Response("ネットワークエラーが発生しました", { status: 500 })
  }
  const json = await response.json()
  return json as Forecast
}

export default function WeatherPage() {
  const data = useLoaderData<typeof loader>()
  console.log("dataa", JSON.stringify(data))

  const hourly = data.hourly
  // console.log("aaa", hourly)

  const temperature = data.hourly.temperature_2m
  console.log("温度", temperature)

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 bg-cyan-200 p-8">
      <div className="flex flex-col items-center justify-center">
        <h1>{"現在の東京の気温"}</h1>
        <p className="flex justify-center">
          {`${
            (data as { current: { temperature_2m: number } }).current
              .temperature_2m
          }℃`}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4">
        {temperature.map((temp, index) => (
          <div key={index.toString()}>
            <WeatherCard temperature={temp} />
          </div>
        ))}
      </div>
    </div>
  )
}
