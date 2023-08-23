var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//封装forEach(遍历数组)
function forEach(array,fn){
    for(let i=0;i<array.length;i++){
        fn(array[i], i, array);
    }
}
//调用函数打印出每一个元素
forEach(arr, function (item, index, arr) {
    console.log(`arr数组的第${index}个元素是${item}`);
});


//封装some(一个元素满足结果则返回ture)
function some(array, fn,arr) {
    let key = false;
    for (let i = 0; i < array.length; i++){
        //如果有一个元素满足就走这一步修改key属性
        if (fn(array[i], i,arr)) {
            key = true;
        };
    }
    return key;
};
let result = some(arr, function (item, index, arr) {
    return item > 7;
});
console.log('result封装some',result);

//封装every(一个元素不满足结果则返回forse)
function every(array, fn,arr) {
    let key = true;
    for (let i = 0; i < array.length; i++){
        //如果有一个元素不满足就走这一步修改key从而直接返回
        if (!fn(array[i], i,arr) ){
            key = false;
        };
        // console.log(' ',!fn(array[i], i,arr));
    }
    return key;
};
let resultEver = every(arr, function (item, index, arr) {
    return item > 7;
});
console.log('result封装every', resultEver);

//封装filter(筛选出满足条件的返回一个新数组)
function filter(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i], i, arr)) {
         newArray[newArray.length] = arr[i]
        }
    }
    return newArray;
}
var newArray =  filter(arr, function (item, index, arr) {
    if (item < 5) {
        return item
    }
})
console.log('返回一个新数组', newArray);

var arrAa = [
    { name: '张三', age: 18 },
    { name: '李四', age: 20 },
];
console.log('原数组arr', arrAa);

//封装map(映射到新的数组中不改变原数组可添加元素)
function map(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        newArray = fn(arr[i], i, arr)
    }
    return newArray
}
var mapFn = map(arrAa, function (item, index, array) {
    array[index].weight = '100';
    return array  
});
console.log('封装map ', mapFn);

var friends = [
    { name: '张三', age: 18, online: false },
    { name: '李四', age: 16, online: false },
    { name: '王五', age: 20, online: true },
    { name: '李明', age: 20, online: false },
    { name: '花花', age: 16, online: true },
];
//封装find(查找数组中第一个符合条件的元素，如果没有最终返回undefined)
function find(arr,fn) {
    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i], i, arr)) {
            return arr[i]
        }
    }
}
var findFn = find(friends, function (item, index, arr) {
    return item.online 
});
console.log('封装find', findFn);

//封装findIndex
function findIndex(arr, fn) {
    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i], i, arr)) {
            return arr[i];
        } 
        
    }
    return -1
}
var find = findIndex(friends, function (item, index, arr) {
    return item.age < 16
});
console.log('封装findIndex', find);

//封装reduce

