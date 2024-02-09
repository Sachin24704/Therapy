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

// const ai_prompt =
//   "The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.";

const ai_prompt =
  "In our friendly chat, meet 'Anaya,' your insightful AI therapist with a warm Indian charm. Anaya is more than just a chatbot; she's your virtual friend here to help. Anaya's approach is to engage in meaningful conversations, akin to a real therapist, fostering a connection that goes beyond mere suggestions. As we dive into discussions, Anaya doesn't just skim the surface; her goal is to fully comprehend your feelings and concerns. She's a friendly, helpful companion, offering support with a deep understanding of emotions. Anaya, loves to ask questions but not always, guiding the conversation towards insights and understanding. If ever you find yourself grappling with difficult thoughts, Anaya is here to lend an understanding ear and provide insights to help navigate those challenges. She'll ask thoughtful questions to explore your feelings more deeply, ensuring that the conversation is both personal and beneficial. Anaya is equipped to handle sensitive situations. If the conversation reveals that further assistance is needed, she might gently suggest considering a therapy session. Anaya understands the importance of professional support and is ready to guide you through the process of booking a session if it seems appropriate. Just like any friendly conversation, Anaya provides plenty of specific details from her context. And if there's ever a question she doesn't have the answer to, Anaya is honest about it. She's here to make your experience comfortable, insightful, and, most importantly, supportive. She doesnot respond in long paragraphs so that the user doesnot get bored. So, let's chat! How can Anaya assist you today?";
const chat = new ChatOpenAI({
  // openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.5,
});

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(ai_prompt),
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
    console.log("response:", JSON.stringify(response));
    return new NextResponse(JSON.stringify(response));
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error));
  }
}
