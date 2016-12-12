/**
 * Created by mohsennabian on 10/31/16.
 */
module.exports = function(app) {

    var model = require("./models/model.server.js")();


    require("./services/user.service.server.js")(app,model);
    require("./services/note.service.server.js")(app,model);
    require("./services/article.service.server.js")(app,model);
    require("./services/color.service.server.js")(app,model);
    require("./services/evaluation.service.server.js")(app,model);
    // require("./services/widget.service.server.js")(app,model);
};


