// declare variable using var
var x;
x = 23;
x = 5; // Allowed
{
  var x = 7 // change global variable x
  // console.log(x)
}
// console.log(x);

// declare variable using let
let y;
y = 23;
y = 5; // Allowed
{
  let y = 7 // not change global variable y
  // console.log(y)
}
// console.log(y);

// declare variable using const
// const variables must be assigned a value when they are declared
// const z = 23;
const z = [1, 2, 'd']
// z = 5; // Not Allowed
z.push(99)
z[1] = 'greate work'
// console.log(z);




