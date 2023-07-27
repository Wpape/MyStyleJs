
function onclickFunction(i){
    alert(i);
}
function indexFunction(ob) {
    for (let i = 0; i < ob; i++){
        setTimeout(function () {
       return i
    },300)
    }
}
function backGround(color) {
   var timeoutid = setTimeout(function () {
        document.documentElement.style.backgroundColor = color;
    },3000)
}

function pFunction() {
    var a = document.getElementById('pHtml').innerText;
    var b = document.getElementById('pHtml2').innerText; 
    var c = '';
    c = a; a = b; b = c;
    document.getElementById('pHtml').innerText = a;
    document.getElementById('pHtml2').innerText = b;
}