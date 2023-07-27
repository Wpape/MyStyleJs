# MyStyleJs
2023/7/27创建随时更新

# JS数据类型

## 数据类型介绍

为什么需要定义数据类型？

变量是内存中的一个存储区域。而数据类型的定义决定了这块存储区域的大小。【变量与数据类型的关系】

为什么需要定义变量存储区域的大小？

在计算机中，不同的数据所需占用的存储空间是不同的，为了便于把数据分成所需内存大小不同的数据，充分利用存储空间，于是定义了不同的数据类型。

比如：定义姓名使用字符串类型：“张三”，定义年龄使用数字类型：18。

总结：数据类型的区分是一种系统资源分配优化的方案。

## JS变量的数据类型

变量是用来存储值的，有变量名和数据类型。变量的数据类型决定了如何将变量的值的存储到计算机的内存中。JavaScript 是一种**弱类型语言**，声明变量都是使用var，不需要提前声明变量类型，在程序运行过程中，变量被赋值的时候类型会被自动确定。

```js
var age = 18; // 数字类型
var name = '张三'; // 字符串类型
```

在代码运行时，变量的数据类型是由 JS引擎 根据 = 右边变量值的数据类型来判断 的，运行完毕之后， 变量就确定了数据类型。

JavaScript 变量的数据类型可以动态变化，相同的变量可以使用赋值不同类型的数据：

```js
var age = 18; // 数字类型
age = '20';  // 字符串类型
```

## JS数据类型的分类

JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有六种。

- 数值（number）：整数和小数（比如`1`和`3.14`）。
- 字符串（string）：文本（比如`Hello World`）。
- 布尔值（boolean）：表示真伪的两个特殊值，即`true`（真）和`false`（假）。
- `undefined`：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值。
- `null`：表示空值，即此处的值为空。
- 对象（object）：各种值组成的集合。

JS中数据类型分可以为两大类：**基本数据类型**和**引用数据类型**

> 基本数据类型也叫简单数据类型、值类型，引用数据类型也叫复杂数据类型

- **值类型(基本类型)**：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）。

- **引用数据类型**：对象数据类型（Object）。

这6中数据类型不包含ES6的数据类型，其中Object又包含对象(Object)、数组(Array)、函数(Function)等。

