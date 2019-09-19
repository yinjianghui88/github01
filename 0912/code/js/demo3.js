
var imgObj1 = document.getElementById('img1');// 获取图片标签
var btns = document.getElementsByClassName('btn');//获取按钮
var i=1; //图片索引
var t1; //定时器名称

// 给第一个按钮添加背景颜色
btns[0].style.backgroundColor = 'orange';

t1 = setInterval(qiehuan,1000);
function qiehuan() {
    i++;
    if(i>5){
        i=1;
    }
    console.log(i)
    imgObj1.src = './images/0'+i+'.jpg';

    // 按钮背景
    btnColor();
    btns[i-1].style.backgroundColor = 'orange';
}
//鼠标移入，暂停定时器
imgObj1.onmouseover = function () {
    clearInterval(t1);
}
imgObj1.onmouseout = function () {
    t1 = setInterval(qiehuan,1000);
}

for(var j=0;j<btns.length;j++){
    btns[j].onmouseover = function () {
        var num = this.innerText;
        imgObj1.src = './images/0'+num+'.jpg';
        clearInterval(t1);

        //按钮改变背景颜色
        btnColor();
        this.style.backgroundColor = 'orange';
    }
    btns[j].onmouseleave = function () {
        i = this.innerText;
        t1 = setInterval(qiehuan,1000);
    }
}

// 按钮颜色改为白色
function btnColor() {
   for(var j=0;j< btns.length; j++){
       btns[j].style.backgroundColor = 'rgba(255,255,255,.5)';
   }
}