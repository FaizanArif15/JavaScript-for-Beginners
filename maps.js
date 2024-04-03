const x = new Map([
    ['apples', 300],
    ['bananas', 250]
]);
x.set('apples', 200)
x.set('milk', 180)

console.log(x)
console.log(x.get('milk'))
// console.log(x.delete('milk'))
console.log(x.has('milk'))
// console.log(x)

x.forEach (function(value, key){
    console.log(value)
});
