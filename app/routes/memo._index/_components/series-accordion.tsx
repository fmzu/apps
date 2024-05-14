import { Tag } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import {} from "~/components/ui/tooltip"

export default function SeriesAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex items-center space-x-2 border-b py-8">
          <Tag className="w-4" />
          <p>{"ラベル"}</p>
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div>
            <p>{"TypeScript"}</p>
          </div>
          <div>
            <p>{"CloudFlare"}</p>
          </div>
          <div>
            <p>{"Remix"}</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
