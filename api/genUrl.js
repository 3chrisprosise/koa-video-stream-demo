const fs = require('fs');

module.exports.getUrlByAbsoPath = async (ctx,next) => {
    let absoPath = ctx.request.body.path;
    if(fs.existsSync(absoPath)){

    }else {
        ctx.body = {
            message: '文件不存在',
            status: '0'
        }
    }
};