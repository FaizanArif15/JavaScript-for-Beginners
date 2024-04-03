class Person {
    constructor(first_name, last_name, age){
        this._first_name = first_name;
        this._last_name = last_name;
        this._age = age;
    }
    get fullname(){
        return `${this._first_name} ${this._last_name}`;
    }
}

class Students extends Person {
    constructor(first_name, last_name, age, degree, program = 'DS'){
        super(first_name, last_name, age)
        this._degree = degree;
        this._program = program;
    }

    set degree(deg){
        this._degree = deg;
    }

    get degree(){
        return this._degree;
    }

    set program(prog){
        this._program = prog;
    }

    get program(){
        return this._program;
    }
    
}

const std1 = new Students('Faizan', 'Arif', 15, 'BS');
const std2 = new Students('Bakir', 'Raza', 20, 'BS', 'CS');
const std3 = new Students('Rafey', 'shahjahan', 21, 'BS', 'SE');

console.log(std1.fullname)
console.log(std2.fullname)
console.log(std3.fullname)

console.log(std1.program)
console.log(std1.degree)
std1.program = 'IT'
console.log(std1.program)
