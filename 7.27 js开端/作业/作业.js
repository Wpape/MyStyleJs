function sumFunction() {
    let i = 0;
    input1 = document.getElementById('inputBox1').value * 1;
    input2 = document.getElementById('inputBox2').value * 1;
    input3 = document.getElementById('inputBox3').value * 1;
    sumS = input1 + input2 + input3 || i;
    document.getElementById('sum').value = sumS;
    console.log(sumS);
}

function windowFunction() {
    let i = '未输入';
    input1 = document.getElementById('inputwindow1').value * 1;
    input2 = document.getElementById('inputwindow2').value * 1;
    input3 = document.getElementById('inputwindow3').value * 1;
    alert(input1.toFixed(3) || i);
    alert(input2.toFixed(3) || i);
    alert(input3.toFixed(3) || i);
}

function plFunction() {
    let pl = 3.14;
    let i = 0;
    inputPl = document.getElementById('inputpl').value * 1;
    let j = inputPl * inputPl *pl
    document.getElementById('plSum').value = j.toFixed(2) ||i
}

function roundFunction() {
    let pl = 3.1415926;
    let i = 0;
    inputR = document.getElementById('inputR').value * 1;
    inputH = document.getElementById('inputH').value * 1;
    let V = pl * inputR *inputR * inputH || i;
    let C = 2 * pl * inputR || i;
    let S = pl * inputR *inputR || i;
    console.log('圆周长：'+ C.toFixed(2));
    console.log('圆体积：'+ V.toFixed(2));
    console.log('圆面积：'+ S.toFixed(2));
}
