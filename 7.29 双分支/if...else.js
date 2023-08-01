function buttOn1() {
    var x = prompt('请输入年龄');
    if (x == 18) {
        alert(`${x}：您已成年，可以继续注册`)
    } else {
        alert(`${x}：本系统不对未成年人开放`)
    }
}
function passWord() {
    var x = prompt('请输入用户名');
    var y = prompt('请输入密码');
    if (x == 'admin' && y == '123') {
        alert(`${x}：登陆成功`)
    } else {
        alert(`${x}：用户名密码错误`)
    }
}
function pd() {
    var x = Number(prompt('请输入一个整数'));
    if (x % 2 == 0) {
        alert(`${x}：偶数`)
    } else {
        alert(`${x}：奇数`)
    }
}
function numBer() {
    var x = Number(prompt('请输入你的成绩'));
    if (x >= 90) {
        alert(`${x}：学神实在牛`)
    } else if (x < 90 && x >= 80) {
        alert(`${x}：学霸要加油`)
    } else if (x < 80 && x >= 70) {
        alert(`${x}：学民好害羞`)
    } else if (x < 70 && x >= 60) {
        alert(`${x}：学弱打酱油`)
    } else {
        alert(`${x}：学渣泪在流`)
    }
}
function numBerPd() {
    var a = Number(prompt('请输入身高'))
    var b = Number(prompt('请输入财富值'))
    var c = Number(prompt('请输入帅气值'));
    // 都要成立
    if (a >= 180 && b >= 1000 && c >= 500) {
        alert('我一定要嫁给他')
     //  有一个成立
    } else if (a >= 180 || b >= 1000 || c >= 500) {
        alert('嫁吧，比上不足，比下有余。')
    } else {
        alert('不嫁！')
    }
}
function loterPd() {
    prompt('请输入男方姓名');
    prompt('请输入女方姓名');
    var num = Math.floor(Math.random()*101);
    if (num >= 80) {
        alert('佳偶天成，珠联璧合！')
    } else if (80 < num <= 60 ) {
        alert('幸福一对！')
    }else if (60 < num <= 30 ) {
        alert('一起努力吧！')
    }else {
        alert('有缘无分，分手吧！')
    }
}
function sensonsPd() {
    var a = prompt('请输入春天、夏天、秋天、冬天');
    if (a = '春天') {
        alert('春暖花开')
    } else if (a = '夏天') {
        alert('绿树成荫')
    } else if (a = '秋天') {
        alert('五谷丰登')
    } else if (a = '冬天') {
        alert('请重新输入！')
    } else {
        alert('漫天飞雪')
    }
}
function gradeFunction() {
    var a = prompt('请输入成绩成绩A/B/C/D/E');
    switch (a) {
        case 'A':
            alert('大于等于90分且小于等于100分；');

            break;
        case 'B':
            alert('大于等于80分；');

            break;
        case 'C':
            alert('大于等于70分；');

            break;
        case 'D':
            alert('大于等于60分；');

            break;
        case 'E':
            alert('低于60分');

            break;
    
        default:
            break;
    }
}
function weekFunction() {
    var a = Number(prompt('请输入一个1-7内数字'));
    var text = null;
    if (a === 6 && 7) {
        text = '周末';
        console.log(text);
    } else {
        text = '周内';
        console.log(text);
    }
    switch (a) {
        case 1:
            alert('今天是周一哦！'+text);

            break;
        case 2:
            alert('今天是周二哦！'+text);

            break;
        case 3:
            alert('今天是周一哦！'+text);

            break;
        case 1:
            alert('今天是周三哦！'+text);

            break;
        case 4:
            alert('今天是周四哦！'+text);

            break;
        case 5:
            alert('今天是周五哦！'+text);

            break;
        case 6:
            alert('今天是周六哦！'+text);

            break;
        case 7:
            alert('今天是周日哦！'+text);

            break;
    
        default:
            alert('请重新输入');
            break;
    }
}
function monthFunction() {
    var a = Number(prompt('请输入月份'));
    var day = 31;
    var ou = 30;
    var pi = 28;
    if (a == 1 || 3 || 5 || 7 || 8 || 10 || 12) {
        alert(`${a}月有${day}天`)
    } else if (a == 4 || 6 || 9 || 11) {
        alert(`${a}月有${ou}天`)
    } else {
        alert(`${a}月有${pi}天`)
    }
}
function arrangementFunction() {
    var a =prompt('今天是不是周六或周日？是/否');
    if (a == '是') {
        var b = prompt('今天是否打算外出？是/否');
        if (b == '是') {
            var q = Number(prompt('请输入今天气温'));
            if(q >= 30){
                alert('去游泳')
            } else {
                alert('去爬山')
            }
        } else {
            alert('宅在家里')
        }
    } else {
        var c = prompt('今天是不是要工作？是/否');
        if (c == '是') {
            var d = prompt('今天天气怎么样？是/否');
            if (d == '是') {
                alert('去客户单位谈业务')
            } else {
            alert('在公司上网查资料')
            }
        } else {
            alert('外出游玩')
        }
    }
}
function blindFunction() {
    var a = prompt('请输入性别：');
    if (a == '男') {
        let b = prompt('请输入身高：');
        let c = prompt('请输入收入：');
        if (b > 180 || c > 10000) {
            alert('I do')
        } else {
            alert('你是个好人')
        }
    } else {
        alert('我们性别不合适')
    };
    var d = prompt('是否有房子？是/否');
    if (d == '没有') {
        var q = prompt('是否有钱？是/否');
        if (q == '是') {
            alert('女神：用钱买房子结婚吧！')
        } else {
            var w = prompt('是否愿意努力挣钱？？是/否');
            if (w == '是') {
                alert('我们结婚吧，一起努力挣钱！')
            } else {
                alert('女神：拜拜！')
            }
        }
    } else {
        alert('女神：咱们结婚吧')
    }
}
function yearFunction() {
    var year = prompt('请输入一个年份：');
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    alert(year + '年是闰年')
                } else {
                    alert(year + '年是平年');
                }
            } else {
                alert(year + '年是平年');
            }
        } else {
            alert(year + '年是平年');
        } 
}
function volumeFunction() {
     var type = prompt('请输入你想加什么型号的汽油：');
        if (type === '92') {
            var volume = prompt('请问您想要加多少升的汽油？');
            if (volume >= 20) {
                var price = volume * 5.9;
                alert('您已达到优惠标准，您需要支付' + price + '元');
            } else {
                var price = volume * 6;
                alert('无优惠，您需要支付' + price + '元');
            }
        } else if(type === '97'){
            var volume = prompt('请问您想要加多少升的汽油？');
            if (volume >= 30) {
                var price = volume * 6.59;
                alert('您已达到优惠标准，您需要支付' + price + '元');
            } else {
                var price = volume * 7;
                alert('无优惠，您需要支付' + price + '元');
            }
        }else{
            alert('抱歉，没有这种型号的汽油');
        }
}
function healthFunction() {
    var sex = prompt('您的性别是：');
        if (sex === '男') {
            var height = prompt('请输入你的身高(cm)：');
            var weight = prompt('请输入你的体重(公斤)：');
            var w = height - 100;
            if (weight - w > 3) {
                alert('肥胖！');
            } else if(weight - w <3){
                alert('偏瘦！');
            }else{
                alert('正常！');
            }
        } else if(sex === '女'){
            var height = prompt('请输入你的身高(cm)：');
            var weight = prompt('请输入你的体重(公斤)：');
            var w = height - 110;
            if (weight - w > 3) {
                alert('肥胖！');
            } else if(weight - w <3){
                alert('偏瘦！');
            }else{
                alert('正常！');
            }
        } 
}
function dayFunction() {
    var year = Number(prompt('请输入一个年份'));
    var month = Number(prompt('请输入当前年份的第几月'));
    var day = Number(prompt('请输入当前月份的第几天'));
    var numYear = 0 ;//一年多少天
    switch (month) {
        case 12: numYear += 30 // 如果是12月份，则需要加上11月份的30天
        case 11: numYear += 31 // 将十月份的31天加上
        case 10: numYear += 30 // 将九月份的30天加上
        case 9: numYear += 31 // 将八月份的31天加上
        case 8: numYear += 31 // 将七月份的31天加上
        case 7: numYear += 30 // 将六月份的30天加上
        case 6: numYear += 31 // 将五月份的31天加上
        case 5: numYear += 30 // 将四月份的30天加上
        case 4: numYear += 31 // 将三月份的31天加上
        case 3:
            //  判断平年还是闰年
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                // 闰年2月份29天
                numYear += 29
            } else {
                numYear += 28
            }
        case 2: numYear += 31 // 将1月份的31天加上
        case 1: numYear += day; break;
        default: alert('输入有误')
    }
    alert('当前日期是当前年中的第' + numYear + '天');
}
function maxFunction() {
    var a = prompt('请输入数字a');
    var b = prompt('请输入数字b');
    var c = prompt('请输入数字c');

    var max = a;
    if (b>max){
        max = b;
        if (c>max){
            max=c;
            alert('最大数是c:'+max);
        }else if (c<max){
            alert('最大数是b:'+max);
        }else{
            alert('最大数是b,c:'+max);
        }
    }else if (b<max){
        if (c>max){
            max=c;
            alert('最大数是c:'+max);
        }
        else if (c<max){
            alert('最大数是a:'+max);
        }else {
            alert('最大数是a,c:'+max);
        }
    }else if (b===max){
        if (c>max){
            max = c;
            alert('最大数是c:'+max)
        }else if (c<max){
            alert('最大数是a,b:'+max)
        }else{
            alert('最大数是a,b,c:'+max)
        }
    }
   
}
function mixmaxFunction() {
    var a = prompt('请输入数字a');
    var b = prompt('请输入数字b');
    var c = prompt('请输入数字c');
    var num;
    if (a > b) {
        num = a;
        a = b;
        b = num;
    } else if (a > c) {
        num = a;
        a = c;
        c = num
    } else if (b > c) {
        num = b;
        b = c;
        c = num;
    }
    console.log("最大值：" + a ,"中间值：" + b,"最小值：" + c);
} 
function guessFunction() {
    var num = Number(prompt('1代表石头，2代表剪刀，3代表布。请选择？'));
    var numFull = Math.floor((Math.random() * 3) + 1);
    if (num === 1 && numFull === 2 || num === 2 && numFull === 3 || num === 3 && numFull === 1) {
        alert(`你出${num},对方出${numFull}。你赢啦！`);
    } else if (num === 1 && numFull === 1 || num === 2 && numFull === 2 || num === 3 && numFull === 3) {
        alert(`你出${num},对方出${numFull}。平手！`);
    } else{
        alert(`你出${num},对方出${numFull}。你输了~`);
    }
}
function taxFunction() {
     /*个人所得税 = (工资 - 五险一金 - 个税起征点3500) X 税率 - 速算扣除数
			工资不超过7662 五险一金按照工资*20%计算,超过7662按照7662*20%
			变量 : 个人所得税  工资  五险一金
			判断条件 : 工资的多少    应纳税额
			分支代码块 : 计算公式*/
			var salary = Number(prompt("请输入你的工资"));//输入工资
			var wxyj = 0;  //确定五险一金
			if(salary<7662){
				w = salary*0.02;
			}else{
				w = 7662*0.02;
			}	
			var y = salary - wxyj - 3500;  //计算应纳税额			
			var result = 0; //计算结果
			if(y<=0){
				alert("你不用交税")
			}else{
				if(y<=1500){
					result = y * 0.03 - 0;
				}else if (y>1500 && y<=4500) {
					result = y * 0.1 - 105;
				}
				else if (y>4500 && y<=9000) {
					result = y * 0.2 - 555;
				}
				else if (y>9500 && y<=35000) {
					result = y * 0.25 - 1005;
				}
				else if (y>35000 && y<=55000) {
					result = y * 0.3 - 2755;
				}
				else if (y>55000 && y<=80000) {
					result = y * 0.35 - 5505;
				}
				else if (y>80000) {
					result = y * 0.45 - 13505;
				}
				alert("你的个人所得税为：" + result);
			}

}
function buttonFunction() {
    prompt('今天你是周六或周日吗？是/否') == '是' ? (prompt('今天气温是在30度以上吗？是/否') == '是' ? alert('去游泳') : alert('去爬山')) : (prompt('今天天气怎么样？是/否') == '是' ? alert('去客户公司谈业务'):alert('去公司上网查资料'))
    
}
function pdFunction() {
    prompt('是否有房子？是/否') == '是' ? (alert('男神，咱们结婚吧')) : (prompt('是否有钱？是/否') == '是' ? alert('男神：用钱买房子结婚吧！') : prompt('是否愿意努力挣钱？是/否') == '是' ?alert('男神：我们结婚吧，一起努力挣钱！'):alert('男神：拜拜！'))
}
function jjFunction() {
    var a = prompt('请输入季节');
    a == '春天' ? alert('春暖花开') : a == '夏天' ? alert('绿树成荫') : a == '秋天' ? alert('五谷丰登') : a == '冬天' ? alert('漫天飞雪'):alert('请重新输入')
}