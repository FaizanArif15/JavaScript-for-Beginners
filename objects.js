const student = {
    FirstName : 'Faizan',
    LastName : 'Arif',
    RollNo : 18,
    fullname(){
        return this.FirstName +' ' + this.LastName
    }
}

console.log(student.fullname())