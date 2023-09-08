
    var index = 0;
var images = document.querySelectorAll('img#weipper-img');
console.log('',images);
    var ul=document.querySelector('.swipper')
    var lis=[];
    for(let i=0;i<images.length;i++){
        const li=document.createElement('li')
        lis.push(li);
        li.onclick=function(){
            index=i;
            changimg()
        }
        ul.appendChild(li);
    }
    function changimg(){
        for(let i=0;i<images.length;i++){
        if(i===index){
            images[i].classList.add('show');
            lis[i].classList.add('active');
        }else{
            images[i].classList.remove('show');
            lis[i].classList.remove('active');
        }
    }
    
}
changimg()
autoChange()
var interId;
function autoChange(){
    interId= setInterval(nextImg,3000);
}

    var box=document.querySelector('.swipper-box');
    box.onmouseenter = function(){
        clearInterval(interId)
    }
    box.onmouseleave =autoChange

    document.querySelector('.btn-l').onclick=function(){
index--;
if(index===-1)index=images.length-1;
changimg()
    }
    function nextImg(){
        index++
if(index===images.length)index=0;
changimg()
    }
    document.querySelector('.btn-r').onclick=nextImg;
