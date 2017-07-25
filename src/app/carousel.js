/**
 * Created by Administrator on 2017/7/20 0020.
 */

    var $ = require('jquery')

    function Carousel($ct){
        this.curtentPage=1;
        this.isanimate=false
        this.$ct=$ct
        this.init()
        this.bind()
    }
    Carousel.prototype.init=function(){
        var $wrap=this.$ct.find('ul').eq(0),
            $imgCt=$wrap.find('li')
            this.$imglength=$imgCt.length
        var $img=this.$ct.find('img')
            $imgCt.width($(window).width())
            $img.css({
                width:$(window).width()
            })
            this.$imgwidth=$img.first().width()
            $wrap.append($imgCt.first().clone())
            $wrap.prepend($imgCt.last().clone())
            $wrap.css({
                width:(this.$imglength+2)*this.$imgwidth,
                left:-this.$imgwidth
            })

    }
    Carousel.prototype.play=function($target){
        if(this.isanimate){
            return;
        }
        this.isanimate=true;
        var that=this
        this.$ct.find('ul').eq(0).animate({
          'left':'-='+that.$imgwidth*($target-that.curtentPage)
        },function(){
            that.isanimate=false
            that.curtentPage=$target
            that.bgMove()
            if(that.curtentPage>that.$imglength){
                that.curtentPage=1
                that.bgMove()
                that.$ct.find('ul').eq(0).css({
                    left:-that.$imgwidth
                })
            }else if(that.curtentPage===0){
                that.curtentPage=that.$imglength
                that.bgMove()
                that.$ct.find('ul').eq(0).css({
                    left:-that.$imgwidth*that.$imglength
                })
            }
        })
    }


    Carousel.prototype.bind=function(){
        var that = this
        this.$ct.find('.p-right').on('click',function(){
            console.log(111)
            that.play(that.curtentPage+1)
        })
        this.$ct.find('.p-left').on('click',function(){
            that.play(that.curtentPage-1)
        })
        this.$ct.find('.img-btn').on('click','li',function(){
            if($(this).hasClass('btn-bg')){
                return;
            }
            var index=$(this).index()
            that.play(index+1)
        })

    }

    Carousel.prototype.bgMove=function() {
        console.log(222)
        this.$ct.find('.img-btn>li').eq(this.curtentPage-1).addClass('btn-bg').siblings().removeClass('btn-bg')
    }

    module.exports=Carousel