![image-20211127115129225](https://i.loli.net/2021/11/27/VczsHdnR1F2ESYB.png)

## 数字类型Number

Number （数字）类型可以表示整数和小数（浮点值）。

### 整数

我们在程序中常用是是使用十进制数字，十进制取值范围是0-9：

```js
var age = 18; //整数
```

除了常见的十进制数据，还有二进制、八进制、十六进制。（了解）

八进制数字：第一个数字必须是零（0），然后是相应的八进制数字（数字 0~7）。如果字面量中包含的数字超出了应有的范围，就会忽略前缀的零，后面的数字序列会被当成十进制数：

```js
var num  = 071; //表示十进制的57
var num2 = 079; //无效的八进制，当成79处理
```

十六进制数字：必须让真正的数字前缀 0x（区分大小写），然后是十六进制数字（0~9 以 及 A~F）。十六进制数字中的字母大小写均可：

```js
var num1 = 0xA; // 十六进制 10 
var num2 = 0x1f; // 十六进制 31
```

> 注意：由于 JavaScript 保存数字的方式，实际中可能存在正零（+0）和负零（0）。正零和负零在所有情况下都被认为是等同的。

### 小数（浮点数）

要定义浮点值，数字中必须包含小数点，而且小数点后面必须至少有一个数字。虽然小数点前面不是必须有整数，但推荐加上。

```js
var weight = 62.5; // 小数
```

JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，`1`与`1.0`是相同的，是同一个数。

```js
1 === 1.0 // true
```

这就是说，JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。容易造成混淆的是，某些运算只有整数才能完成，此时 JavaScript 会自动把64位浮点数，转成32位整数，然后再进行运算，参见《运算符》一章的“位运算”部分。

浮点值的精确度最高可达 17 位小数，但在算术计算中远不如整数精确，所以涉及小数的比较和运算要特别小心。例如，0.1 加 0.2 得到的不是 0.3，而是 0.300 000 000 000 000 04。由于这种微小的舍入错误，导致很难测试特定的浮点值。

```JS
var a = 0.1, b = 0.2;
var c = a + b;
console.log('c=',c); // c= 0.30000000000000004

0.1 + 0.2 === 0.3
// false

0.3 / 0.1
// 2.9999999999999996

(0.3 - 0.2) === (0.2 - 0.1)
// false
```

> 注意：之所以存在这种舍入错误，是因为使用了 IEEE 754 数字，这种错误并非 ECMAScript所独有。其他使用相同格式的语言也有这个问题。

### 值的范围

由于内存的限制，ECMAScript 并不支持表示这个世界上的所有数字。ECMAScript 可以表示的最小数字保存在 Number.MIN_VALUE 中，这个值在多数浏览器中是 5e-324；可以表示的最大数字保存在Number.MAX_VALUE 中，这个值在多数浏览器中是 1.797 693 134 862 315 7e+308。

如果某个计算得到的数字结果超出了 JavaScript 可以表示的范围，那么这个数字会被自动转换为一个特殊的 Infinity（无穷）值。任何无法表示的负数以-Infinity（负无穷大）表示，任何无法表示的正数以 Infinity（正无穷大）表示。

如果计算返回正 Infinity 或负 Infinity，则该值将不能再进一步用于任何计算。这是因为Infinity 没有可用于计算的数字表示形式。要确定一个值是不是有限大（即介于 JavaScript 能表示的最小值和最大值之间），可以使用 isFinite()函数，如下所示：

```js
var result = Number.MAX_VALUE + Number.MAX_VALUE; 
console.log(isFinite(result)); // false 
```

虽然超出有限数字范围的计算并不多见，但总归还是有可能的。因此在计算非常大或非常小的数字时，有必要监测一下计算结果是否超出范围。

> 注意：使用 Number.NEGATIVE_INFINITY 和 Number.POSITIVE_INFINITY 也可以获取正、负 Infinity。没错，这两个属性包含的值分别就是-Infinity 和 Infinity。

### 特殊数值

#### 正零和负零

JavaScript 的任何一个数都有一个对应的负值，就连`0`也不例外。

JavaScript 内部实际上存在2个`0`：一个是`+0`，一个是`-0`，区别就是64位浮点数表示法的符号位不同。它们是等价的。

```js
-0 === +0 // true
0 === -0 // true
0 === +0 // true
```

几乎所有场合，正零和负零都会被当作正常的`0`。

```js
+0 // 0
-0 // 0
(-0).toString() // '0'
(+0).toString() // '0'
```

唯一有区别的场合是，`+0`或`-0`当作分母，返回的值是不相等的。

```js
(1 / +0) === (1 / -0) // false
```

上面的代码之所以出现这样结果，是因为除以正零得到`+Infinity`，除以负零得到`-Infinity`，这两者是不相等的

#### NaN

##### 含义

有一个特殊的数字叫 NaN，意思是“不是数字”（Not a Number），用于表示本来要返回数字的操作失败了（而不是抛出错误）。主要出现在将字符串解析成数字出错的场合。

```js
5 - 'x' // NaN
```

上面代码运行时，会自动将字符串`x`转为数值，但是由于`x`不是数值，所以最后得到结果为`NaN`，表示它是“非数字”（`NaN`）。

比用 0 除任意数字在其他语言中通常都会导致错误，从而中止代码执行。但在 ECMAScript 中，0、+0 或-0 相除会返回 NaN：

```js
console.log(0/0); // NaN 
console.log(-0/+0); // NaN
```

如果分子是非 0 值，分母是有符号 0 或无符号 0，则会返回 Infinity 或-Infinity：

```js
console.log(5/0); // Infinity 
console.log(5/-0); // -Infinity 
```

需要注意的是，`NaN`不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于`Number`，使用`typeof`运算符可以看得很清楚。

```js
typeof NaN // 'number'
```

##### 运算规则

NaN 有几个独特的属性：

- 任何涉及 NaN 的操作始终返回 NaN（如 NaN/10），在连续多步计算时这可能是个问题。

```c
NaN + 32 // NaN
NaN - 32 // NaN
NaN * 32 // NaN
NaN / 32 // NaN
```

- NaN 不等于包括 NaN 在内的任何值。例如，下面的比较操作会返回 false：

```js
// NaN也是JS中唯一一个不等于自身的值，判断某个值不能直接与NaN比较
console.log(NaN == NaN); // false 
console.log(NaN == 2);   // false 
```

为此，ECMAScript 提供了 isNaN()函数。该函数接收一个参数，可以是任意数据类型，然后判断这个参数是否“不是数字”。

把一个值传给 isNaN()后，该函数会尝试把它转换为数字。某些非数字的值可以直接转换成数字，如字符串"10"或布尔值。任何不能转换为数字的值都会导致这个函数返回true。举例如下：

```js
console.log(isNaN(NaN)); // true 
console.log(isNaN(10)); // false，10 是数字
console.log(isNaN("10")); // false，可以转换为数字 10 
console.log(isNaN("blue")); // true，不可以转换为数字
console.log(isNaN(true)); // false，可以转换为数字 1 
```

#### Infinity

##### 含义

`Infinity`表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非0数值除以0，得到`Infinity`。

```js
// 场景一
Math.pow(2, 1024)
// Infinity

// 场景二
0 / 0 // NaN
1 / 0 // Infinity
```

上面代码中，第一个场景是一个表达式的计算结果太大，超出了能够表示的范围，因此返回`Infinity`。第二个场景是`0`除以`0`会得到`NaN`，而非0数值除以`0`，会返回`Infinity`。

`Infinity`有正负之分，`Infinity`表示正的无穷，`-Infinity`表示负的无穷。

```js
Infinity === -Infinity // false

1 / -0 // -Infinity
-1 / -0 // Infinity
```

上面代码中，非零正数除以`-0`，会得到`-Infinity`，负数除以`-0`，会得到`Infinity`。

由于数值正向溢出（overflow）、负向溢出（underflow）和被`0`除，JavaScript 都不报错，所以单纯的数学运算几乎没有可能抛出错误。

`Infinity`大于一切数值（除了`NaN`），`-Infinity`小于一切数值（除了`NaN`）。

```js
Infinity > 1000 // true
-Infinity < -1000 // true
```

`Infinity`与`NaN`比较，总是返回`false`。

```js
Infinity > NaN // false
-Infinity > NaN // false

Infinity < NaN // false
-Infinity < NaN // false
```

##### 运算规则

`Infinity`的四则运算，符合无穷的数学计算规则。

```js
5 * Infinity // Infinity
5 - Infinity // -Infinity
Infinity / 5 // Infinity
5 / Infinity // 0
```

0乘以`Infinity`，返回`NaN`；0除以`Infinity`，返回`0`；`Infinity`除以0，返回`Infinity`。

```js
0 * Infinity // NaN
0 / Infinity // 0
Infinity / 0 // Infinity
```

`Infinity`加上或乘以`Infinity`，返回的还是`Infinity`。

```js
Infinity + Infinity // Infinity
Infinity * Infinity // Infinity
```

`Infinity`减去或除以`Infinity`，得到`NaN`。

```js
Infinity - Infinity // NaN
Infinity / Infinity // NaN
```

`Infinity`与`null`计算时，`null`会转成0，等同于与`0`的计算。

```js
null * Infinity // NaN
null / Infinity // 0
Infinity / null // Infinity
```

`Infinity`与`undefined`计算，返回的都是`NaN`。

```js
undefined + Infinity // NaN
undefined - Infinity // NaN
undefined * Infinity // NaN
undefined / Infinity // NaN
Infinity / undefined // NaN
```

## 字符串类型String

String（字符串）数据类型表示零或多个 16 位 Unicode 字符序列。是零个或多个排在一起的字符，放在单引号或双引号之中。

```js
'abc'
"abc"
```

ECMAScript 语法中表示字符串的引号没有区别。字符串可以使用双引号（"）、单引号（'）或反引号（`）标示，因此下面的代码都是合法的：

```js
var name = '张三';
var hobby = "睡觉";
```

- 在JS中书写中文必须添加引号，否则报错
- 开头和结尾的引号不能混用，前后引号类型保持一致，比如：`var str = "你好';` 是错误的写法

由于 HTML 语言的属性值使用双引号，所以很多项目约定 JavaScript 语言的字符串只使用单引号。当然，只使用双引号也完全可以。重要的是坚持使用一种风格，不要一会使用单引号表示字符串，一会又使用双引号表示。

字符串默认只能写在一行内，分成多行将会报错。

```js
'a
b
c'
// SyntaxError: Unexpected token ILLEGAL
```

上面代码将一个字符串分成三行，JavaScript 就会报错。

如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。

```js
var longString = 'Long \
long \
long \
string';

longString
// "Long long long string"
```

上面代码表示，加了反斜杠以后，原来写在一行的字符串，可以分成多行书写。但是，输出的时候还是单行，效果与写在同一行完全一样。注意，反斜杠的后面必须是换行符，而不能有其他字符（比如空格），否则会报错。

连接运算符（`+`）可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。

```js
var longString = 'Long '
  + 'long '
  + 'long '
  + 'string';
```

如果想输出多行字符串，可以使用转义字符 `\n`。

```c
var longString = 'Long\n long\n long\n string';
```

### 字符串引号嵌套

JS 可以用单引号嵌套双引号 ，或者用双引号嵌套单引号 (外双内单，外单内双)

```js
var str = '我是"好人"';
var str = "我是'好人'";
```

### 转义字符

如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。

```js
var str = '我是\'好人\'';
var str = "我是\"好人\"";
```

| **转义字符** | **解释说明**                |
| ------------ | --------------------------- |
| `\n`         | 换行符，n 是 newline 的意思 |
| `\\`         | 斜杠 \                      |
| `\'`         | '  单引号                   |
| `\"`         | ” 双引号                    |
| `\t`         | tab 缩进                    |
| `\b`         | 空格 ，b 是 blank 的意思    |

## 布尔类型Boolean

Boolean（布尔）类型代表“真”和“假”两个状态。“真”用关键字`true`表示，“假”用关键字`false`表示。布尔值只有这两个值。

下列运算符会返回布尔值：

- 前置逻辑运算符： `!` (Not)
- 相等运算符：`===`，`!==`，`==`，`!=`
- 比较运算符：`>`，`>=`，`<`，`<=`

如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为`false`，其他值都视为`true`。

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `""`或`''`（空字符串）

布尔值往往用于程序流程的控制，请看一个例子。

```js
if ('') {
  console.log('true');
}
// 没有任何输出
```

上面代码中，`if`命令后面的判断条件，预期应该是一个布尔值，所以 JavaScript 自动将空字符串，转为布尔值`false`，导致程序不会进入代码块，所以没有任何输出。

注意，空数组（`[]`）和空对象（`{}`）对应的布尔值，都是`true`。

```js
if ([]) {
  console.log('true');
}
// true

if ({}) {
  console.log('true');
}
// true
```

布尔值适用于记录只存在两种可能的值(常用记录是否怎么样)，布尔值变量的命名，一般以is开头，或has开头。

```js
var isOpen = true;
var isHot = false;
```

## null 和 undefined

### 概述

`null`与`undefined`都可以表示“没有”，含义非常相似。将一个变量赋值为`undefined`或`null`，老实说，语法效果几乎没区别。

```js
var a = undefined;
// 或者
var a = null;
```

上面代码中，变量`a`分别被赋值为`undefined`和`null`，这两种写法的效果几乎等价。

在`if`语句中，它们都会被自动转为`false`，相等运算符（`==`）甚至直接报告两者相等。

```js
if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true
```

从上面代码可见，两者的行为是何等相似！谷歌公司开发的 JavaScript 语言的替代品 Dart 语言，就明确规定只有`null`，没有`undefined`！

既然含义与用法都差不多，为什么要同时设置两个这样的值，这不是无端增加复杂度，令初学者困扰吗？这与历史原因有关。

1995年 JavaScript 诞生时，最初像 Java 一样，只设置了`null`表示"无"。根据 C 语言的传统，`null`可以自动转为`0`。

```js
Number(null) // 0
5 + null // 5
```

上面代码中，`null`转为数字时，自动变成0。

但是，JavaScript 的设计者 Brendan Eich，觉得这样做还不够。首先，第一版的 JavaScript 里面，`null`就像在 Java 里一样，被当成一个对象，Brendan Eich 觉得表示“无”的值最好不是对象。其次，那时的 JavaScript 不包括错误处理机制，Brendan Eich 觉得，如果`null`自动转为0，很不容易发现错误。

因此，他又设计了一个`undefined`。区别是这样的：`null`是一个表示“空”的对象，转为数值时为`0`；`undefined`是一个表示"此处无定义"的原始值，转为数值时为`NaN`。

```js
Number(undefined) // NaN
5 + undefined // NaN
```

### 空的Null

`null`表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入`null`，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入`null`，表示未发生错误。

Null 类型同样只有一个值，即特殊值 null。逻辑上讲，null 值表示一个空对象指针，这也是给typeof 传一个 null 会返回"object"的原因：

```js
var obj = null;
```

null表示"没有对象"，即该处不应该有值。

典型用法是：

（1） 作为函数的参数，表示该函数的参数不是对象。
（2） 作为对象原型链的终点。
（3）查找标签的时候，没找到，也会返回null。

### 未定义类型Undefined

Undefined 类型只有一个值，就是特殊值 undefined。当使用 var 声明了变量但没有初始化时，就相当于给变量赋予了 undefined 值：

```js
var wieght;
console.log(wieght); // undefined 
console.log(wieght == undefined); // true 
```

undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。

典型用法是：

（1）变量被声明了，但没有赋值时，就等于undefined。
（2)  调用函数时，应该提供的参数没有提供，该参数等于undefined。
（3）对象没有赋值的属性，该属性的值为undefined。
（4）函数没有返回值时，默认返回undefined。

