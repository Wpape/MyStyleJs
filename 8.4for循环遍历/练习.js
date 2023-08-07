//数组偶数求和+平均值
function evenSumFunction(arr) {
  var a = 0;
  var even = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even += arr[i];
      a++;
    }
  }
  console.log("数组中偶数的和：", even, "偶数和的平均值：", even / a);
}
function add(a) {
  return a < 10 ? "0" + a : a;
}
//遍历1-100计算数字和+平均值
function numberCumpote() {
  var array = [];
  var sum = 0;
  for (let i = 1; i <= 100; i++) {
    array[array.length] = i;
  }
  console.log("array", array);
  for (const key in array) {
    sum += array[key];
  }
  evenSumFunction(array);
}
//1-100整数中随机出现、
function randomFunction() {
  var num;
  var sum = 0;
  var array = [];
  var oddNumber = [];

  for (let i = 1; i <= 100; i++) {
    num = Math.floor(Math.random() * 100) + 1;
    array[array.length] = num;
  }
  for (const key in array) {
    sum += array[key];
  }
  console.log(
    "array",
    array,
    "这个数组的和是：",
    sum,
    "这个数组的平均值：",
    sum / array.length
  );
  console.log("*************************");

  evenSumFunction(array);
  console.log("*************************");

  for (let i = 1; i <= array.length - 1; i++) {
    if (array[i] % 2 != 0) {
      oddNumber[oddNumber.length] = array[i];
    }
  }
  console.log("随机出现的奇数一：", oddNumber);
  console.log("*************************");

  //质数计算

  var sui = []; //随机数
  var newprime = []; // 质数数组
  var count = 0; // 质数和
  for (let i = 0; i < 100; i++) {
    sui[sui.length] = Math.floor(Math.random() * 100) + 1;
    var flag = true;
    if (sui[i] < 2) {
      continue;
    }
    for (var j = 2; j < sui[i]; j++) {
      if (sui[i] % j === 0) {
        flag = false; //不是质数break;
      }
    }
    if (flag) {
      newprime[newprime.length] = sui[i];
      count += sui[i];
    }
  }
  console.log("所有质数", newprime);
  console.log("所有质数和", count);
  console.log("*************************");

  // for (let j = 2; j < sui[count++];j++){
  //     if (sui[count] % j != 0) {
  //         newprime[newprime.length] = sui[count]
  //         zhiHe += sui[count]
  //     }
  // }
  // console.log('所有随机数 - ',sui);
  // console.log('所有质数 - ',newprime);
  // console.log('所有质数和 - ',zhiHe);

  //数组中最大的数字
  var max = 0;
  for (const key in array) {
    if (array[key] > max) {
      max = array[key];
    }
  }
  console.log("max", max);
  console.log("*************************");
  //反转数组
  var inversion = [];
  for (let i = array.length - 1; i >= 0; i--) {
    inversion[inversion.length] = array[i];
  }
  console.log("数组倒置", inversion);
  console.log("*************************");
  //数组排序
  var temp = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(array);
}
//获取当前时间并打印到页面
function getnewTimefunction() {
  var currentP = document.getElementById("currentTime");
  function set() {
    currentTime = new Date();
    year = currentTime.getFullYear();
    month = currentTime.getMonth() + 1;
    date = currentTime.getDate();
    day = currentTime.getDay();
    hours = currentTime.getHours();
    min = currentTime.getMinutes();
    sec = currentTime.getSeconds();
    switch (day) {
      case 0:
        day = "天";
        break;

      default:
        break;
    }
    currentP.innerText = `${add(year)}年 ${add(month)}月 ${add(date)}号 ${add(
      hours
    )}:${add(min)}:${add(sec)} 星期 ${day} `;
  }

  var seterval = setInterval(() => {
    set();
  }, 1000);
  function stop() {
    clearInterval(seterval);
  }
  // console.log(year,month,date,hours,min,sec,day);
}
getnewTimefunction();
//十月一倒计时
var firsetId = document.getElementById("firstTime");
function firstTimeFunction() {
  newToDady = new Date();
  endToDaty = new Date("2023-10-1");
  newaddTOfay = Date.parse(endToDaty) - newToDady;
  day = Math.floor(newaddTOfay / 1000 / 3600 / 24);
  hours = Math.floor((newaddTOfay % (3600 * 24 * 1000)) / 1000 / 3600);
  min = Math.floor((((newaddTOfay % (3600 * 24 * 1000)) / 1000) % 3600) / 60);
  sec = Math.floor((((newaddTOfay % (3600 * 24 * 1000)) / 1000) % 3600) % 60);
  firsetId.innerText = `距离十月一日仅剩 ${add(day)}天 ${add(hours)}时 ${add(
    min
  )}分 ${add(sec)}秒`;
}
setInterval(firstTimeFunction, 1000);
//倒计时：00:02:15
var obox = document.getElementById("countDow1");
var obox1 = document.getElementById("countDow2");

var t = setInterval(function () {
  obox1.innerHTML--;
  if (obox.innerHTML == 0 && obox1.innerHTML == 0) {
    clearInterval(t);
  }
  if (obox1.innerHTML < 0) {
    obox.innerHTML--;
    obox1.innerHTML = 59;
  }
  if (obox1.innerHTML < 10) {
    document.getElementById("countDowblack").style.display = "";
  } else {
    document.getElementById("countDowblack").style.display = "none";
  }
}, 1000);

//计算朋友圈发布时间：
function publish(time) {
  function publishtime() {
    document.getElementById("idP").style.display = "";
    var publishId = document.getElementById("publichIdspan");
    var data = new Date(); //当前时间
    var aifftime = data - time;
    day = Math.floor(aifftime / 1000 / 3600 / 24);
    hours = Math.floor((aifftime % (3600 * 24 * 1000)) / 1000 / 3600);
    min = Math.floor((((aifftime % (3600 * 24 * 1000)) / 1000) % 3600) / 60);
    sec = Math.floor((((aifftime % (3600 * 24 * 1000)) / 1000) % 3600) % 60);
    // console.log("min", min);
    if (day == 0 && hours == 0 && min <= 1) {
      publishId.innerText = "刚刚发布";
    } else if (day == 0 && hours <= 1) {
      publishId.innerText = `${min}分钟前`;
    } else if (day <= 1) {
      publishId.innerText = `${hours}小时前`;
    } else {
      publishId.innerText = `${day}天前`;
    }
    // console.log('min',min);
  }
  setInterval(publishtime, 60000);
}
document.getElementById("idP").style.display = "none";
