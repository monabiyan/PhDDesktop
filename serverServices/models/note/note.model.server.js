/**
 * Created by mohsennabian on 11/22/16.
 */

module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var NoteSchema = require("./note.schema.server.js")();
    var NoteModel = mongoose.model("NoteModel", NoteSchema);

    var api = {
        createNoteForUser: createNoteForUser,
        findAllNotesForUser: findAllNotesForUser,
        findNotesByUserId_ArticleDOI:findNotesByUserId_ArticleDOI,
        findNoteById:findNoteById,
        updateNote:updateNote,
        deleteNote:deleteNote,
        setModel: setModel
    };

    return api;




    function setModel(_model) {
        model = _model;
    }



    // function createWebsiteForUser(userId, website) {
    //     return WebsiteModel
    //         .create(website)
    //         .then(function(websiteObj){
    //             model.userModel
    //                 .findUserById(userId)
    //                 .then(function(userObj){
    //                     websiteObj._user = userObj._id;
    //                     websiteObj.save();
    //                     userObj.websites.push(websiteObj);
    //                     return userObj.save();
    //                 }, function(error){
    //                     console.log(error);
    //                 });
    //         });
    // }

    function createNoteForUser(note) {
        return NoteModel
            .create(note)
            .then(function(noteObj){
                model.userModel
                    .findUserById(note.userId)
                    .then(function(userObj){
                        // websiteObj._user = userObj._id;
                        // websiteObj.save();
                        userObj.noteIds.push(noteObj);
                        return userObj.save();
                    }, function(error){
                        console.log(error);
                    });
            });
    }


    function findAllNotesForUser(userId)
    {
        return model.userModel.findUserById(userId).populate("noteIds").exec();
    }

    function findNotesByUserId_ArticleDOI(userId,a_DOI1,a_DOI2)
    {
        return NoteModel.find({userId:userId,DOI1:a_DOI1,DOI2:a_DOI2});
    }
    function findNoteById(noteId){

        return(NoteModel.findOne({_id: noteId}));

    }


    function updateNote(note){
        return NoteModel
            .update(
                {
                    _id: note._id
                },
                {
                    content: note.content,
                    _user: note._user,
                    _article:note._article,
                    dateCreated:note.dateCreated
                }
            );
    }

    function deleteNote(noteId){

        return NoteModel
            .remove({_id: noteId});

    }



};