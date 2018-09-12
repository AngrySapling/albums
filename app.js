var express = require("express");
var app = express();
var router = require("./controller");
app.set('view engine','ejs');

//路由中间件
app.use(express.static("./public"));//获取静态文件
app.use(express.static('./uploads'));
app.get('/',router.showIndex);

app.get("/:album",router.showAlbum);
app.use(function(req,res){
    res.render("404")
});
app.listen(3000);