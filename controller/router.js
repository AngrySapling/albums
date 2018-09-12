var fs = require('../models/file.js');
//文件夹
exports.showIndex = function(req,res){
    fs.getAlbum(function(err,callback){
        if(err){
            res.render("404");
            return;
        }
        res.render('indexs',{
            album:callback
        })
    })
    
}
//文件
exports.showAlbum = function(req,res){
    var album = req.params.album;
    fs.getAllImage(album,function(err,allImage){
        if(err){
            res.render("404");
            return;
        }
        res.render("album",{
            "albumname":album,
            "imgUrl":allImage
        })
    })
    
}
