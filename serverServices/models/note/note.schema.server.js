/**
 * Created by mohsennabian on 11/22/16.
 */

module.exports = function () {
    var mongoose = require("mongoose");
    var NoteSchema = mongoose.Schema({
        userId: {type: mongoose.Schema.Types.ObjectId, ref : "UserModel"},
        content:String,
        name:String,
        // pages : [{type: mongoose.Schema.Types.ObjectId, ref : "PageModel"}],
        // _article: {type: mongoose.Schema.Types.ObjectId, ref : "ArticleModel"},
        DOI1:String,
        DOI2:String,
        article_name:String,

        dateCreated : {type:Date,default:Date.now()}
    }, {collection: "note"});
    return NoteSchema;
};

