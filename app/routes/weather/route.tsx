import { useState, useEffect } from "react"
import "./styles.css"

export default function WeatherPage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m&hourly=temperature_2m&timezone=Asia%2FTokyo&forecast_days=1",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("ネットワークエラーが発生しました")
        }
        return response.json()
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error("Fetch APIでエラーが発生しました:", error)
      })
  }, [])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {data ? (
        <div>
          <h1>{"現在の東京の天気"}</h1>
          <p>
            {`気温:
            ${
              (data as { hourly: { temperature_2m: number[] } }).hourly
                .temperature_2m[0]
            }
            ℃`}
          </p>
        </div>
      ) : (
        <p>{"読み込み中..."}</p>
      )}
    </div>
  )
}
