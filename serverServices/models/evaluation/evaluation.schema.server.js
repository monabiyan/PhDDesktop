/**
 * Created by mohsennabian on 11/22/16.
 */
module.exports = function() {
    var mongoose = require("mongoose");
    // var WebsiteSchema = require("../note/note.schema.server")();
    var EvaluationSchema = mongoose.Schema({
        // _website:{type: mongoose.Schema.Types.ObjectId, ref : "WebsiteModel"},
        eval1: String,
        eval2:String,
        eval3:String,
        eval4:String,
        DOI1:String,
        DOI2:String,
        dateCreated : {type:Date,default:Date.now()},
        userId:{type: mongoose.Schema.Types.ObjectId, ref : "UserModel"},
        username:String

        // widgets : [{type: mongoose.Schema.Types.ObjectId, ref:'WidgetModel'}]
        // role: {type: String, enum: ['ADMIN', 'STUDENT', 'FACULTY']},
        // websites: [WebsiteSchema],
    }, {collection: "evaluation"});
    return EvaluationSchema;
};


