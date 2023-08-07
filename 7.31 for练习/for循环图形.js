
var box = document.getElementById('box');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var a = 10;
var str = ''
// 外层循环打印行数
for (let i = 1; i <= a+1; i++){
     // 内层循环打印每行空格个数
    // for (let j = 1; j <= i; j++){
    
    // }
    // 内层循环打印每行星星个数
    for (let j = i-1; j <= a; j++){
        box.innerHTML += `☆☆☆`
        box1.innerHTML += `☆☆☆`
    }
    box.innerHTML +='<br>';
    box1.innerHTML +='<br>';
}
box.innerHTML += `☆`;box.innerHTML +='<br>';
box1.innerHTML += `☆`;box1.innerHTML +='<br>';
for (let i = 1; i <= a+1; i++){
    // 内层循环打印每行空格个数
//    for (let j = i; j <= a; j++){
   
//    }
   // 内层循环打印每行星星个数
   for (let j = 1; j <= i; j++){
    box.innerHTML += `☆☆☆`
    box1.innerHTML += `☆☆☆`
   }
  
   box.innerHTML +='<br>';
   box1.innerHTML +='<br>';
}

for (let i = 1; i <= 4; i++){
    // for(let )
    for (let j = 1; j <= i; j++){
        box2.innerHTML += `☆`
    }
    box2.innerHTML +='<br>';
}