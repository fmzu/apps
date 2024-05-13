import MemoAddForm from "./memo-add-form"
import MemoCard from "./memo-card"

export default function MemoArticle() {
  return (
    <div className="flex w-full flex-col space-y-4">
      <MemoAddForm />
      <div className="flex grid-rows-3 space-x-4">
        <MemoCard />
        <MemoCard />
        <MemoCard />
        <MemoCard />
      </div>
    </div>
  )
}
