var begBox = document.createElement("div");
begBox.style.margin = "20px auto";
document.body.appendChild(begBox);

var buttonAll = document.querySelectorAll("button");
for (let i = 0; i < buttonAll.length; i++) {
  buttonAll[i].style.padding = "20px";
  buttonAll[i].style.borderRadius = "20px";
  buttonAll[i].style.backgroundColor = "blue";
  buttonAll[i].style.color = "white";
}

//创建一个计算器
function createdFn() {
  // document.documentElement.style.margin = '0'
  var box = document.createElement("div");
  var h3Id = document.createElement("h3");
  var smillBox = document.createElement("div");
  var buttonId = document.createElement("button");
  var inputId1 = document.createElement("input");
  var inputId2 = document.createElement("input");
  var inputId3 = document.createElement("input");
  var inputAll = [];
  inputAll.push(inputId1, inputId2, inputId3);
  //box样式
  box.style.width = "500px";
  box.style.height = "600px";
  box.style.textAlign = "center";
  box.style.margin = "auto";
  box.style.border = "1px solid #FF9935";
  // smillBox样式
  smillBox.style.width = "95%";
  smillBox.style.margin = "auto";
  //h3Id样式
  h3Id.style.textAlign = "center";
  h3Id.style.color = "white";
  h3Id.style.height = "50px";
  h3Id.style.lineHeight = "50px";
  h3Id.style.backgroundColor = "#FF9935";
  //input样式
  inputStyle = ["存款本金", "存款利息", "存款期数"];
  for (let i = 0; i < inputAll.length; i++) {
    inputAll[i].placeholder = inputStyle[i];
    inputAll[i].style.width = "100%";
    inputAll[i].style.padding = "10px 0";
    inputAll[i].style.margin = "10px 0";
  }
  //button样式
  buttonId.style.width = "100%";
  buttonId.style.padding = "10px";
  buttonId.style.backgroundColor = "#FF9935";
  buttonId.style.border = "none";

  buttonId.innerText = "计算";
  //头部
  h3Id.innerText = "存款收益计算器";
  box.append(h3Id, smillBox);
  smillBox.append(inputId1, inputId2, inputId3, buttonId);
  if (begBox.children.length > 0) {
    begBox.innerText = null;
  }
  begBox.append(box);
  var pId = document.createElement("p");
  buttonId.onclick = function () {
    var num =
      (inputId1.value * 1 + inputId1.value * 1 * inputId2.value * 1) *
      inputId3.value *
      1;
    pId.innerText = `总获取金额： ${num}`;
    pId.style.margin = "50px 0";
    box.append(pId);
  };
}
// 创建一个下拉列表select：只有JS代码
function selectFn() {
  var selectId = document.createElement("select");
  selectId.style.padding = "20px";
  selectId.style.borderRadius = "20px";
  selectId.style.background = "red";
  optionArray = [
    "篮球",
    "乒乓球",
    "足球",
    "羽毛球",
    "数组",
    "对象",
    "字符串",
    "数字",
    "null",
  ];
  for (let i = 0; i < optionArray.length; i++) {
    var optionId = document.createElement("option");
    optionId.innerText = optionArray[i];
    selectId.appendChild(optionId);
  }
  if (begBox.children.length > 0) {
    begBox.innerText = null;
  }
  begBox.append(selectId);
}
// 用for循环创建table(6行*8列)：只有JS代码
function tableFn() {
  var tableId = document.createElement("table");
  tableId.style.border = "1px solid #FF9935";
  tableId.style.borderCollapse = "collapse";
  tableId.style.textAlign = "center";
  for (let i = 0; i < 6; i++) {
    var trId = document.createElement("tr");
    tableId.appendChild(trId);
    for (let j = 0; j < 8; j++) {
      var tdId = document.createElement("td");
      tdId.style.border = "1px solid #FF9935";
      tdId.style.width = "40px";
      tdId.style.height = "40px";
      tdId.innerText = j;
      trId.appendChild(tdId);
    }
  }
  if (begBox.children.length > 0) {
    begBox.innerText = null;
  }
  begBox.append(tableId);
} // 创建 table
// 创建99乘法表：只有JS代码
function tableFnSty() {
  var h1 = document.createElement("h1");
  h1.innerText = "九九乘法表";

  var tab = document.createElement("table");
  // document.body.append(tab);
  tab.style.borderCollapse = "collapse";
  for (var i = 1; i <= 9; i++) {
    var hang = document.createElement("tr");
    hang.style.height = "50px";
    for (var j = 1; j < i + 1; j++) {
      var lie = document.createElement("th");
      lie.style.width = "100px";
      lie.style.border = "2px solid teal";
      hang.append(lie);
      lie.innerText = `${j}×${i} = ${j * i}`;
    }
    tab.append(hang);
    if (begBox.children.length > 0) {
      begBox.innerText = null;
    }
    begBox.append(h1, tab);
  }
}
