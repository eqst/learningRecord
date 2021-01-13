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
    console.log(student1);
    return student.fullName;
}
document.body.innerHTML = cslName(student1) + '' + sayName(user);
