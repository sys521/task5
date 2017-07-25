/**
 * Created by Administrator on 2017/7/25 0025.
 */

var $ = require('jquery')

var Carousel = require('./app/carousel.js')
var goTop = require('./app/goTop.js')
var Waterfull= require('./app/waterfull.js')

new Carousel($('#carousel'))
new Waterfull($('#waterfull'))
new goTop ($('body'))