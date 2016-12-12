/**
 * Created by mohsennabian on 11/22/16.
 */
module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var ColorSchema = require("./color.schema.server.js")();
    var ColorModel  = mongoose.model("ColorModel", ColorSchema);

    var api = {
        createColor: createColor,
        // findAllColorsForWebsite: findAllPagesForWebsite,
        findColorById: findColorById,
        updateColor: updateColor,
        deleteColor: deleteColor,
        findColorByUserId_ArticleDOI:findColorByUserId_ArticleDOI,
        setModel: setModel
    };
    return api;


    function setModel(_model) {
        model = _model;
    }

    function createColor(color){
        // console.log(color);
        console.log("Shahram");
        return ColorModel.create(color);
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

    function findColorById(colorId)
    {
        return(ColorModel.findOne({_id:colorId}));
    }

    function findColorByUserId_ArticleDOI(userId_,DOI1_,DOI2_)
    {
        return(ColorModel.findOne({userId:userId_,DOI1:DOI1_,DOI2:DOI2_}));
    }

    function updateColor(color)
    {
        console.log('from color model');
        console.log(color);
        return(ColorModel
            .update(
                {
                    _id: color._id
                },
                {
                    colorNo: color.colorNo
                    // DOI1: color.DOI1,
                    // DOI2:color.DOI2,
                    // userId:color.userId
                }));
    }

    function deleteColor(colorId)
    {
        return(ColorModel.remove({_id:colorId}));
    }

};