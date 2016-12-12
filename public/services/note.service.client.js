(function(){
    angular
        .module("ResearchApp")
        .factory("NoteService", NoteService);

    function NoteService($http) {
        // var websites = [
        //
        //         { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
        //         { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
        //         { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
        //         { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
        //         { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
        //         { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        //
        //
        // ];

        var api = {
            createNote:createNote,
            findNotesByUserId_ArticleDOI: findNotesByUserId_ArticleDOI,
            findNoteById:findNoteById,
            updateNote:updateNote,
            deleteNote:deleteNote
        };

        return api;


        function createNote(note){

            return $http.post("/api/create/note", note)
        }


        function findNotesByUserId_ArticleDOI(userId,DOI1,DOI2){

            return $http.get("/api/find/notes/"+userId+"/"+DOI1+"/"+DOI2);
        }


        function findNoteById(noteId){
            var url = "/api/find/note/" + noteId;
            return $http.get(url);
        }


        function updateNote(note){

            return $http.put("/api/update/note",note);
        }


        function deleteNote(noteId){

            return $http.delete("/api/delete/note/"+noteId);
        }
    }
})();

