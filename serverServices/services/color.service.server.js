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



    app.post("/api/create/color", createColor);
    app.get("/api/find/color/:userId/:DOI1/:DOI2",findColorByUserId_ArticleId);


    // app.get("/api/user/:uid/note", findWebsitesByUser);
    app.get("/api/find/color/:colorId", findColorById);
    app.put("/api/update/color", updateColor);
    app.delete("/api/delete/:colorId", deleteColor);





    function createColor(req,res)
    {
        var color=req.body;

        model.colorModel.createColor(color).then(function(color){res.json(color)});
    }

    function findColorByUserId_ArticleId(req,res)
    {
        var userId=req.params.userId;
        var DOI1=req.params.DOI1;
        var DOI2=req.params.DOI2;

        model.colorModel.findColorByUserId_ArticleDOI(userId,DOI1,DOI2).then(function(color){
            if (color==null){
                console.log('ali');
                res.send("0");
                console.log('maryam');
            }
            else{
                console.log('shodim');
                res.send(color);
                }
            // console.log('ali');
            // console.log(color);
            // res.send(color);},
            // function(err){
            //     console.log('aaahhhh')
            //     res.send('0');
            }
            );

    }

    function findColorById(req,res)
    {
        var colorId=req.params.colorId;
        model.websiteModel.findColorById(colorId).then(function(color){res.json(color);});

    }

    function updateColor(req,res)
    {
        var color=req.body;
        // var websiteId=website._id;
        model.colorModel.updateColor(color).then(function(colorObj){res.json(colorObj);});
    }

    function deleteColor(req,res)
    {
        var colorId = req.params.colorId;
        model.colorModel.deleteWebsite(colorId).then(function(color){res.json(color);});
    }

};
