/**
 * Created by Administrator on 2017/7/20 0020.
 */

    var $ = require('jquery')

    function Waterfull($ct){
        this.$ct=$ct
        console.log(this.$ct)
        this.prepageCount=10
        this.pageName=1
        this.isloading=false
        this.watercols=[0,0,0]
        this.getNews()
        this.bind()
    }
    Waterfull.prototype.getNews=function(){
        var that=this
        if(this.isloading){
            return;
        }
        this.isloading=true;
        $.ajax({
            type:'get',
            url:'http://platform.sina.com.cn/slide/album_tech',
            dataType:'jsonp',
            jsonp:'jsoncallback',
            data:{
                app_key:'1271687855',
                num:that.perPageCount,
                page:that.pageName
            }
        }).done(function(result){
            if(result&&result.status&&result.status.code==='0'){
                that.placeNode(result.data)

                that.pageName++
            }
        })
    }
    Waterfull.prototype.placeNode=function(newsData) {
        var that = this
        console.log(1111)
        $.each(newsData, function (i, news) {
            that.isloading = false;
            var $node = that.getNode(news)

            $node.find('img').on('load',function(){
             that.$ct.append($node)
             that.go($node)
             })
            /*$node.find('img').load(function () {
                that.$ct.append($node)
                that.go($node)
            })*/
        })
    }
    Waterfull.prototype.getNode=function(news){
        var html=''
        var imgurl=news.img_url
        console.log(imgurl)
        var name=news.name
        var shortname=news.short_name
        var shortintro=news.short_intro
        html='<li class=item><img src='+imgurl+'><h4>'+shortname+'</h4><p>'+shortintro+'</p></li>'
        console.log(html)
        return $(html)

    }
    Waterfull.prototype.go=function($node){
        var that=this
        var $liwidth=$node.outerWidth(true)
        var  minvalue=Math.min.apply(null,that.watercols)
        var minindex=this.watercols.indexOf(minvalue)
        $node.css({
            top:minvalue,
            left:$liwidth*minindex
        })
        console.log($node.find('img').height())
        console.log($node.find('img').attr('src'))
        this.watercols[minindex]+=$node.outerHeight(true)
        this.$ct.height(Math.max.apply(null,that.watercols))
    }
    Waterfull.prototype.bind=function(){
        var that=this
        this.$ct.siblings('.loadmore').on('click',function(){
            that.getNews()
        })
    }

    module.exports=Waterfull