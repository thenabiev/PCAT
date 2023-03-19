const mongoose=require('mongoose');
const Schema=mongoose.Schema;



// Create Schema
const PhotoSchema=new Schema({
    title:String,
    description:String,
    image:String,
    createDate: {
        type:Date,
        default:Date.now()
    }
})

const Photo=mongoose.model("PhotoGallery", PhotoSchema);


module.exports = Photo