import "./styles.css"

export default function WeatherPage() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo",
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("ネットワークエラーが発生しました")
      }
      return response.json()
    })
    .then((data) => {
      console.log("取得したデータ:", data)
      data.hourly.temperature_2m.forEach(
        (temperature: number, index: string) => {
          console.log(
            `時間: ${data.hourly.time[index]} - 気温: ${temperature}°C`,
          )
        },
      )
    })
    .catch((error) => {
      console.error("Fetch APIでエラーが発生しました:", error)
    })

  return (
    <div>
      <p>{"お天気予報"}</p>
    </div>
  )
}
