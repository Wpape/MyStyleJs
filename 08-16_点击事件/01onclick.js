// var begBox = document.getElementsByClassName('begBox');
// function begBoxFn (e) {
//     var buttonId = e.target;
// };
// console.log('',begBox);
var buttonAll = document.querySelectorAll('button');
var arrAy = ['red', 'blue', 'yellow', 'black', 'pink', 'green','orange']
for (let i = 0; i < buttonAll.length; i++){
    buttonAll[i].onclick = function (el) {
        el.target.style.color = arrAy[i]
    }
}
//导航栏效果：不同的方式实现
var newArray = ['耳机', '穿戴', '热门'];
var navDiv = document.createElement('div');
var newArr = [];
var noneDivArr = [];
for (let i = 0; i < newArray.length; i++){
    var spanNav = document.createElement('span');
    var noneDiv = document.createElement('div');
    spanNav.dataset.index = i
    noneDiv.style.display = 'inline-block'
    noneDiv.innerText = `文案${i}显示，点击了第${i}个元素`;
    noneDiv.classList.add('noneDivQ')
    noneDivArr.push(noneDiv);
    newArr.push(spanNav)
    spanNav.innerText = newArray[i];
    navDiv.append(spanNav);
    spanNav.onclick = onclickSpan;
    spanNav.style.margin = '20px'
};

function onclickSpan() {
    document.querySelectorAll('noneDivQ') == null;
    for (let i = 0; i < newArr.length; i++){
        newArr[i].style.color = '';
        newArr[i].classList.remove('after');
        // newArr[i].classList.remov('noneDivQ');
    }
    this.style.color = 'red';
    this.style.position = 'relative';
    this.classList.add('after');
    document.documentElement.appendChild(noneDivArr[this.dataset.index])
}
document.documentElement.appendChild(navDiv);
//换肤效果
var colorArray = ['red', 'blue', 'yellow'];
var colorDiv = document.createElement('div');
for (let i = 0; i < colorArray.length; i++){
    var Cospandiv = document.createElement('div');
    Cospandiv.style.width = '200px';
    Cospandiv.style.height = '200px';
    Cospandiv.style.display = 'inline-block';
    Cospandiv.style.marginTop = '20px'
    Cospandiv.style.backgroundColor = colorArray[i];
    Cospandiv.onclick = ConclickSpan;
    document.documentElement.appendChild(Cospandiv)
};
function ConclickSpan() {
    document.documentElement.style.backgroundColor = this.style.backgroundColor;
}