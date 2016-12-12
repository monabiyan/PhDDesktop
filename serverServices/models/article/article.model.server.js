/**
 * Created by mohsennabian on 11/22/16.
 */
module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var ArticleSchema = require("./article.schema.server.js")();
    var ArticleModel  = mongoose.model("ArticleModel", ArticleSchema);

    var api = {
        createArticle: createArticle,
        // findAllPagesForWebsite: findAllPagesForWebsite,
        findArticleById: findArticleById,
        updateArticle: updateArticle,
        deleteArticle:deleteArticle,
        setModel: setModel
    };
    return api;


    function setModel(_model) {
        model = _model;
    }

    function createArticle(article){
        return ArticleModel
            .create(article);
            // .then(function(pageObj){
            //     model.websiteModel
            //         .findWebsiteById(websiteId)
            //         .then(function(websiteObj){
            //             pageObj._website = websiteObj._id;
            //             pageObj.save();
            //             websiteObj.pages.push(pageObj);
            //             return websiteObj.save();
            //         }, function(error){
            //             console.log(error);
            //         });
            // });
    }


    // function findAllPagesForWebsite(websiteId)
    // {
    //     return model.websiteModel.findWebsiteById(websiteId).populate("pages","name").exec();
    // }

    function findArticleById(articleId)
    {
        return(ArticleModel.findOne({_id:articleId}));
    }

    function updateArticle(article)
    {
        return(ArticleModel
            .update(
                {
                    _id: article._id
                },
                {
                    DOI: article.DOI

                }));
    }

    function deleteArticle(articleId)
    {
        return(ArticleModel.remove({_id:articleId}));
    }

};