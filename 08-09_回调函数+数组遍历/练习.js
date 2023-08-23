var news = [
    '假期要问回顾：月饼事件惊动阿里高层',
    '上海中秋假期消费者投诉情况：网络销售和食品',
    '马龙登时尚杂志封面 秀胸肌单眼皮放电撩人',
    '阿里巴巴4名工程师 因“刷月饼”被开除',
    '过节出门没带钱？“手机变钱包”不会太远'
];
  
//prev从第0个索引开始，依次往后开始累加直到current的值
//reduce(fn,初始值)
var a = news.reduce(function (prev, current, index) {
    // var result = 0;
    return prev + index + '、' + current.replace('月', '<mark>月</mark>') + '<br>'
    //  return current
}, 0);

document.write(a)
document.write('<br>');


var friends = [
    { name: '张三', age: 18, online: true },
    { name: '李四', age: 16, online: false },
    { name: '王五', age: 20, online: true },
    { name: '李明', age: 20, online: false },
    { name: '花花', age: 16, online: true },
];


//一、判断数组中的用户是否都是在线的，如果是，输出：都在线呀，出来耍。
function fnButton1() {
    var online =  friends.every(function (item, index, arr) {
        let key = false;
        if (item.online) {
            key = true
        }
        return key
    })
    if (online) {
        console.log('都在线呀，出来耍!');
    }
}
//二、判断数组中的用户是否有在线的，如果有，输出：谁在线，冒个泡。
function fnButton2() {
    var online =  friends.some(function (item, index, arr) {
        let key = false;
        if (item.online) {
            key = true
        }
        return key
    })
    if (online) {
        console.log('谁在线，冒个泡!');
    }
    
}
// 三、从键盘输入账号和密码，判断是否能够登录
// 1、如果账号不存在，提示用户账号不存在
// 2、账号存在，密码错误，提示用户密码错误
// 3、账号密码正确，提示用户登录成功
// 使用find和findIndex两种写法
var friends = [
    { name: '张三', age: 18, psw: 123 },
    { name: '李四', age: 16, psw: 124 },
    { name: '王五', age: 20, psw: 234},
    { name: '李明', age: 20, psw: 456 },
    { name: '花花', age: 16, psw: 789},
  ];
function loginFn() {
    let userName = document.getElementsByName('username')[0].value;
    let passWord = document.getElementsByName('password')[0].value;

    //find

    // var res = friends.find(function (item, index, arr) {
    //    return userName === item.name
    // });

    //findIndex

    var res = friends.findIndex(function (item, index, arr) {
       return userName === item.name
    });
    if (friends[res]&&friends[res]!=-1) {
        if (friends[res].psw == passWord) {
            console.log('登陆成功');
            console.log(' ',friends[res]);
        } else {
            console.log('密码错误');
        }
    } else {
        console.log(' 账号不存在');
    }
};

var friends = [
    { name: '张三', age: 18, online: true },
    { name: '李四', age: 16, online: false },
    { name: '王五', age: 20, online: true },
    { name: '李明', age: 20, online: false },
    { name: '花花', age: 16, online: true },
];
  
//四、找出所有在线的对象存入新数组

let res = friends.filter(item => item.online);
console.log('所有在线的', res);

// 五、年龄不小于18岁，并且是在线状态，添加一个属性：sign: '赶紧出来浪'
// 年龄不小于18岁，并且是非在线状态，添加一个属性：sign: '赶快来摸鱼'
// 其余，添加一个属性：sign: '我1是中国好青年'

var mapArrayFriend = friends.map(function (item, index, arr) {
    if (item.age >= 18 && item.online) {
        item.sign = '赶紧出来浪'
    } else if (item.age >= 18 && !item.online) {
        item.sign = '赶紧来摸鱼'
    } else {
        item.sign = '我是中国好青年'
    };
    return item
})
console.log(' ',mapArrayFriend);