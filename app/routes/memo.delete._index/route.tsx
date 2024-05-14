import MemoHeader from "../memo._index/_components/memo-header"
import ClearButton from "./_components/clear-button"

export default function MemoDeletePage() {
  return (
    <div className="flex h-full w-full flex-col space-y-4 px-8">
      <div className="border-b">
        <MemoHeader />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <p className="text-lg">{"ゴミ箱内のメモは七日後に削除されます。"}</p>
        </div>
        <div className="flex justify-end">
          <ClearButton />
        </div>
      </div>
    </div>
  )
}
