// 类型注释
function write(params) {
    console.log(params);
}
var num = 123;
write(num);
function sayName(person) {
    return person.firstName + '' + person.lastName;
}
var user = { firstName: "王", lastName: "宁", middleInitial: '月', fullName: '王月宁' };
document.body.innerHTML = sayName(user);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + middleInitial + lastName;
    }
    return Student;
}());
var student1 = new Student("王", "小", "明");
function cslName(student) {
    return student.fullName;
}
document.body.innerHTML = cslName(student1) + '' + sayName(user);
// 枚举
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
var c = Color.red;
console.log(Color);
console.log(Color[Color.red]);
console.log(c);
// any
var saber = [1];
saber = ['saber'];
// saber = () =>{
//     console.log(1111111111)
// }
console.log(saber);
// 类型判断
// declare function create(o: object | null): void;
// create({ prop: 0 }); // OK
var someVlaue = 'this is a dog';
var strLength = someVlaue.length;
var strLength1 = someVlaue.length;
console.log(strLength, strLength1);
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
