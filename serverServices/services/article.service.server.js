/**
 * Created by mohsennabian on 10/31/16.
 */
module.exports = function(app,model)
{

    // var pages = [
    //     { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
    //     { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
    //     { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
    // ];


    app.post("/api/create/article", createArticle);
    // app.get("/api/note/:wid/article", findPagesByWebsiteId);
    app.get("/api/find/article/:DOI", findArticleByDOI);
    app.put("/api/update/article", updateArticle);
    app.delete("/api/delete/article/:articleID", deletePage);


    function createArticle(req,res)
    {
        var article=req.body;
        // var websiteId=req.params.wid;
        model.articleModel.createArticle(article).then(function(article){res.json(article);});
    }

    // function findPagesByWebsiteId(req,res)
    // {
    //     var websiteId=req.params.wid;
    //     model.pageModel.findAllPagesForWebsite(websiteId).then(function(pages){res.send(pages);});
    // }

    function findArticleByDOI(req,res)
    {
        var DOI=req.params.DOI;
        model.articleModel.findArticleByDOI(DOI).then(function(article){res.json(article);});
    }

    function updateArticle(req,res)
    {
        var article=req.body;
        model.articleModel.updateArticle(article).then(function(article){res.json(article);});
    }

    function deletePage(req,res)
    {
        var articleId=req.params.articleID;
        model.articleModel.deleteArticle(articleId).then(function(article){res.json(article);});
    }
};


