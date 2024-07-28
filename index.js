import 'dotenv/config'
import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.OPENAPI_API_KEY})
const results =  await  openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{
        role: "system",
        content: "You are an AI assitant, answer any question to the best of your ability."
    }, {
        role: "user",
        content: "Hi!"
    }]
})

console.log(results)
console.log(results.choices[0])