var btnLeft=document.getElementById('btnleft');
var btnRight=document.getElementById('btnright');

var fig=document.getElementsByClassName('fig');
var cir=document.getElementsByClassName('cir');
var na=document.getElementsByClassName('na');

var list=document.querySelectorAll(".lifig");
var lifePhoto=document.querySelectorAll(".lifePhoto");
var recipeInnerBox=document.querySelectorAll(".recipeInnerBox3-22");
var foodPhoto=document.querySelectorAll(".foodPhoto");
var photoForEat=document.querySelectorAll(".photoForEat");
var foodPara=document.querySelectorAll(".foodPara");

var shape=["disc","disc","disc","disc","disc"];
var numArray=[1,0,0,0,0];

///////////////////////////////////////////////////// 觸發事件後所執行的函式
function showArray(){
    for(var i=0;i<cir.length;i++){
        cir[i].style.listStyleType=shape[i];
        fig[i].style.zIndex=numArray[i];
    }
    shape=["disc","disc","disc","disc","disc"];
}

function changeImgRight(){
    for (var i=0;i<numArray.length;i++){
        if (numArray[numArray.length-1]===1){
            break;
        }else if(numArray[i]===1){
            numArray[i]=0;
            numArray[i+1]=1;
            break;
        }
    }
    shape[numArray.indexOf(1)]="square";
    showArray();
}

function changeImgLeft(){
    for (var i=0;i<numArray.length;i++){
        if (numArray[0]===1){
            break;
        }else if(numArray[i]===1){
            numArray[i]=0;
            numArray[i-1]=1;
            break;
        }
    }
    shape[numArray.indexOf(1)]="square";
    showArray();
}

function changeList(e){
    shape[e.target.value]="square";
    for(var i=0;i<numArray.length;i++){
        numArray[i]=0;
    }
    numArray[e.target.value]=1;
    showArray();
};

function showText(){
    alert('Not yet, please wait!');
}


var fadeIn=function(callback){
	
	var i=0;
	var speed = 100;
	var num = 0;
	
	var st = setInterval(function(){
		num++;
		lifePhoto[i].style.opacity = num/10;
		if (lifePhoto[i].style.opacity>=1){
			clearInterval(st);
			i++;
		}
	},speed);
	
	var we=setInterval(function(){
		if (i!=0){
			callback(i);
			i++;
		}
	},5000);
}

function fadeOut(k){
	if (k>=5 && k%5==0){
		var speed = 100;
		var numOne=10;
		var numTwo=0;
		var sp=setInterval(function(){
			numOne--;
			numTwo++;
			lifePhoto[4].style.opacity=numOne/10;
			lifePhoto[0].style.opacity=numTwo/10;
			
			if (lifePhoto[4].style.opacity<=0){
				clearInterval(sp);
				lifePhoto[4].style.zIndex=0;
				lifePhoto[0].style.zIndex=1;
			}
		},speed);
	}
	else if(k%5!=0){
		var speed = 100;
		var numOne=10;
		var numTwo=0;
		var sp=setInterval(function(){
			numOne--;
			numTwo++; 
			lifePhoto[k%5-1].style.opacity=numOne/10;
			lifePhoto[k%5].style.opacity=numTwo/10;
			
			if (lifePhoto[k%5-1].style.opacity<=0){
				clearInterval(sp);
				lifePhoto[k%5-1].style.zIndex=0;
				lifePhoto[k%5].style.zIndex=1;
			} 
		},speed);
	}
	
}

function changePhoto(e){
	if (lifePhoto[e.target.getAttribute('value')].style.zIndex==1){
		lifePhoto[e.target.getAttribute('value')].style.opacity=1;
	}else {
		lifePhoto[e.target.getAttribute('value')].style.zIndex=2;
		lifePhoto[e.target.getAttribute('value')].style.opacity=1;
	}
}

function changePhoto2(e){
	if (lifePhoto[e.target.getAttribute('value')].style.zIndex==1){
		lifePhoto[e.target.getAttribute('value')].style.opacity=1;
	}else{
		lifePhoto[e.target.getAttribute('value')].style.zIndex=0;
		lifePhoto[e.target.getAttribute('value')].style.opacity=1;
	}
	
}

function changeContent(e){
	for (var i=0;i<foodPhoto.length;i++){
		foodPhoto[i].style.zIndex=0;
		photoForEat[i].style.opacity=0.5;
		foodPara[i].style.visibility = "hidden";
	}
	foodPhoto[e.target.getAttribute('value')].style.zIndex=1;
	photoForEat[e.target.getAttribute('value')].style.opacity=1;
	foodPara[e.target.getAttribute('value')].style.visibility = "visible";
}

////////////////////////////////////////////////// 設定事件觸發狀態
btnRight.addEventListener('click',changeImgRight);
btnLeft.addEventListener('click',changeImgLeft);
for(var j=0;j<cir.length;j++){
    cir[j].addEventListener('click',changeList);
}
for(var j=0;j<na.length;j++){
    na[j].addEventListener('click',showText);
}
for(var j=0;j<list.length;j++){
    list[j].addEventListener('mouseover',changePhoto);
	list[j].addEventListener('mouseout',changePhoto2);
}
for(var j=0;j<recipeInnerBox.length;j++){
    recipeInnerBox[j].addEventListener('click',changeContent);
}

window.addEventListener("load", fadeIn(fadeOut));