```js
// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
```

## 对象类型Object

ECMAScript 中的对象其实就是一组数据和功能的集合。对象通过 new 操作符后跟对象类型的名称来创建。开发者可以通过创建 Object 类型的实例来创建自己的对象，然后再给对象添加属性和方法。

常用的对象的类型：Object、Array、String、Date、Math、RegExp。

## 数据类型的获取

JavaScript 有三种方法，可以确定一个值到底是什么类型。

- `typeof`运算符
- `instanceof`运算符
- `Object.prototype.toString`方法

因为 ECMAScript 的类型系统是松散的，所以需要一种手段来确定任意变量的数据类型。typeof操作符就是为此而生的。对一个值使用 typeof 操作符会返回下列字符串之一：

- "undefined"表示值未定义；
- "boolean"表示值为布尔值；
- "string"表示值为字符串；
- "number"表示值为数字；
- "object"表示值为对象（而不是函数）或 null；  "function"表示值为函数；

```js
var message = "some string"; 
var num = 22;
console.log(typeof message); // "string" 
console.log(typeof(message)); // "string" 
console.log(typeof true); // "boolean" 
console.log(typeof num); // "number" 
console.log(typeof undefined); // "undefined" 
console.log(typeof null); // "null" 
console.log(typeof NaN);// "number"  注意 NaN 是数字类型

// 对象：object， 数组:array，函数function 都属于对象类型
var p = {};
console.log(typeof p);//object
var arr = [1, 2, 3];
console.log(typeof arr);//object
function add() { }
console.log(typeof add);//function
```

