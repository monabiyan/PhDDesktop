/**
 * Created by mohsennabian on 11/22/16.
 */
module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var EvaluationSchema = require("./evaluation.schema.server.js")();
    var EvaluationModel  = mongoose.model("EvaluationModel", EvaluationSchema);

    var api = {
        createEvaluation: createEvaluation,
        // findAllColorsForWebsite: findAllPagesForWebsite,
        findEvaluationByArticleDOI:findEvaluationByArticleDOI,
        findEvaluationById: findEvaluationById,
        updateEvaluation: updateEvaluation,
        deleteEvaluation: deleteEvaluation,
        findEvaluationByUserId_ArticleDOI:findEvaluationByUserId_ArticleDOI,
        setModel: setModel
    };
    return api;


    function setModel(_model) {
        model = _model;
    }

    function createEvaluation(evaluation){
        // console.log(color);

        return EvaluationModel.create(evaluation);

    }




    function findEvaluationById(evaluationId)
    {
        return(EvaluationModel.findOne({_id:evaluationId}));
    }

    function findEvaluationByUserId_ArticleDOI(userId_,DOI1_,DOI2_)
    {
        return(EvaluationModel.find({userId:userId_,DOI1:DOI1_,DOI2:DOI2_}));
    }

    function findEvaluationByArticleDOI(DOI1_,DOI2_)
    {
        console.log(DOI1_,DOI2_);
        return(EvaluationModel.find({DOI1:DOI1_,DOI2:DOI2_}));
    }



    function updateEvaluation(evaluation)
    {
        console.log('from color model');
        console.log(evaluation);
        return(EvaluationModel
            .update(
                {
                    _id: evaluation._id
                },
                {
                    colorNo: evaluation.colorNo
                    // DOI1: color.DOI1,
                    // DOI2:color.DOI2,
                    // userId:color.userId
                }));
    }

    function deleteEvaluation(evaluationId)
    {
        return(EvaluationModel.remove({_id:evaluationId}));
    }

};