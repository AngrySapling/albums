var fs = require("fs")

exports.getAlbum = function(callback){
    fs.readdir('./uploads',function(err,files){
        if(err){
            callback("无法找到该文件夹",null);
            return;
        }
        var album = [];
        (function iterator(i){
            if(i == files.length){
                callback(null,album);
                return;
            }
            fs.stat('./uploads/'+files[i],function(err,stats){
                if(err){
                    callback("无法找到文件夹"+files[i],null)
                    return
                }
                if(stats.isDirectory()){
                    album.push(files[i]);
                }
                iterator(i+1);
            })
        })(0)
    })
}
exports.getAllImage = function(albumname,callback){
    fs.readdir('./uploads/'+albumname,function(err,files){
        if(err){
            callback("无法找到该文件夹",null);
            return;
        }
        var allImage = [];
        (function interator(i){
            if(i == files.length){
                callback(null,allImage);
                return;
            }
            fs.stat('./uploads/'+albumname+'/'+files[i],function(err,stats){
                if(err){
                    callback("无法找到该文件",null);
                    return;
                }
                if(stats.isFile()){
                    allImage.push(files[i]);
                }
                interator(i+1);
            })
        })(0)
    })
}