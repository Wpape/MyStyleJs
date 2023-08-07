//求和运算
function numFunction() {
  var num = 0; //1-100+=
  var numO = 0; //1-100偶数+=
  var numJ = 0; //1-100奇数+=
  for (let i = 1; i <= 100; i++) {
    num += i;
  }
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      numO += i;
    } else {
      numJ += i;
    }
  }

  console.log("1-100的和:" + num);
  console.log("1-100的偶数和:" + numO);
  console.log("1-100的奇数和:" + numJ);
}
//数字打印
function numberFunction() {
  var str = ""; //1-100内的奇数
  var str1 = ""; //1-100不是五的倍数
  var str2 = ""; //1-100被三整除不能被五整除
  var num = 0; //累加数字
  for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
      str += i + " ";
    }
  }
  for (let i = 1; i <= 100; i++) {
    if (i % 5 != 0) {
      str1 += i + " ";
    }
  }
  for (let i = 1; i <= 100; i++) {
    if (i % 5 != 0 && i % 3 == 0) {
      str2 += i + " ";
      num++;
      if (num % 5 == 0) {
        str2 += "\n";
      }
    }
  }
  console.log("1 - 100之间的奇数为:" + str);
  console.log("1 - 100之间不是5的倍数为:" + str1);
  console.log("1 - 100之间被三整除不能被五整除:" + "\n" + str2);
  console.log("总共有多少个这样的数字:" + num);
}
//阶乘
function addFunction() {
  var a = prompt("请随便输入一个数字将计算阶乘10") * 1;
  var num = 0;
  if (a != 0) {
    for (let i = 1; i <= 10; i++) {
      a *= i;
    }
    for (var i = 1; i <= 10; i++) {
      //循环n次，计算1~n的阶乘之和
      var jc = 1;
      for (var j = i; j >= 1; j--) {
        //for循环计算阶乘
        jc = jc * j;
      }
      num += jc; //存储阶乘之和
    }
  }
  console.log("阶乘10：" + a);
  console.log("1-10阶乘累加和" + num);
}
//水仙花
function daffodFunction() {
  var a, b, c;
  for (let i = 100; i <= 999; i++) {
    a = i % 10;
    b = Math.floor(i / 10) % 10;
    c = Math.floor(i / 100) % 10;

    if (a ** 3 + b ** 3 + c ** 3 == i) {
      console.log("符合条件的三位数是：" + i);
    }
  }
}
//工资计算
function wageFunction() {
  var wager = 10;
  for (let i = 1; i <= 5; i++) {
    wager += wager *= 0.05;
  }
  console.log("每年涨幅5%,50年后工资为: ", wager);
}
//买鸡蛋
function eagFunction() {
  for (let i = 1; i <= 1000; i++) {
    if (i % 9 == 0 && i % 8 == 1 && i % 7 == 5 && i % 6 == 3 && i % 5 == 4) {
      console.log("框内可能有鸡蛋" + i + "个");
    }
  }
}
//棋盘放粮食
function chessFunction() {
  var sum = 0;
  for (let i = 1; i <= 32; i++) {
    sum += 2 ** (i - 1);
  }
  console.log("共" + sum * 0.00001 + "kg");
}
//猴子吃桃
function monkeyFunction() {
  var num = 1;
  for (let i = 1; i < 7; i++) {
    num = (num + 1) * 2;
  }
  console.log("公园里刚开始有" + num + "个桃子");
}
//你是好人吗？
function goodBodyFunction() {
  var a = prompt("你是好人吗？回答是/否");
  while (a != "是") {
    alert("回答错误，请再次回答。");
    a = prompt("你是好人吗？回答是/否");
  }
  alert("回答正确");
}
//偶数之和
function ousumFunction() {
  var sum = 0;
  var i = 1;
  while (i <= 100) {
    i++;
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}
//学习任务
function classFunction() {
  var a = prompt("张三你的任务合格了吗？合格/不合格");
  while (a == "不合格") {
    alert("学习任务：上午阅读教材，学习理论部分，下午上机编程，掌握代码部分。");
    a = prompt("张三你的任务合格了吗？合格/不合格");
  }
  alert("恭喜合格！");
}
//培养学员
function cultivateFunction() {
  var trainee = 8;
  var years = 2006;
  while (trainee <= 20) {
    trainee += trainee * 0.25;
    years++;
  }
  console.log(`${years}年培训学员人数将达到20万人`);
}
//折纸
function origamiFunction() {
  var paper = 0.0001;
  var i = 1;
  while (paper < 8848) {
    paper *= 2;
    if (paper >= 8848) {
      break;
    }
    i = i + 1;
  }
  console.log(i);
}
//1-100之和
function numbFunction() {
  var sum1 = 0;
  var b = 1;
  do {
    // sum1=sum1+b
    sum1 += b;
    b++;
  } while (b <= 100);
  console.log(sum1);
}
//成绩汇总
function gradeFunction() {
  var num = 0;
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 4; j++) {
      var a = prompt(`请输入第${i}个班的第${j}位同学的成绩`) * 1;
      num += a;
      console.log(num);
    }
    console.log(`第${i}个班的总成绩为：${num}`);
    num = 0;
  }
}
//99乘法表
function tableFunction() {
  for (let i = 1; i <= 9; i++) {
    // var box = document.getElementById('box');
    for (let j = 1; j <= i; j++) {
      document.write(i + "*" + j + "=" + i * j + "&nbsp ");
      //    box.innerText = ``
    }
    document.write(`<br>`);
  }
}
//5*5列的矩形
function lengthFunction() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      document.write(`⭐`);
    }
    document.write(`<br>`);
    document.write(`<br>`);
  }
}
//直角三角形
function angleFunction() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(`⭐`);
    }
    document.write(`<br>`);
    document.write(`<br>`);
  }
  document.write(`<br>`);
  document.write(`<br>`);
  for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
      document.write(`⭐`);
    }
    document.write(`<br>`);
    document.write(`<br>`);
  }
  for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
      document.write(`&ensp;&nbsp;&nbsp;&nbsp;`);
    }
    for (let j = 1; j <= i; j++) {
      document.write("⭐");
    }
    document.write(`<br>`);
    document.write(`<br>`);
  }
  document.write(`<br>`);
  document.write(`<br>`);
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(`&ensp;&nbsp;&nbsp;&nbsp;`);
    }
    for (let j = 5; j >= i; j--) {
      document.write("⭐");
    }
    document.write(`<br>`);
    document.write(`<br>`);
  }

  document.write(`<br>`);
  document.write(`<br>`);
  document.write(`<br>`);
  document.write(`<br>`);
  document.write(`<br>`);
  document.write(`<br>`);
  document.write(`<br>`);
  document.write(`<br>`);
  document.write(`<br>`);
  document.write(`<br>`);

  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 2 * i - 1; j++) {
      document.write(`⭐`);
    }
    document.write(`<br>`);
    document.write(`<br>`);
  }
  document.write(`<br>`);
  document.write(`<br>`);

  for (let i = 1; i <= 5; i++) {
    for (let j = 9; j >= (i - 1) * 2 + 1; j--) {
      document.write(`⭐`);
    }
    document.write(`<br>`);
    document.write(`<br>`);
  }
  document.write(`<br>`);
  document.write(`<br>`);
}
//高度为8的等腰三角形
function sosceleFunction() {
  for (let i = 1; i <= 8; i++) {
    for (let j = 8; j >= i + 1; j--) {
      document.write(`&emsp;` + "\n");
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      document.write(`⭐`);
    }
    document.write(`<br>`);
  }
}
//综合图形
function synthesFunction() {
  var n = 5;
  for (i = 1; i <= n; i++) {
    //n代表行数
    for (j = 1; j <= i; j++) {
      // document.write("&nbsp;");
    }
    for (k = 1; k <= 2 * i - 1; k++) {
      document.write("⭐");
    }
    document.write("<br/>");
  }
  for (i = 1; i <= n; i++) {
    //n代表行数
    for (j = 1; j <= i; j++) {
      //要去掉下半部分的最上一行，第二行变为第一行,每行最前面的空格加一个，所以j<=i,而不是j<=j-1;
      // document.write("&nbsp;");
    }
    for (k = 1; k <= 2 * (n - i) - 1; k++) {
      //第一行为原来第二行，星星个数也随之变化;
      document.write("⭐");
    }
    document.write("<br/>");
  }
}
//买鸡
function chickenFunction() {
  var k, money;
  for (let i = 0; i <= 20; i++) {
    for (let j = 0; j <= 33; j++) {
      k = 100 - i - j;
      if (k % 3 == 0) {
        money = 5 * i + 3 * j + k / 3;
        if (money == 100) {
          console.log(`🚹🐓${i}只;🚺🐓${j}只;🐥${k}只`);
        }
      }
    }
  }
}
//羽毛球拍
function mintonFunction() {
  var whith = 0;
  for (let i = 1; i <= 200 / 15; i++) {
    for (let j = 1; j <= 200 / 3; j++) {
      for (let k = 1; k <= 200 / 2; k++) {
        if (15 * i + 3 * j + 2 * k == 200) {
          // console.log(i,j,k,whith++);
          whith++;
        }
      }
    }
  }
  console.log("总计可搭配: ", whith);
}
//凑钱、
function moneyFunction() {
  var whith = 0;
  //将变量从1元，二元，五元依次将最大值设置为初值，将1，2，5作为20元的组成成分依次累加；
  for (let i = 0; i <= 20 / 1; i++) {
    for (let j = 0; j <= 20 / 2; j++) {
      for (let k = 0; k <= 20 / 5; k++) {
        if (i + j * 2 + k * 5 == 20) {
          // console.log(i, j, k);
          whith++;
        }
      }
    }
  }
  console.log("总计可搭配: ", whith);
}
//大妈托粮食
//与上一个凑钱的题思路一样，都是先将大马小马中马作为100的组成成分，由少到多依次累加，最后判断三者是否成为100的组成
function horsegrainFunction() {
  var smallMa = 0;
  var money = 0;
  for (let i = 0; i <= 100 / 2; i++) {
    for (let j = 0; j <= 100 / 1; j++) {
      smallMa = 100 - i - j;
      if (smallMa % 2 == 0) {
        money = 2 * i + 1 * j + smallMa / 2;
        if (money == 100) {
          console.log(`大🐎${i}只;中🐎${j}只；小🐎${smallMa}只`);
        }
      }
    }
  }
}
//1-10，遇4退出
function forurFunction() {
  var a = 0;
  while (1) {
    a++;
    console.log(a);
    if (a % 4 == 0) {
      break;
    }
  }
}
//1-100 奇偶数之和
function ouFunction() {
  var num = 0;
  var num1 = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      num += i;
    } else {
      num1 += i;
    }
  }
  console.log("奇数" + num + "偶数" + num1);
}
//8个数字一行，如果遇到个位是3或是3的倍数的不输出
function eigFunction() {
  var num = 0;
  for (let i = 0; i <= 100; i++) {
    if (
      i % 10 !== 3 &&
      Math.floor(i / 10) % 10 !== 3 &&
      Math.floor(i / 100) % 10 !== 3
    ) {
      document.write(i + " ");
      num++;
    }
    if (num % 8 == 0) {
      document.write(`<br>`);
    }
  }
}
//质数判断
//质数，指在大于1的自然数中，除了1和该数自身外，无法被其他自然数整除的数（也可定义为只有1与该数本身两个正因数的数）。质数大于1，且只能被1和自身整除,也就是 2到~num-1不能整除;然后依次遍历2~num-2，如果能被num整除则表示不是质数，返回false；循环结束都没有return false，那就表示num为质数，则返回true；
function primeFunction() {
  var a = prompt("请输入数字") * 1;
  var key = true;
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      key = false;
      break;
    }
  }
  if (key == true) {
    console.log("数字" + a + "是一个质数");
  } else {
    console.log("不对");
  }
}
//101-200质数判断
function sectionFunction() {
  for (let i = 101; i <= 200; i++) {
    var key = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        key = false;
        break;
      }
    }
    if (key == true) {
      console.log("数字" + i + "是一个质数");
    }
  }
}
//登陆验证
function loginFunction() {
  var userName = prompt("请输入用户名");
  var passWord = prompt("请输入密码");

  for (let i = 3; i >= 1; i--) {
    if (userName == "kate" && passWord == 123456) {
      key = true;
      alert("登陆成功！");
      break;
    } else {
      alert(`请重新输入!你还有${i}次机会`);
      userName = prompt("请输入用户名");
      passWord = prompt("请输入密码");
    }
  }
}
//猜字小游戏
function guessFunction() {
  var num = prompt("请输入一个数字进行guess游戏") * 1;
  var a = Math.floor(Math.random() * 100) + 1;
  if (num == a) {
    alert("猜对了");
  } else if (num > a) {
    alert("笨蛋，猜大了");
  } else if (num < a) {
    alert("笨蛋，猜小了");
  } else {
    alert("请正确输入");
  }
}
//猜字小游戏升级版
function guessingFunction() {
  var num = prompt("请输入一个数字进行guess游戏") * 1;
  var a = Math.floor(Math.random() * 100) + 1;
  console.log(a);
  for (let i = 7; i >= 1; i--) {
    if (num == a) {
      alert("猜对了");
      break;
    } else if (num > a) {
      alert("笨蛋，猜大了");
      alert(`请重新输入!你还有${i}次机会`);
      num = prompt("请输入一个数字进行guess游戏") * 1;
    } else if (num < a) {
      alert("笨蛋，猜小了");
      alert(`请重新输入!你还有${i}次机会`);
      num = prompt("请输入一个数字进行guess游戏") * 1;
    } else {
      alert(`请重新输入!你还有${i}次机会`);
      num = prompt("请输入一个数字进行guess游戏") * 1;
    }
  }
}
//数字求和游戏
function sumFunction() {
  var a = 2;
  var retult = 0;
  var sum = a;
  for (let i = 1; i <= 4; i++) {
    sum = sum * 10 + 2;
    retult += sum;
  }
  console.log(retult);
}
//基数求和游戏升级版
function sumingFunction() {
  var key = "y";
  //先定义一个无休止的for循环从1开始执行
  for (let j = 1; j <= Infinity; j++) {
    if (key == "y") {
      var retult = 0;
      var a = prompt("请输入基数");
      var k = prompt("请输入次数") * 1;
      //将每循环一次的i累计依次往后重复累加
      for (let i = 1; i <= k - 1; i++) {
        a = a * 10 + 2;
        //返回一个新的累加基数
        retult += a;
      }
      alert("结果为：" + retult);
      key = prompt("是否继续？y/n");
    } else {
      alert("已退出");
      //控制每一次循环的结束
      break;
    }
  }
}
//银行存款
function shoppingFunction() {
  var key;
  var type, money;
  money = 100;
  for (let i = 1; i < Infinity; i++) {
    type = +prompt("请输入你的需求：\n 1.存钱；2.取钱；3.查看余额；4.退出");
    if (type === 1) {
      var cun = +prompt("请输入您要充值的金额");
      money += cun;
      alert(`您的余额为：${money}`);
    } else if (type === 2) {
      var qu = +prompt("请输入您要取出的金额");
      money -= qu;
      alert(`您的余额为：${money}`);
    } else if (type === 3) {
      alert(`您的余额为：${money}`);
    } else if (type === 4) {
      key = prompt("是否确认退出？请输入： 确认/不确认");
    }
    if (key == "确认") {
      alert("您已退出");
      break;
    }
  }
}
//商品购买
function endfunction() {
  var b = +prompt(`
  米米东东东本事本水水水水水水京东东容事事水￥关￥学常常常常￥
  请输入你购买商品的编号;
  1.T恤￥245.8 2.网球鞋￥578.8 3.网球拍￥328.8
  米东东取拿水水水水米来东东取拿水水水水东东取拿水水水水水水拿*`);
  var c = +prompt("请输入购买的数量");
  var jx = +prompt("是否继续 (0-否，1-是)");
  var b1 = 0;
  switch (b) {
    case 1:
      b1 = 245;
      break;
    case 2:
      b1 = 570;
      break;
    case 3:
      b1 = 320;
      break;
  }
  var zongjia = c * b1;
  for (; 1; ) {
    if (jx == 1) {
      b = +prompt("请输入购买商品编号");
      c = +prompt("请输入购买的数量");
      console.log(b1);
      var jx = +prompt("是否继续 (0-否，1-是)");
      zongjia += b1 * c;
      console.log(zongjia);
      // break;
    } else {
      var zheko = zongjia * 0.8;
      alert(`折扣前应付金额:￥${zongjia}，折扣后应付金额: ￥${zheko}`);
      var jiage = +prompt("请输入支付金额");
      if (jiage >= zheko) {
        var zhaoling = jiage - zheko;
        alert(`~支付${jiage}, 找零${zhaoling}~`);
        break;
      } else var jiage = +prompt("支付金额不足，重新输入");
    }
  }
}
