const { Configuration, OpenAIApi } = require("openai");

// Lataa ympäristömuuttujat
require("dotenv").config();

// Tulosta API-avain testiksi
console.log("Ladattu API-avain:", process.env.OPENAI_API_KEY);

// Määritä OpenAI-konfiguraatio
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // API-avain haetaan .env-tiedostosta
});

// Luo OpenAI API -instanssi
const openai = new OpenAIApi(configuration);

// Testaa yhteyttä OpenAI API:iin
(async () => {
  try {
    const response = await openai.listModels(); // Hae saatavilla olevat mallit
    console.log("Saatavilla olevat mallit:", response.data);
  } catch (error) {
    console.error("Virhe OpenAI API:ssa:", error.response ? error.response.data : error.message);
  }
})();
