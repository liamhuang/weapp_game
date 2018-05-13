
let img = wx.createImage();
let canvas = wx.createCanvas();
let context = canvas.getContext("2d");
let top = 300;

img.onload = function(){
    context.drawImage( this, 100 , top );
}
img.src = './hero.png'



//直线运动
/*
let width = canvas.width;
let height = canvas.height;
let times = 0;
let timer = null;
function fly(){
    timer = setInterval( function(){
        times ++;
        context.clearRect( 0 , 0 , width , height);
        context.drawImage( img , 100 , top - times*1);
    } , 10 )
}
fly();
*/



//控制游戏暂停启动
/*
let stop = false;
wx.onTouchStart( function(){
    if( false == stop ){
        stop = true;
        clearInterval( timer );
    }else{
        stop = false;
        fly();
    }
    
})
*/
