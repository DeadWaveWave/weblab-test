//控制播放音乐
var number=true;
var music=document.getElementById("music");

msc.onclick=function(){
    if(number===false){
        number=true;
        music.pause();
    }else{
        number=false;
        music.play();
    }
}  

//图片放大
var flag=false;
function show(pic){
    if(flag===false){
        pic.style.transform = "translate(0px, 0px) scale(1.5) rotate(0deg)";
        flag=true;
    } else {
        pic.style.transform = "none";
        flag=false;
    }
}
