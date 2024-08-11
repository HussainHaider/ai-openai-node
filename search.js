import 'dotenv/config'
import { Document } from 'langchain/document'
import { MemoryVectorStore } from 'langchain/vectorstores/memory' // like a database, an in-memory storage for vectors (semantic representations of data), not for production
import { OpenAIEmbeddings } from 'langchain/embeddings/openai' // use to send data and it will create embeddings for us.

const movies = [
    {
      id: 1,
      title: 'Stepbrother',
      description: `Comedic journey full of adult humor and awkwardness.`,
    },
    {
      id: 2,
      title: 'The Matrix',
      description: `Deals with alternate realities and questioning what's real.`,
    },
    {
      id: 3,
      title: 'Shutter Island',
      description: `A mind-bending plot with twists and turns.`,
    },
    {
      id: 4,
      title: 'Memento',
      description: `A non-linear narrative that challenges the viewer's perception.`,
    },
    {
      id: 5,
      title: 'Doctor Strange',
      description: `Features alternate dimensions and reality manipulation.`,
    },
    {
      id: 6,
      title: 'Paw Patrol',
      description: `Children's animated movie where a group of adorable puppies save people from all sorts of emergencies.`,
    },
    {
      id: 7,
      title: 'Interstellar',
      description: `Features futuristic space travel with high stakes`,
    },
  ]

// These documents are then fed into the MemoryVectorStore alongside the OpenAIEmbeddings to create a semantic store. 
// This store can perform similarity-based searches on its content.
// This is like we're creating a vector database. we will use this database later to query relevant data
const createtore = () => MemoryVectorStore.fromDocuments(
    movies.map((movie)=> new Document({
        pageContent: `Title ${movie.title}\n${movie.description}`, // this is the content i want to turn into the vector so that people can query around it
        metadata: {source: movie.id, title: movie.title}
    })), new OpenAIEmbeddings()
)

const search = async (query, count=1) => {
    const store = await createtore()
    return store.similaritySearchWithScore(query, count)
} 

console.log(await search("a movie that willl make me fell like I'm crazy"))  