注意：typeof在某些情况下返回的结果可能会让人费解，但技术上讲还是正确的。比如，调用typeof null 返回的是"object"。这是因为特殊值 null 被认为是一个对空对象的引用。

`null`的类型是`object`，这是由于历史原因造成的。1995年的 JavaScript 语言第一版，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），没考虑`null`，只把它当作`object`的一种特殊值。后来`null`独立出来，作为一种单独的数据类型，为了兼容以前的代码，`typeof null`返回`object`就没法改变了。

# 字面量

字面量（literal）是用于表达一个固定值的表示法，又叫常量。

通俗的理解，字面就是所见即所得，js 程序执行到代码中的字面量，会立即知道它是什么类型的数据，值是多少

## 数字字面量

```js
var a = 2;
var a = 2.6;
```

## 字符串字面量

```js
var str = "这是一个字符串#&*";
var str = "这是一个'字符串'#&*";
var str = 'abc';
var str = 'a"b"c';
var str = '123';
var str = '        '; // 空白字符串
var str = ''; // 空字符串
```

## 布尔字面量

```js
var isOpen = true;
```

## 对象字面量

```js
var zhangsan = { name: '张三' };
```

## 数组字面量

```js
var arr = [2,3,6,5];
```

# 基础练习

- 从键盘输入小明的语数外成绩，输出  小明的总分是 
- 定义三个变量，从键盘输入值给他们，然后使用alert()顺序输出他们，保留三位小数
- 定义常量PI=3.1415926，从键盘输入 半径 r；输出圆的面积（保留2位小数）
- 从键盘获取 圆的半径r， 圆柱高h，定义一个圆周率常量 PI = 3.1415926 ，求出圆周长，园面积，圆柱体积 取小数点后两位 有文字说明，例如：圆周长 = xxx.xx 
