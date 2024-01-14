import {
  OAIBuildFunctionParams,
  OAIBuildMessageBasedParams,
  OAIBuildToolFunctionParams
} from "@/oai/params"

export const MODE = {
  FUNCTIONS: "FUNCTIONS",
  TOOLS: "TOOLS",
  JSON: "JSON",
  MD_JSON: "MD_JSON",
  JSON_SCHEMA: "JSON_SCHEMA"
} as const

export const MODE_TO_PARAMS = {
  [MODE.FUNCTIONS]: OAIBuildFunctionParams,
  [MODE.TOOLS]: OAIBuildToolFunctionParams,
  [MODE.JSON]: OAIBuildMessageBasedParams,
  [MODE.MD_JSON]: OAIBuildMessageBasedParams,
  [MODE.JSON_SCHEMA]: OAIBuildMessageBasedParams
}