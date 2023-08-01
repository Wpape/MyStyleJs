
var box = document.getElementById('box');
var a = 13;
var str = ''
// 外层循环打印行数
for (let i = 1; i <= a+1; i++){
     // 内层循环打印每行空格个数
    for (let j = 1; j <= i; j++){
    
    }
    // 内层循环打印每行星星个数
    for (let j = i-1; j <= a; j++){
        box.innerHTML += `☆☆☆`
    }
    box.innerHTML +='<br>';
}
document.write(`☆`);document.write('<br>');
for (let i = 1; i <= a; i++){
    // 内层循环打印每行空格个数
   for (let j = i; j <= a; j++){
   
   }
   // 内层循环打印每行星星个数
   for (let j = 1; j <= i; j++){
    box.innerHTML += `☆☆☆`
   }
  
   box.innerHTML +='<br>';
}

