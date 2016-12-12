/**
 * Created by mohsennabian on 10/31/16.
 */
module.exports = function(app,model) {


    // var websites = [
    //
    //     { _id: "123", name: "Facebook",    developerId: "456", description: "Lorem" },
    //     { _id: "234", name: "Tweeter",     developerId: "456", description: "Lorem" },
    //     { _id: "456", name: "Gizmodo",     developerId: "456", description: "Lorem" },
    //     { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    //     { _id: "678", name: "Checkers",    developerId: "123", description: "Lorem" },
    //     { _id: "789", name: "Chess",       developerId: "234", description: "Lorem" }
    //
    // ];



    app.post("/api/create/note", createNote);
    app.get("/api/find/notes/:userId/:DOI1/:DOI2",findNotesByUserId_ArticleDOI);
    app.get("/api/find/note/:noteId", findNoteById);
    app.put("/api/update/note", updateNote);
    app.delete("/api/delete/note/:noteId", deleteNote);




    function createNote(req,res)
    {
        var note=req.body;
        // var userId=req.params.userId;
        model.noteModel.createNoteForUser(note).then(function(note){res.json(note)});
    }

    function findNotesByUserId_ArticleDOI(req,res)
    {
        var userId=req.params.userId;
        var DOI1=req.params.DOI1;
        var DOI2=req.params.DOI2;
        model.noteModel.findNotesByUserId_ArticleDOI(userId,DOI1,DOI2).then(function(notes){res.send(notes);});

    }

    function findNoteById(req,res)
    {
        var noteId=req.params.noteId;
        model.noteModel.findNoteById(noteId).then(function(note){res.json(note);});

    }

    function updateNote(req,res)
    {
        var note=req.body;
        // var websiteId=website._id;
        model.noteModel.updateNote(note).then(function(note){res.json(note);});
    }

    function deleteNote(req,res)
    {
        var noteId = req.params.noteId;
        model.noteModel.deleteNote(noteId).then(function(note){res.json(note);});
    }

};
