// 初始化
var p1 = document.getElementById("funP1");
var p2 = document.getElementById("funP2");
var p3 = document.getElementById("funP3");
var p4 = document.getElementById("funP4");

// `[1,2,6,4,5,3,7,8,9]`删除数组中所有的偶数
var array = [1, 2, 6, 4, 5, 3, 7, 8, 9];
function delFun() {
  for (let i = array.length; i >= 0; i--) {
    if (array[i] % 2 == 0) {
      array.splice(i, 1);
    }
  }
  console.log("array", array);
  p1.innerText = array;
}

// 封装一个函数返回布尔值，判断一个数组中的所有数字是否都是质数。
function born() {
  var arr = [2, 6, 4, 5, 3, 7, 8, 9];
  function primeNum() {
    for (var i = 0; i < arr.length; i++) {//遍历数组
        if (arr[i] > 1) {
          //保证程序走通，赋初值
          var flag = true;
          //质数判断
        for (var j = 2; j < arr[i]; j++) {
          if (arr[i] % j === 0) {
            return false; //不是质数
          }
        }
      } else {
        return false;
      }
    } //当所有遍历结束后，如果flag = true, 则返回true,否则是false
    if (flag) {
      return true;
    }
  }
  console.log(primeNum(arr));
  p2.innerText = primeNum(arr);
}

// `['a','b','b','a','a','c','c','a']`数组排重。
function arrAyff() {
  var array = ["a", "b", "b", "a", "a", "c", "c", "a"];
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) == -1) {
      newArray.push(array[i]);
    }
  }
  console.log("new", newArray);
  p3.innerText = newArray;
}

// 使用数组随机获取四位数字不相同的密码。[0-9]
function f1() {
  var arr_4 = new Array();
  function getRandom(min, max) {
    //开始取数
    //随机数
    var random = Math.random() * (max - min) + min;
    //向下取整
    random = Math.floor(random);
    if (arr_4.length < 4) {
      //判断数组长度
      for (i = 0; i <= arr_4.length; i++) {
        //遍历数组。
        if (random == arr_4[i]) {
          //比较随机数
          break;
        } else {
          if (i == arr_4.length) {
            arr_4.push(random);
            break;
          }
        }
      }
      getRandom(0, 10);
    }
  }
  getRandom(0, 10); //随机取0-9
  console.log(" ", arr_4);
  p4.innerText = arr_4;
}

// - 找出含有指定关键词的新闻标题，添加编号，并将关键词标记为黄色。比如关键词为“月”，把内容使用document.write显示到页面上，显示效果如下：

// 0、假期要问回顾：==月==饼事件惊动阿里高层

// 1、上海中秋假期消费者投诉情况：网络销售和食品

// 2、马龙登时尚杂志封面 秀胸肌单眼皮放电撩人

// 3、阿里巴巴4名工程师 因“刷==月==饼”被开除

// 4、过节出门没带钱？“手机变钱包”不会太远

// 0、假期要问回顾：==月==饼事件惊动阿里高层
// 1、阿里巴巴4名工程师 因“刷==月==饼”被开除
var news = [
  "假期要问回顾：月饼事件惊动阿里高层",
  "上海中秋假期消费者投诉情况：网络销售和食品",
  "马龙登时尚杂志封面 秀胸肌单眼皮放电撩人",
  "阿里巴巴4名工程师 因“刷月饼”被开除",
  "过节出门没带钱？“手机变钱包”不会太远",
];
