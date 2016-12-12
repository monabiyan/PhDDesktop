/**
 * Created by mohsennabian on 11/22/16.
 */
module.exports = function() {
    var mongoose = require("mongoose");
    // var WebsiteSchema = require("../note/note.schema.server")();
    var WidgetSchema = mongoose.Schema({
        _page:{type: mongoose.Schema.Types.ObjectId, ref : "PageModel"},
        type:{type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE','HTML','INPUT']},
        name: String,
        text: String,
        placeholder: String,
        description: String,
        url: String,
        width: String,
        height: String,
        row: Number,
        size: Number,
        class: String,
        icon: String,
        deletetable:Boolean,
        formatted:Boolean,
        dateCreated : {type:Date,ref:Date.now()},
    }, {collection: "widget"});
    return WidgetSchema;
};