
function promptFunction(){
    var i = prompt('请输入一个四位数');
    // 个位
    let individual = Math.floor(i * 1 %10);
    // 十位
    let ten = Math.floor((i * 1 /10)%10);
    // 百位
    let hundred = Math.floor((i * 1 /100)%10);
    // 千位
    let thousand = Math.floor(i * 1 / 1000);
    alert('个位：' + individual);
    alert('十位：' + ten);
    alert('百位：' + hundred);
    alert('千位：' + thousand);
}

function skyFunction() {
    let num = 89;
    let day = Math.floor(num / 24);
    let h = num % 24;
    alert(`${day}天${h}小时`)
}

function degFunction() {
    let deg = prompt('请输入你要转换的华氏度');
    let hDeg = (deg * 1 - 32) * 5 / 9.0;
    alert(`${deg}华氏度 = ${hDeg.toFixed(3)}摄氏度`)
}

function dayFunction() {
    let num = 20230526; 
    let year = Math.floor(num / 10000);
    let March = Math.floor((num / 100) % 10);
    let sky = num % 100;
    alert(`${year}年${March}月${sky}日`)
}

function zeroFunction() {
    alert(`${Math.floor(Math.random()*10)}`)
}
function oneFunction() {
    alert(`${Math.floor(Math.random()*101)}`)
}
function endFunction() {
    alert(`${Math.floor(Math.random() * (90-65+1)) + 65
    }`)
}