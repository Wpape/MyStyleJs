
var friends = [
    { name: 'Tom', age: 22, online: true },
    { name: 'Lily', age: 21, online: false },
    { name: 'Lucy', age: 20, online: true },
    { name: '李明', age: 20, online: false },
    { name: '花花', age: 20, online: true }
];
for (let i = 0; i <= friends.length; i++){
    for (let j = i+1; j < friends.length; j++){
        if (friends[i].online == false) {
            var temp = friends[i];
            friends[i] = friends[j]
            friends[j] = temp;
        }
    }
}
console.log('friends',friends);