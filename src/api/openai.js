import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY; 

export const sendMessageToOpenAI = async (message) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error communicating with OpenAI:", error.response?.data || error.message);
    return "Maaf, terjadi kesalahan saat menghubungi AI.";
  }
};