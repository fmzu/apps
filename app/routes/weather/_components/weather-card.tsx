type Props = {
  temperature: number
}

export default function WeatherCard(props: Props) {
  return (
    <div className="flex h-40 w-32 flex-col items-center justify-center border-black border-x border-y">
      <p>{"時"}</p>
      <p>{`${props.temperature}℃`}</p>
    </div>
  )
}
