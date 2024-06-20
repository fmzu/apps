import { Input } from "~/components/ui/input"

type Props = {
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function ChatSendInput(props: Props) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4">
      <form onSubmit={props.handleSubmit}>
        <Input
          value={props.input}
          placeholder="メッセージを入力"
          onChange={props.handleInputChange}
        />
      </form>
    </div>
  )
}
