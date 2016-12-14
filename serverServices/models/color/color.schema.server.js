/**
 * Created by mohsennabian on 11/22/16.
 */
module.exports = function() {
    var mongoose = require("mongoose");
    // var WebsiteSchema = require("../note/note.schema.server")();
    var ColorSchema = mongoose.Schema({
        // _website:{type: mongoose.Schema.Types.ObjectId, ref : "WebsiteModel"},
        colorNo: String,
        DOI1:String,
        DOI2:String,
        userId:{type: mongoose.Schema.Types.ObjectId, ref : "UserModel"},
        articleTitle:String,

        dateCreated : {type:Date,default:Date.now()}
        // widgets : [{type: mongoose.Schema.Types.ObjectId, ref:'WidgetModel'}]
        // role: {type: String, enum: ['ADMIN', 'STUDENT', 'FACULTY']},
        // websites: [WebsiteSchema],
    }, {collection: "color"});
    return ColorSchema;
};


