import Prompt from "@models/prompt";
import { connectionToDB } from "@utlis/database";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectionToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("faild to create new Post", { status: 500 });
  }
};
