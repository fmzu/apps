import MemoHeader from "../memo._index/_components/memo-header"
import MemoNavigation from "../memo._index/_components/memo-navigation"
import ClearButton from "./_components/clear-button"
import DeleteMemoCard from "./_components/delete-memo-card"

export default function MemoDeletePage() {
  return (
    <div className="flex h-full w-full flex-col space-y-4 px-8">
      <div className="border-b">
        <MemoHeader />
      </div>
      <div className="flex space-x-4">
        <MemoNavigation />
        <div className="flex w-full flex-col space-y-4">
          <div className="flex justify-center">
            <p className="text-lg">
              {"ゴミ箱内のメモは七日後に削除されます。"}
            </p>
          </div>
          <div className="flex justify-end">
            <ClearButton />
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-2">
            <DeleteMemoCard
              text={"☆削除まであと二日になったら文字が赤くなる"}
            />
            <DeleteMemoCard text={"☆一日未満の時は１日未満って書く"} />
            <DeleteMemoCard text={"メモの内容"} />
            <DeleteMemoCard text={"メモの内容"} />
            <DeleteMemoCard text={"メモの内容"} />
          </div>
        </div>
      </div>
    </div>
  )
}
