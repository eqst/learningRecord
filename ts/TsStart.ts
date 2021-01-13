// 类型注释
function write(params:Number) {
    console.log(params)
}

let num:Number = 123;

write(num)


// 接口

interface Person {
    firstName:String;
    lastName:String;
    middleInitial:String;
    fullName:String;
}

function sayName(person: Person) {
    return person.firstName + '' + person.lastName
}

let user = {firstName:"王",lastName:"宁",middleInitial:'月',fullName:'王月宁'}


document.body.innerHTML = sayName(user);

class Student {
    fullName:String;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName = firstName + middleInitial + lastName
    }
}

let student1 = new Student("王","小","明")

function cslName(student:Person) {
    return student.fullName
}

document.body.innerHTML = cslName(student1) + '' + sayName(user);


// 枚举
enum Color {red=1,green,blue}

let c:Color = Color.red

console.log(Color)
console.log(Color[Color.red])
console.log(c)

// any
let saber: any[] = [1]
saber = ['saber']
// saber = () =>{
//     console.log(1111111111)
// }

console.log(saber)


// 类型判断
// declare function create(o: object | null): void;

// create({ prop: 0 }); // OK

let someVlaue: any = 'this is a dog';

let strLength:number = (<string>someVlaue).length;

let strLength1:number = (someVlaue as string).length

console.log(strLength,strLength1)

// let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;
