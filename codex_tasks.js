const { Configuration, OpenAIApi } = require("openai");

// OpenAI API Configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function askCodex(prompt) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 100,
    });
    console.log("Codex Response:", response.data.choices[0].text.trim());
  } catch (error) {
    console.error("Error with OpenAI API:", error.message);
  }
}

// Example task: Generate code
askCodex("Generate a Node.js function to read a JSON file.");
