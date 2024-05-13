import MemoArticle from "./_components/memo-article"
import MemoHeader from "./_components/memo-header"
import MemoNavigation from "./_components/memo-navigation"

export default function MemoPage() {
  return (
    <div className="flex h-full w-full flex-col space-y-4 px-8">
      <div className="border-b">
        <MemoHeader />
      </div>
      <div className="flex space-x-4">
        <MemoNavigation />
        <MemoArticle />
      </div>
    </div>
  )
}
