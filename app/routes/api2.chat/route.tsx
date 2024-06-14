import type { ActionFunctionArgs } from "@remix-run/node"
import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_TOKEN,
})

export async function action({ request }: ActionFunctionArgs) {
  const { messages } = await request.json()

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    stream: true,
    messages,
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
