//等待页面加载完成后才会执行。
if (document.all){
  window.attachEvent('onload', c_block);
}else{
  window.addEventListener('load', c_block, false);
}
//改变排版
//一个BUG：这些name必须要连续出现，否则断层后面的部分无法生效
function c_block() {     
  var div0 = document.getElementsByName("0");   
  var div1 = document.getElementsByName("1");
  var div2 = document.getElementsByName("2");
  var div3 = document.getElementsByName("3");
  var div4 = document.getElementsByName("4");
  var div5 = document.getElementsByName("5");
  var div6 = document.getElementsByName("6");
  var div7 = document.getElementsByName("7");
  var div8 = document.getElementsByName("8");
  var div9 = document.getElementsByName("9");
  var div10 = document.getElementsByName("10");
  
  whole.onclick = function () {
    for (var i = 0; i < div0.length; i++) {
      div0[i].style.display = "block";
    }
    for (var i = 0; i < div1.length; i++) {
      div1[i].style.display = "block";
    }
    for (var i = 0; i < div2.length; i++) {
      div2[i].style.display = "block";
    }
    for (var i = 0; i < div3.length; i++) {
      div3[i].style.display = "block";
    }
    for (var i = 0; i < div4.length; i++) {
      div4[i].style.display = "block";
    }
    for (var i = 0; i < div5.length; i++) {
      div5[i].style.display = "block";
    }
    for (var i = 0; i < div6.length; i++) {
      div6[i].style.display = "block";
    }
    for (var i = 0; i < div7.length; i++) {
      div7[i].style.display = "block";
    }
    for (var i = 0; i < div8.length; i++) {
      div8[i].style.display = "block";
    }
    for (var i = 0; i < div9.length; i++) {
      div9[i].style.display = "block";
    }
    for (var i = 0; i < div10.length; i++) {
      div10[i].style.display = "block";
    }
  }
  
  function close(){
    for (var i = 0; i < div0.length; i++) {
      div0[i].style.display = "none";
    }
    for (var i = 0; i < div1.length; i++) {
      div1[i].style.display = "none";
    }
    for (var i = 0; i < div2.length; i++) {
      div2[i].style.display = "none";
    }
    for (var i = 0; i < div3.length; i++) {
      div3[i].style.display = "none";
    }
    for (var i = 0; i < div4.length; i++) {
      div4[i].style.display = "none";
    }
    for (var i = 0; i < div5.length; i++) {
      div5[i].style.display = "none";
    }
    for (var i = 0; i < div6.length; i++) {
      div6[i].style.display = "none";
    }
    for (var i = 0; i < div7.length; i++) {
      div7[i].style.display = "none";
    }
    for (var i = 0; i < div8.length; i++) {
      div8[i].style.display = "none";
    }
    for (var i = 0; i < div9.length; i++) {
      div9[i].style.display = "none";
    }
    for (var i = 0; i < div10.length; i++) {
      div10[i].style.display = "none";
    }
  }
  
  // function select(){
    //   var pers = getElementById("btn1");
    //   var i = 0;
    //   while((pers = pers.previousSibling) != null) i++;
    //   var divs = document.getElementsByName(i.toString());
    
    //   close();
    //   for (var j = 0; j < divs.length; j++) {
      //     divs[j].style.display = "block";
      //   }
      // }
      
  btn1.onclick = function () {
    close();
    for (var i = 0; i < div1.length; i++) {
      div1[i].style.display = "block";
    }
  }
  btn2.onclick = function () {
    close();
    for (var i = 0; i < div2.length; i++) {
      div2[i].style.display = "block";
    }
  }
  
  btn3.onclick = function () {
    close();
    for (var i = 0; i < div3.length; i++) {
      div3[i].style.display = "block";
    }
  }
  
  btn4.onclick = function () {
    close();
    for (var i = 0; i < div4.length; i++) {
      div4[i].style.display = "block";
    }
  }
        
  btn5.onclick = function () {
    close();
    for (var i = 0; i < div5.length; i++) {
      div5[i].style.display = "block";
    }
  }
  
  btn6.onclick = function () {
    close();
    for (var i = 0; i < div6.length; i++) {
      div6[i].style.display = "block";
    }
  } 
}