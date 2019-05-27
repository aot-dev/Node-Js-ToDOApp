const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client)=>{
    if(err) {
        return console.log('error');
    }
    console.log("connected"); 
    const db = client.db("ToDoApp");
    // db.collection('users').find({address: 'Aurangabad'}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) =>{
    //     console.log("unable to fetch", err);
    // })
    db.collection('users').find().count().then((todos)=>{
        console.log('Todos'+ todos);
    }, (err) =>{
        console.log("unable to fetch", err);
    })
    client.close();
})