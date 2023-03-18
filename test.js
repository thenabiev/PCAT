const mongoose=require('mongoose');

const Schema=mongoose.Schema;


// 1) Connect DB
mongoose.connect('mongodb://localhost/pcat-test-database');

// 2) Create schema
const PhotoSchema=new Schema({
    title: String,
    desc: String
})

const Photo=mongoose.model("PhotoModel", PhotoSchema);

// 3) Create a photo
// Photo.create({
//     title: "Photo title 2",
//     desc: "Photo description example 2",
// })

// 4) Read a data
// Photo.find({}).then(data => console.log(data));

// 5) Update data
// const id='6415d6c1e5e56807ececebf5';
// Photo.findByIdAndUpdate(
//     id,
//     {
//         title: "Photo title 1+",
//         desc: "Photo description example 1+",
//     },
//     {
//         new:true
//     },
// ).then(data=>console.log(data))
// .catch(err=>console.log(err))
// Photo.find({}).then(data => console.log(data));

// 6) Delete data
const id='6415d6c1e5e56807ececebf5';

Photo.findByIdAndDelete(id, {new: true})
.then(data=>console.log(data))
.catch(err=>console.log(err))

