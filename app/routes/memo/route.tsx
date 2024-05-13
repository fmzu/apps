import MemoAddInput from "./_components/memo-add-form"
import MemoCard from "./_components/memo-card"
import MemoHeader from "./_components/memo-header"

export default function MemoPage() {
  return (
    <div className="flex h-full flex-col space-y-4 px-8">
      <div className="border-b">
        <MemoHeader />
      </div>
      <MemoAddInput />
      <div className="flex grid-rows-4 space-x-4">
        <MemoCard />
        <MemoCard />
        <MemoCard />
        <MemoCard />
      </div>
    </div>
  )
}
