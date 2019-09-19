
var img1 = document.getElementById('img1');// 获取图片标签
var btns = document.querySelectorAll('.btn');//获取按钮
var i=1; //图片索引
var t1; //定时器名称

t1 = setInterval(qiehuan,1000);
function qiehuan() {
    i++;
    if(i>7){
        i=1;
    }
    img1.src = './images/timg'+i+'.jpg';
}
//鼠标移入，暂停定时器
img1.onmouseover = function () {
    clearInterval(t1);
}
img1.onmouseout = function () {
    t1 = setInterval(qiehuan,1000);
}

/*function stop(n) {
    imgObj1.src = './images/0'+n+'.jpg';
    clearInterval(t1);
}*/
for(var j=0;j<btns.length;j++){
    btns[j].onmouseover = function () {
        var num = this.innerText;
        img1.src = './images/timg'+num+'.jpg';
        clearInterval(t1);
    }
    btns[j].onmouseleave = function () {
        i = this.innerText;
        t1 = setInterval(qiehuan,1000);
    }
}