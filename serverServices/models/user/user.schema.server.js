/**
 * Created by mohsennabian on 11/22/16.
 */
module.exports = function() {
    var mongoose = require("mongoose");
    // var WebsiteSchema = require("../note/note.schema.server")();
    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email:String,
        phone:String,
        dateCreated : {type:Date,default:Date.now()},
        // role: {type: String, enum: ['ADMIN', 'STUDENT', 'FACULTY']},
        notes: [{type: mongoose.Schema.Types.ObjectId, ref:'NoteModel'}],
        DOIs:[String]
        // websites: [WebsiteSchema],
    }, {collection: "user"});
    return UserSchema;
};