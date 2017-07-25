/**
 * Created by Administrator on 2017/7/25 0025.
 */


module.exports={
    entry:'./src/index.js',
    output:{
        filename:'_index.js',
        path:__dirname+'/dist'
    },
    resolve:{
        alias:{
            jquery:__dirname+'/src/lib/jquery.js'
        }
    }
}