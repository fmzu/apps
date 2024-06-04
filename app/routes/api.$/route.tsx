import type { ActionFunction, LoaderFunction } from "@remix-run/node"
import { api } from "api/route"

export const action: ActionFunction = (props) => {
  return api.fetch(props.request, {})
}

export const loader: LoaderFunction = (props) => {
  return api.fetch(props.request, {})
}
