const express = require('express');
const {MongoClient, ObjectID} = require('mongodb');
const body_parser = require('body-parser');
const assert = require('assert');


const app = express();

app.use(body_parser.json());


const mongo_url = 'mongodb://localhost:27017';
const dataBase = 'contact-list';

MongoClient.connect(mongo_url, {useUnifiedTopology: true, useNewUrlParser: true}, (error, client) => {
    assert.equal(error, null, 'Data base connexion failed')

    const db = client.db(dataBase)

    app.post('/new_contact', (req, res) => {
        let newContact = req.body;
        db.collection('Contact List').insertOne(newContact, (error, data) =>{
            if (error) res.send('Can not add contact')
            else res.send(data)
        })
    })

    app.get('/contacts', (req, res) => {
        db.collection('Contact List').find().toArray((error, data) => {
            if (error) res.send('Can not fetch contact list')
            else res.send(data)
        })
    })

    app.put('/modify_contact/:id', (req, res) => {
        let id = ObjectID(req.params.id);
        let modifiedContact = {$set: req.body};
       db.collection('Contact List').findOneAndUpdate({_id : id}, {...modifiedContact}, (error, data) => {
           if (error) res.send('Can not update contact')
           else res.send(modifiedContact)
       })
    })

    app.delete('/delete_contact/:id', (req,res) => {
        let contactToRemoveId = ObjectID(req.params.id);
        db.collection('Contact List').findOneAndDelete({_id : contactToRemoveId}, (error, data) => {
            if (error) res.send('Can not delete contact')
            else res.send(data)   
        })
    })

})


app.listen(5000, (error) => {
    if (error) console.log('Server is not running')
    else console.log('Server is running on port 5000')
})