function global() { document.write(this + "<br/>");}
var o = {"local": function () { document.write(this + this.x +"<br/>");}, "x": 10};
global();
o.local();

var student = {
    name: 'Mai Ha Thi',
    getName: function() {
        document.write(this.name);
        return this.name;
    }
}
var _deStudent = student.getName();
document.write('<br/>')

// var person1 = {name: 'Nhat Minh', age: 32};
// var person2 = {name: 'Huu Trung', age: 32};
// var sayHello = function () { alert('Hello,' + this.name); };
// var sayGoodbye = function () { alert('Goodbye,' + this.name); };
// sayHello.call(person1);
// sayGoodbye.call(person2);
// sayHello.apply(person1);
// sayGoodbye.apply(person2);

var checkNumericRange = function (value) { 
    if(typeof value !== 'number')
       return false;
    else 
       return value >= this.minium && value <= this.maximum;
 }
var range = { minium: 10 , maximum: 20};
var boundCheckNumericRange = checkNumericRange.bind(range);
var result = boundCheckNumericRange(12);
document.write(result + "<br/>");

// Curries
function add(a,b,c) { 
    return a+b+c;
}

document.write(add(1,2,3) + "<br/>");
function addCurries(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
document.write(addCurries(1)(2)(3) + "<br/>");
const ad1 = addCurries(1);
const ad2 = ad1(2);
const ad3 = ad2(4);

document.write(ad3 + "<br/>");

// Closures
function fOuter(){
    var x="Hello";
    function fInner(){
        x="World";
    }
    fInner();
    return x;
}
document.write(fOuter() + "<br/>");

var incrementor = function(){
    var a = 0;
    function b() { return 2;}
    return {
        inc: function() {
            return a++;
        }
    };
}()
document.write(incrementor.inc() + "<br/>");
document.write(incrementor.inc() + "<br/>");
// document.write(incrementor.a() + "<br/>");

//
var sayBye = function (name) {
    var text = 'Bye,' + name;
    return () => {
        document.write(text);
    }
}
sayBye('Me');
var calledMe = sayBye('Me');
calledMe();

class square{
    constructor(width) {
        this.width = width;
    }
    getArea() {
        document.write(`<br/> Square of this ${this.width * this.width}`);
        return this.width * this.width;
    }
}
class cube extends square {
    constructor(width) {
        super(width);
    }
    squareArea = this.getArea();
    getVolume(){
        document.write(`<br/> Volume of this ${this.square * this.width}`);
        return this.squareArea * this.width;
    }
}

var myCube = new cube(5);
myCube.getVolume();
// // Square
// function square(width) {
//     var squareObject = {};
//     squareObject.getArea = function(){
//         if (width > 0) return width*width;
//     }
//     return squareObject;
// }
// var myBox = square(5);
// document.write(myBox.getArea() + "<br/>")
// document.write(myBox.width + "<br/>")

// // Cube
// function cube(width) { 
//     var cubeObject = square(width);
//     var squareArea = cubeObject.getArea;
//     cubeObject.getVolume = function () {
//         if(width > 0) return squareArea() * width;     
//     }
//     cubeObject.getArea = function () {
//         if(width>0) return squareArea() * 6;
//     }
//     return cubeObject;
// }
// var myCube = cube(5);
// document.write(myCube.getArea() + "<br/>");
// document.write(myCube.getVolume() + "<br/>");