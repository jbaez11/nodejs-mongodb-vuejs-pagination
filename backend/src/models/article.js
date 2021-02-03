const {Schema, model}= require('mongoose');

const ArticleSchema = new Schema({
    title:String,
    description:String,
    imgUrl:String
})

module.exports =model('Article', ArticleSchema)