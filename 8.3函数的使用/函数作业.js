//闰年
function year(i, j, k) {
  if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
    alert(j);
  } else {
    alert(k);
  }
}
//质数
var abcd = 0; //全局变量 求和
function prime(a, j, k, key, sum) {
  var count = 0;
  var sun = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      count++;
    }
  }
  if (key == 1) {
    if (count == 2) {
      alert(j);
    } else {
      alert(k);
    }
  } else if (key == 2) {
    if (count == 2) {
      abcd += a;
    }
  } else {
    if (count == 2) {
      console.log(a + `是质数`);
    }
  }
}
//闰年判断
function leapYearFunction() {
  var years = prompt("请输入一个年份");
  year(years, true, false);
}
//最大值
function maxFunction() {
  var a = prompt("请输入一个数字") * 1;
  var b = prompt("请再输入一个数字") * 1;
  var c = prompt("请再输入一个数字") * 1;
  function maxFn(a, b, c) {
    var t = 0;
    if (b > a) {
      t = b;
      b = a;
      a = t;
    }
    if (c > a) {
      t = c;
      c = a;
      a = t;
    }
    alert(`最大值:${a}`);
  }
  maxFn(a, b, c);
}
//2000-3000之间的闰年
function yearFunction() {
  var a = prompt("请输入起始年份") * 1;
  var b = prompt("请再输入结束年份") * 1;
  function timeFunction(a, b) {
    var num = 0;
    for (let i = a; i <= b; i++) {
      year(i);
    }
    console.log("num++", num);
    function year(i) {
      if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
        console.log(i + "是闰年");
        num++;
      }
    }
  }
  timeFunction(a, b);
}
//闰年day
function yearDayFunction() {
  var num = prompt("请输入一个年份") * 1;
  var a = "闰年" + "二月份有" + 28 + "天";
  var b = "平年" + "二月份有" + 29 + "天";
  year(num, a, b);
}
//质数判断
function primeNumFunction() {
  var numBer = prompt("请输入一个数字来判断是否为质数！") * 1;
  var y = numBer + "是质数";
  var n = numBer + "不是质数";
  prime(numBer, y, n, 1);
}
//质数打印
function primeFunction() {
  for (let i = 1; i <= 1000; i++) {
    prime(i, null, null);
  }
}
//质数求和
function primeSumFunction() {
  var sum = 0;
  for (let i = 1; i <= 1000; i++) {
    prime(i, null, null, 2, sum);
  }
  console.log("sum", abcd);
}
//任意区间的随机整数随机整数
function intFunction() {
  var a = prompt("请输入随机起始数！") * 1;
  var b = prompt("请输入随机结束数！") * 1;
  function intFn(i, j) {
    var num = Math.floor(Math.random() * (j - i + 1) + i);
    alert(`${a}----${b}之间随机生成：${num}`);
  }
  intFn(a, b);
}
//end
function endFun() {
    function isOdd(n) {
      var sum = 1;
      if (n % 2 === 1) {
        for (var i = n; i >= 3; i -= 2) {
          sum += 1 / i;
        }
      } else {
        for (var j = n; j >= 2; j -= 2) {
          sum += 1 / j;
        }
      }
        alert(`1 + 1/3 + 1/5 +..... + 1/n 的和为: ", ${sum}`)
    }
    var n = +prompt("请输入一个自然数");
    isOdd(n);
}
