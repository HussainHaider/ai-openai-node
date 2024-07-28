import {openai} from "./openai"
import readline from 'node:readline'

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const newMessage = async (history, meseage) => {
    const results = await await  openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [...history, meseage],
        temperature: 0 // how creative the model can go. ) means it will talk facts
    })

    return results.choices[0].message
}

const formatMessage = (userInput) => ({role: "user", content: userInput})

const chat = () => {
    const history = [{
        role: 'system',
        content: 'You are an AI assistant. Answer questions'
    }]

    const start = () => {
        rl.question('You: ', async (userInput) => {
            if(userInput.toLowerCase()==="exit") {
                rl.close()
                return
            }

            const message = formatMessage(userInput)
            const response = await newMessage(history, message)

            history.push(message, response)
            console.log(`\n\nAI: ${response.content}`)
            start()
        })
    }

    start()
}

console.log("chatbot initialized. Type 'exit' to end the chat.")
chat();