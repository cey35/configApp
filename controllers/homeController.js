const path = require('path');
const views = path.join(__dirname, '../public');

var indexAction = function(req, res, next){
    res.sendFile("app.html", {root : views});
};

module.exports.indexAction = indexAction;