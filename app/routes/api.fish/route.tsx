import type { LoaderFunction } from "@remix-run/node"
import OpenAI from "openai"
import { number, object, safeParse, string } from "valibot"

export const loader: LoaderFunction = async () => {
  const openai = new OpenAI({
    apiKey: "",
  })

  const message = `
  新種の海の生物を考案して以下の形式のJSONを日本語で応答してください。名前は偏りのないようにしてください。
  {
    名前: "string",
    分類: "string",
    外観: {
      色: "string",
      形状: "string",
      特徴: "string",
    },
    生息地: {
      海域: "string",
      深さ: "number",
    },
    習性: {
      食性: "string",
      行動: "string",
    },
    生態: {
      天敵: "string",
      繁殖: "string",
    },
  }
  `

  const schema = object({
    名前: string(),
    分類: string(),
    外観: object({
      色: string(),
      形状: string(),
      特徴: string(),
    }),
    生息地: object({
      海域: string(),
      深さ: number(),
    }),
    習性: object({
      食性: string(),
      行動: string(),
    }),
    生態: object({
      天敵: string(),
      繁殖: string(),
    }),
  })

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    response_format: { type: "json_object" },
    messages: [{ role: "user", content: message }],
  })

  const content = completion.choices[0].message.content

  if (!content) {
    return new Response("No content", {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  const contentObj = JSON.parse(content)

  const validationResult = safeParse(schema, contentObj)

  if (!validationResult.success) {
    return new Response(JSON.stringify(validationResult.issues), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  console.log(validationResult.output)

  const json = {
    name: validationResult.output.名前,
    classification: validationResult.output.分類,
    appearance: {
      color: validationResult.output.外観.色,
      shape: validationResult.output.外観.形状,
      features: validationResult.output.外観.特徴,
    },
    habitat: {
      ocean_region: validationResult.output.生息地.海域,
      depth: validationResult.output.生息地.深さ,
    },
    habits: {
      diet: validationResult.output.習性.食性,
      behavior: validationResult.output.習性.行動,
    },
    ecology: {
      predators: validationResult.output.生態.天敵,
      breed: validationResult.output.生態.繁殖,
    },
  }

  return new Response(JSON.stringify(json), {
    headers: { "Content-Type": "application/json" },
  })
}
