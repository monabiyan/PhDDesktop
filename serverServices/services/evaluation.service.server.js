/**
 * Created by mohsennabian on 10/31/16.
 */
module.exports = function(app,model) {





    app.post("/api/create/evaluation", createEvaluation);
    app.get("/api/find/evaluation/:userId/:DOI1/:DOI2",findEvaluationByUserId_ArticleDOI);
    app.get("/api/find/evaluation/:DOI1/:DOI2",findEvaluationByArticleDOI);


    // app.get("/api/user/:uid/note", findWebsitesByUser);
    // app.get("/api/find/color/:colorId", findColorById);
    // app.put("/api/update/color", updateColor);
    // app.delete("/api/delete/:colorId", deleteColor);





    function createEvaluation(req,res)
    {
        var evaluation=req.body;

        model.evaluationModel.createEvaluation(evaluation).then(function(evaluation){res.json(evaluation)});
    }

    function findEvaluationByUserId_ArticleDOI(req,res)
    {
        var userId=req.params.userId;
        var DOI1=req.params.DOI1;
        var DOI2=req.params.DOI2;

        model.evaluationModel.findEvaluationByUserId_ArticleDOI(userId,DOI1,DOI2).then(function(evaluation){
            if (evaluation==null){
                console.log('ali');
                res.send("0");
                console.log('maryam');
            }
            else{
                console.log('shodim');
                res.send(evaluation);
                }

            }
            );

    }


    function findEvaluationByArticleDOI(req,res)
    {

        var DOI1=req.params.DOI1;
        var DOI2=req.params.DOI2;

        model.evaluationModel.findEvaluationByArticleDOI(DOI1,DOI2).then(function(evaluation){
                if (evaluation==null){
                    console.log('ehsan');
                    res.send("0");
                    console.log('negar');
                }
                else{
                    console.log('ehsan2');
                    console.log(evaluation);
                    res.send(evaluation);
                }

            }
        );

    }





    //
    // function findColorById(req,res)
    // {
    //     var colorId=req.params.colorId;
    //     model.websiteModel.findColorById(colorId).then(function(color){res.json(color);});
    //
    // }
    //
    // function updateColor(req,res)
    // {
    //     var color=req.body;
    //     // var websiteId=website._id;
    //     model.colorModel.updateColor(color).then(function(colorObj){res.json(colorObj);});
    // }
    //
    // function deleteColor(req,res)
    // {
    //     var colorId = req.params.colorId;
    //     model.colorModel.deleteWebsite(colorId).then(function(color){res.json(color);});
    // }

};
