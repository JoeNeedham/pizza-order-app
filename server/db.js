import { Mongoose } from "mongoose";

var mongoURL = ''

Mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = Mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB COnnection Successful');
})

db.on('error', ()=>{
    console.log('Mongo DB Connection failed');
})

module.exports = Mongoose