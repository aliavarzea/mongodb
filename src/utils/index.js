class Movie {
    constructor(title, actor = "Not specified") {
        this.title = title;
        this.actor = actor
    }
    //Write our CRUD operations 

    //CREATE
    async create (collection) {
        await collection.insertOne(this)
    } 

    //READ 
    async read (collection) {
        return await collection.find({}).toArray();
    } 

    //TODO add deleteOne method
    async delete (collection) {
        await collection.deleteOne(this)
    }
    
    //TODO: add updateOne method
    async update (collection, key, filter) {
        await collection.updateOne({ [key]: filter }, { $set: this });
    }
}

module.exports = Movie