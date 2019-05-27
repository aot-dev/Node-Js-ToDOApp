// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client)=>{
    if(err) {
        return console.log('error');
    }
    console.log("connected"); 
    const db = client.db("ToDoApp");
    db.collection('users').insertOne({
        name: 'something',
        address: 'Aurangabad'
    }, (err, result)=> {
        if( err){
            return console.log("can't insert becoz "+ err)
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    client.close();
})