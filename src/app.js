const yargs = require("yargs")
//requring our client and connection from our connection file
const { client , connection } = require("./db/connection")
const Movie = require("./utils")

const app = async (yargsObject) => {
    const collection = await connection()

    try {
        // Create
        if (yargsObject.create) {
            const movie = new Movie(yargsObject.title, yargsObject.actor)
            await movie.create(collection)
            console.table(await movie.read(collection))
        //Read
        } else if (yargsObject.read) {
            const movie = new Movie(yargsObject.title, yargsObject.actor)
            console.table(await movie.read(collection))

        //TODO: add and call update method from Moive class
        } else if (yargsObject.update){
            const updateMovie = new Movie(yargsObject.title, yargsObject.actor)
            await updateMovie.update(collection, yargsObject.key, yargsObject.filter)
            console.table(await updateMovie.read(collection))
        //TODO: add and call delete method from Moive class
        } else if (yargsObject.delete) {
            const deleteMovie = new Movie(yargsObject.title, yargsObject.actor)
            await deleteMovie.delete(collection)
            console.table(await deleteMovie.read(collection))   
        } else {
            console.log("incorrect command")
        }

        await client.close()
    } catch (error) {
        console.log(error)
        await client.close()
    }
}

app(yargs.argv)