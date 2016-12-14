/**
 * Created by mohsennabian on 11/22/16.
 */
module.exports = function () {

    var mongoose = require('mongoose');
    var connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/project';
    mongoose.connect(connectionString);

    var userModel = require("./user/user.model.server.js")();
    var noteModel = require("./note/note.model.server.js")();
    var articleModel=require("./article/article.model.server.js")();
    var colorModel=require("./color/color.model.server.js")();
    var evaluationModel=require("./evaluation/evaluation.model.server.js")();
    // var widgetModel=require("./widget/widget.model.server.js")();

    // var user={
    //     username:'alice',
    //     password:'alice'
    // };
    // userModel.createUser(user);

    var model = {
        userModel: userModel,
        noteModel: noteModel,
        articleModel:articleModel,
        colorModel:colorModel,
        evaluationModel:evaluationModel
        // widgetModel:widgetModel
    };

    noteModel.setModel(model);
    userModel.setModel(model);
    articleModel.setModel(model);
    colorModel.setModel(model);
    evaluationModel.setModel(model);
    // widgetModel.setModel(model);

    return model;
};
