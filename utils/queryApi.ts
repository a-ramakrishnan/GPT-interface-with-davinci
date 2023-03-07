import openAI from "./chatgpt";

const queryOpenApi = async (prompt: string, chatId: string, model: string) => {
  const res = await openAI
    .createCompletion({
      model: model,
      prompt: prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `We could not find a response to that prompt {Error: ${err.message}`
    );
  return res;
};

export default queryOpenApi;
