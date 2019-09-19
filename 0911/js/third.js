var img1=document.querySelector('#img1');
var indexs=document.querySelectorAll('.index');
var i=1;
var t1;
t1=setInterval(qiehuan,1000);
indexs[0].style.backgroundColor='orange';

function qiehuan(){
	i++;
	if(i>7){
		i=1	;
	}
	

	img1.src='./images/timg'+i+'.jpg';
	bgcolor();
	// alert(i);
	indexs[i-1].style.backgroundColor='orange';

}



img1.onmouseover=function(){
	clearInterval(t1);	
}

img1.onmouseout=function(){
	t1=setInterval(qiehuan,1000);


}


		for(var j=0;j<indexs.length;j++){
			indexs[j].onmouseover=function(){
				var num=this.innerText;
				img1.src='./images/timg'+num+'.jpg';
				bgcolor();
				this.style.backgroundColor='orange';
				clearInterval(t1);

			}
			indexs[j].onmouseleave=function(){
				i=this.innerText;
				// indexs[i].style.backgroundColor='rgba(255,255,255,.6)';
				t1=setInterval(qiehuan,1000);
			}
		}


function bgcolor(){
	for(var a = 0;a < indexs.length; a++){
		indexs[a].style.backgroundColor = 'rgba(255,255,255,.6) ';
	}
}


