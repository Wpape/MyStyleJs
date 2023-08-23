var str = "give me some sunshine give me some rain give me another changce i wanna grow up once again";


//字符串长度(length)
var lengthStr = str.length
console.log('字符串长度', lengthStr);
console.log('**************************');

// 查找 me、some、w三个字符串是否存在(includes)
console.log('字符串me',str.includes('me'));
console.log('字符串some',str.includes('some'));
console.log('字符串w', str.includes('w'));
console.log('**************************');

// 把me都换成ME
console.log('把me都换成ME', str.replace('me', 'ME'));
console.log('**************************');

// 将字符串里的所有‘g’ 替换为 ‘G’。（2种写法replace、replaceall）
// console.log('replace', str.replaceAll('me', 'ME'));
console.log('g都换成G <replaceAll>', str.replaceAll('g', 'G'));
console.log('**************************');

var newStr = '';
for (let i = 0; i <= str.length-1; i++){
    if (str[i]=='g') {
        newStr +=  str[i].replace('g','G')
    }
    newStr += str[i]
}
console.log('g都换成G <replace>', newStr);
console.log('**************************');

// 一个数组中存放着若干人名`['唐僧','王小二','猪八戒','孙悟空','王二狗','王小利']`，找出所有姓王的名字
var arrAy = ['唐僧', '王小二', '猪八戒', '孙悟空', '王二狗', '王小利'];
for (let i = 0; i < arrAy.length; i++){
    if (arrAy[i].includes('王')) {
    console.log('所有姓王的', arrAy[i]);
    }
}
console.log('**************************');

// var str="JAVASCRIPT";把字符串转为小写，返回新的字符串。
var str = "JAVASCRIPT";
var newStrJa = '';
newStrJa = str.toLocaleLowerCase();
console.log('转成小写', newStrJa);
console.log('**************************');

// var str="javascript";把字符串转为大写，返回新的字符串。
var str = "javascript";
var newStrJa = '';
newStrJa = str.toLocaleUpperCase();
console.log('转成大写', newStrJa);
console.log('**************************');

// var str="javascript";返回字符串中提取的子字符串"cript"、"vascript"。（每个结果3中写法）
var str = "javascript";
console.log('substring截取 ', str.substring(str.indexOf('c'), str.indexOf('t')+1));//支持传入结束位置，不包括结束
console.log('substr截取 ', str.substr(str.indexOf('c')));//可选，默认截取到末尾
console.log('slice截取 ', str.slice(str.indexOf('c')));//支持传入结束位置
console.log('**************************');

var str = "javascript";
console.log('substring截取 ', str.substring(str.indexOf('v'), str.indexOf('t')+1));//支持传入结束位置，不包括结束
console.log('substr截取 ', str.substr(str.indexOf('v')));//可选，默认截取到末尾
console.log('slice截取 ', str.slice(str.indexOf('v')));//支持传入结束位置
console.log('**************************');

// var str="javascript";提取字符串中介于两个指定下标之间的字符"vasc"、"ip"、"ava"。（每个结果3种写法）
var str = "javascript"
console.log('substring截取 ', str.substring(str.indexOf('v'), str.indexOf('c')+1));//支持传入结束位置，不包括结束
console.log('substr截取 ', str.substr(str.indexOf('i'),2));//可选，默认截取到末尾
console.log('slice截取 ', str.slice(str.indexOf('a'),-6));//支持传入结束位置
console.log('**************************');

// var mystr1="Hello";var mystr2="world!";将一个或多个字符串拼接起来，返回拼接到的新的字符串，原字符串不变。（2种写法）
var mystr1 = "Hello"; var mystr2 = "world!";
var oddStr = mystr1 + mystr2;
var oddStr2 ='';
console.log('第一种拼接',oddStr);
console.log('第二种拼接', oddStr2.concat(mystr1, mystr2));

// 统计上述字符串str中字母a出现了多少次（多种写法）
var str = "give me some sunshine give me some rain give me another changce i wanna grow up once again";
//第一种原生循环判断
var sum = 0;
for (let i = 0; i <= str.length; i++){
    if (str[i] == 'a') {
        sum++;
    }
};
console.log('一', sum);
//第二种将包含"a"的字符串进行截取，获取截取的值
console.log('二', (str.split('a')).length - 1);

// 统计上述字符串str中出现次数最多的字母是什么
function getMost(str) {
    // 步骤1
    var result = {};
    for(let i in str) {
        if (str[i] != ' ') {
            if(str[i] in result) {
                // 步骤2如果新对象中存在这个数字则杰尼龟对象的值进行++
                result[str[i]]++;
            } else {
                // 步骤3创建一个对象，将未出现的值放进对象，定义对象的键对值
                var object = {};
                // 如果放进去一个新的值则将这个键的值赋初值
                object[str[i]] = 1;
                result = Object.assign(result, object);
            }
     }
    }
    return result;
}
//调用赋值
var result = getMost(str);
// 找到出现次数最多的字母
    var maxCount = 0;
    var maxChar = "";

    for (var char in result) {
      if (result[char] > maxCount) {
        maxCount = result[char];
        maxChar = char;
      }
    }
console.log('出现次数最多',maxChar);
console.log(' ', result);
console.log('**************************');

// 去除字符串 `'  hh   l   e  '` 中所有的空格，至少两种写法（不使用replaceAll）
var strNew = '  hh      l      e  ';
var newStr = '';
var qqww = '';
while (strNew.includes(' ')) {
    strNew = strNew.replace(' ', '')
};
//二
for (let i = 0; i<strNew.length; i++){
    var strNan = strNew[i];
    if (strNan == ' ') {
        continue
    } else {
        qqww += strNan
    }
}
console.log('去掉字符中的空格1', strNew);
console.log('去掉字符中的空格2', qqww);
console.log('**************************');

// 字符串 `'qwert'` 反转，至少两种写/法
var str = 'qwert';
var newStr = '';
for (let i = str.length-1; i >= 0; i--){
    newStr += str[i];
}
console.log('qwert反转', newStr);
//使用数组api反转
var twoFn =  str.split('').reverse().join('')
console.log('qwert反转2',twoFn);

// 字符串 `'abbaacca'` 去重
var str = 'abbaacca';
var nulStr = '';

for (let i = 0; i < str.length; i++){
    for (let j = 0; j <= nulStr.length; j++){
        if (nulStr.indexOf(str[i]) == -1) {
            nulStr += str[i]
        }
    }
}
console.log('nulStr: ', nulStr);
console.log('**************************');

// var str = "my-first-friend-lucky-man"将字符串变成驼峰法（每个单词首字母大写：My-First-Friend-Lucky-Man）。
var str = "my-first-friend-lucky-man";
var newSrFn = str.split('-')
var strNewNull = ''
for (let i = 0; i < newSrFn.length; i++){
    newSrFn[i]=newSrFn[i].charAt(0).toUpperCase()+newSrFn[i].substring(1);
}

console.log(' ',newSrFn.join('-'));