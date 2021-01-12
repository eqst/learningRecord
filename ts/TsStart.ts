// 类型注释
function write(params:Number) {
    console.log(params)
}

let num = 123;

write(num)


// 接口

interface Person {
    firstName:String;
    lastName:String;
}

function sayName(person: Person) {
    return person.firstName + '' + person.lastName
}

let user = {firstName:"王",lastName:"宁"}


document.body.innerHTML = sayName(user);

class Student {
    fullName:String;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName = firstName + middleInitial + lastName
    }
}

let student1 = new Student("王","小","明")

function cslName(student:Person) {
    return student.firstName+''+student.lastName
}

document.body.innerHTML = cslName(student1) + '' + sayName(user);