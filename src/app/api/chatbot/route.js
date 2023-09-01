import { ConversationChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
  MessagesPlaceholder,
} from "langchain/prompts";
import { BufferMemory } from "langchain/memory";
import { NextRequest, NextResponse } from "next/server";

const chat = new ChatOpenAI({
  // openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.5,
});

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know."
  ),
  new MessagesPlaceholder("history"),
  HumanMessagePromptTemplate.fromTemplate("{input}"),
]);

// Return the current conversation directly as messages and insert them into the MessagesPlaceholder in the above prompt.
const memory = new BufferMemory({
  returnMessages: true,
  memoryKey: "history",
});
console.log(memory);

const chain = new ConversationChain({
  memory,
  prompt: chatPrompt,
  llm: chat,
  verbose: true,
});

// const res = await chain.call({
//   input:
// });

export async function POST(request) {
  const message = await request.json();

  try {
    const response = await chain.call({ input: message });
    console.log("fgffhh", JSON.stringify(response));
    return new NextResponse(JSON.stringify(response));
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error));
  }
}
