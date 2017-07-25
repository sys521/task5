/**
 * Created by Administrator on 2017/7/20 0020.
 */
    var $ = require('jquery')
    function goTop($ct){
        this.$ct=$ct
        this.top()
        this.bind()
    }
    goTop.prototype.top=function(){
        this.$div=$('<div class=gotop>goTop</div>')
       this.$div.css({
            width:'100px',
            padding:'10px 20px',
            position:'fixed',
            right:'50px',
            bottom:'40px',
            border:'1px solid #ccc',
            'text-align':'center',
            'border-radius':'4px',
            color:'#ccc',
            corsur:'pointer'
        });
        this.$ct.append(this.$div);
    };
    goTop.prototype.bind=function(){
        this.$div.on('click',function(){
            $(window).scrollTop(0)
        })
    }

    module.exports= goTop
