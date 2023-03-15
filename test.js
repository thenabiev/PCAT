const mongoose=require('mongoose');

const Schema=mongoose.Schema;

// // connect DB

mongoose.connect('mongodb://localhost/pcat-test-db')

// // create schema

const PhotoSchema=new Schema({
    title: String,
    description: String
});

const Photo=mongoose.model("Photo", PhotoSchema)

// // create a photo

// Photo.create({
//     title:"Photo 1",
//     description:"Photo description example 1"
// })
// Photo.create({
//     title:"Photo 2",
//     description:"Photo description example 2"
// })
// Photo.create({
//     title:"Photo 3",
//     description:"Photo description example 3"
// })

// // read a photo
Photo.find({},(err, data)=>{
    console.log(err);
})