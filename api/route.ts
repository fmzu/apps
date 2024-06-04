import { Hono } from "hono"
import { chatRoute } from "./routes/chat"
import { fishRoute } from "./routes/fish"

export const api = new Hono()
  .route("/api/chat", chatRoute)
  .route("/api/fish", fishRoute)

export type Api = typeof api
