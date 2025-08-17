import OpenAI from "openai";
import { OPENAI_KEY } from "./Constants";

export const openAi = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
})