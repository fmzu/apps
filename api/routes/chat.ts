import { Hono } from "hono"
import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_TOKEN,
})

export const chatRoute = new Hono().post("/", async (c) => {
  const { messages } = await c.req.json()

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    stream: true,
    messages,
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
})
