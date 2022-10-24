require("dotenv").config();
const { MongoClient } = require("mongodb")

//client is our MongoDB cluster
const client = new MongoClient(process.env.MONGO_URI)

const connection = async () => {
    try {
        //the client connects to our cloud hosted MongoDB cluster using our connection MONGO_URI 
        //stored in our .env file
        // the client gives us access to the mongoDB methods

        // makes a connection to our client
        await client.connect()

        // what we want to call the database
        //creates the indivual collections inside our database
        const db = client.db("Movies")
        
        // We use the return to grab out collection to perform CRUD operations on our database
        return db.collection("Movie")

    } catch (error) {
        console.log(error)
    }

}
//returning two different items so we use object syntax =
module.exports = { client, connection }
// we export the client and connection so we can have access to our client and connection outside
// of this file
