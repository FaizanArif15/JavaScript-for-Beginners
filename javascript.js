// Variable initialization techniques

// var,let,const

// var name = 'Faizan';

// let name='Faizan';
// name = 'Arif';

// const name = 'Faizan';
// name = 'Arif';

// console.log(name);


// Data types

// numbers,string,boolean,null,undefined,symbol

// let age = 45;
// age = 30;
// age = 5.55;

// const name= 'Faizan';

// const value = null;

// let value = undefined;

// const value=true;

// Concatenationn

// const name = 'Faizan';
// const age = 18;

// console.log(typeof value);
// console.log('My name is ' + name + ' and I am ' + age);
// console.log(`My name is ${name} and I am ${age}`);

// const str1 = 'Importance, Famous, Interesting';

// console.log(str1.length);
// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());
// console.log(str1.substring(12,18));
// console.log(str1.split(''));
// console.log(str1.split(', '));
// console.log(str1.split(', ')[1]);

// Arrays

// const arr = new Array(1,2,3,4,5);
// const arr = [1,2,3,4,5];

// console.log(arr);
// console.log(arr[2]);
// console.log(arr[1,4]);
// console.log(arr.push(6));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.length);
// console.log(arr.indexOf(2));
// console.log(arr.unshift(10,90));
// arr[0] = 'Fruits';
// console.log(arr);

// Create Object Literals

// const person = {
//     firstname : 'Faizan',
//     lastname : 'Arif',
//     age : 18,
//     hobbies : ['Gardening','games','chess'],
//     address : {
//         street : '213-A Block',
//         area : 'Gulshan-e-Ravi',
//         city : 'Lahore',
//         country : 'Pakistan',
//     }
// }

// console.log(person.firstname, person.lastname);
// console.log(person.hobbies);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// Lists

// const todos = [
//     {
//         id : 1,
//         name : "Faizan",
//         enroll : true,
//     },
//     {
//         id : 2,
//         name : "Umer",
//         enroll : true,
//     },
//     {
//         id : 3,
//         name : "Nosheen",
//         enroll : false,
//     }
// ];

// console.log(todos[2].name)

// for loop
// for(let i=0;i<todos.length;i++) {
//     console.log(todos[i].name)
// };

// for(let todo of todos) {
//     console.log(todo.id);
// };

// while loop
// let i = 0;
// while(i<todos.length) {
//     console.log(todos[i].enroll);
//     i++;
// };

// forEach, map, filter
// todos.forEach(function(todo){
//     console.log(todo.id);
// });

// const todoInf = todos.map(function(todo){
//     return todo.name;
// });
// console.log(todoInf);

// const todoInf = todos.filter(function(todo){
//     return todo.name === 'Nosheen';
// }).map(function(todo){
//     return todo.enroll;
// });
// console.log(todoInf);

// Conditions

// const x = 78;
// if(x>10) {
//     console.log('x greater than 10')
// } else if(x < 10) {
//     console.log("x less than 10")
// } else{
//     console.log("x equal to 10")
// }

// const x = 10;
// let color =  x>=10 ? 'Orange' : 'Pink';
// console.log(color);

// switches

// color = 'Black';
// switch(color) {
//     case 'Orange':
//         console.log('color is orange');
//         break;
//     case 'Pink':
//         console.log("color is Pink");
//         break;
//     default:
//         console.log("color is not orange or pink");
//         break;
// };

// functions

// function addnum(num1=1, num2=1) {
//     return num1 + num2;
// }
// console.log(addnum(5, 5));

// const addnum = (num1=1, num2=1) => {
//     return num1 + num2;
// };
// console.log(addnum(5, 9));

// Object Oriented Programming

// function Person(firstname,lastname,dob) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = Date(dob);
//     this.getfullname = function() {
//         return `${this.firstname} ${this.lastname}`
//     };
// };

// Person.prototype.getdob = function() {
//     return this.dob
// }

class Person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = Date(dob);
    };
    getfullname() {
        return `${this.firstname} ${this.lastname}`
    }
};

// Create Object
const person1 = new Person("Faizan","Arif","29-02-2012");
const person2 = new Person("Umer","Arif","24-09-1995");
// console.log(person1.firstname,person1.lastname);
// console.log(person2.dob);
// console.log(person1.getfullname());
// console.log(person1.getdob())
console.log(person1.getfullname())
console.log(person1)
