# AI OpenAI Node

A collection of Node.js applications demonstrating various use cases of OpenAI's API and LangChain integration.

## Features

This repository contains several examples showcasing different AI capabilities:

- **Basic Chat Completion** (`index.js`) - Simple OpenAI chat completion example
- **Interactive Chatbot** (`chat.js`) - Command-line chatbot with conversation history
- **Function Calling** (`function.js`) - Using OpenAI functions to perform calculations
- **Semantic Search** (`search.js`) - Vector-based similarity search for movies
- **Q&A System** (`qa.js`) - Question answering using PDF and YouTube video content with LangChain

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager
- OpenAI API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/HussainHaider/ai-openai-node.git
cd ai-openai-node
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenAI API key:
```
OPENAPI_API_KEY=your_openai_api_key_here
```

## Usage

### Basic Chat Completion
Run a simple chat completion example:
```bash
node index.js
```

### Interactive Chatbot
Start an interactive chatbot session:
```bash
node chat.js
```
Type your messages and press Enter. Type `exit` to end the chat.

### Function Calling with Calculator
Ask questions that require mathematical calculations:
```bash
node function.js "What is 25 * 4 + 10?"
```

### Semantic Movie Search
Search for movies based on semantic similarity:
```bash
node search.js
```

### Q&A from Documents
Ask questions about content from PDF files and YouTube videos:
```bash
node qa.js "Your question here"
```

## Dependencies

- **openai** - Official OpenAI Node.js library
- **langchain** - Framework for building applications with LLMs
- **@langchain/community** - Community integrations for LangChain
- **dotenv** - Environment variable management
- **advanced-calculator** - Math expression evaluation
- **pdf-parse** - PDF parsing for document Q&A
- **youtube-transcript** - YouTube transcript extraction
- **youtubei.js** - YouTube API wrapper

## Project Structure

```
├── index.js      # Basic OpenAI chat completion
├── chat.js       # Interactive chatbot with conversation history
├── function.js   # Function calling example with calculator
├── search.js     # Vector-based semantic search
├── qa.js         # Q&A system with PDF and YouTube content
├── openai.js     # OpenAI client configuration
└── xbox.pdf      # Sample PDF file for Q&A testing
```

## License

ISC
