/**
 * Created by mohsennabian on 11/22/16.
 */
module.exports = function() {
    var mongoose = require("mongoose");
    // var WebsiteSchema = require("../note/note.schema.server")();
    var ArticleSchema = mongoose.Schema({
        // _website:{type: mongoose.Schema.Types.ObjectId, ref : "WebsiteModel"},
        DOI1: String,
        DOI2: String

        // widgets : [{type: mongoose.Schema.Types.ObjectId, ref:'WidgetModel'}]
        // role: {type: String, enum: ['ADMIN', 'STUDENT', 'FACULTY']},
        // websites: [WebsiteSchema],
    }, {collection: "article"});
    return ArticleSchema;
};


