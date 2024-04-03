const arr = [2,50,49,100,200,60];

// console.log(arr.sort(function(a, b){
//     console.log(a, b);
//     console.log(a - b);
//     return a-b}));

// console.log(Math.min.apply(null, arr))
// console.log(Math.max.apply(null, arr))

// for minimum value
// const len = arr.length;
// let min = Infinity;
// for (let i = 0; i < len; i++){
//     if (arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log(min)

// for maximum value
// const len = arr.length;
// let max = -Infinity;
// for (let i = 0; i < len; i++){
//     if (arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max)


let num = '';
function myfunc(value) {
    num += value + ' ' ;
};
// arr.forEach(myfunc);
// console.log(num);
function myfunc1(value){
    return value * 2;
};
arr2 = arr.map(myfunc1);
console.log(arr2);   