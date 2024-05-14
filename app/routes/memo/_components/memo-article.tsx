import MemoAddForm from "./memo-add-form"
import MemoCard from "./memo-card"

export default function MemoArticle() {
  return (
    <div className="flex w-full flex-col space-y-4">
      <MemoAddForm />
      <div className="grid grid-cols-3 gap-x-2 gap-y-2">
        <MemoCard
          text={"☆基本的に作成した順で並んでいる（新しいものが後にくる）"}
        />
        <MemoCard text={"☆ツイッターみたいに@でタグ付け可能"} />
        <MemoCard text={"☆ドラッグで順番入れ替えたり削除欄への移動可能"} />
        <MemoCard text={"☆メモになった後もクリックしたら内容の編集可能"} />
        <MemoCard text={"☆固定したメモは全体の中でも最初の方に集まる"} />
      </div>
    </div>
  )
}
