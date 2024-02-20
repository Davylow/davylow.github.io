const a = 100;
const result = (a < 1000) ? "Nhỏ hơn 1000" : "Lón hơn hoặc bằng 1000";
console.log(result);

const var1 = 100
const var2 = var1 || "";
console.log(var2);

let x, y, z = 3;
const isTurnOn = true;
if (isTurnOn){
    console.log("Turn On")
}

const sampleArr = [1, 2, 3, 4, 5];
for (let item in sampleArr){
    console.log(item);
}

// for (let i=0; i< 1e5; i++) {
//     console.log(i)
// }

const b=1, c=2;
const obj = {b,c};
console.log(obj)

const list = [0, 1, 2, 3, 4, 5]
const name = 'Thanh';

sayHello = name => console.log('Hello', name);
setTimeout(() => console.log('Loaded', 2000));
list.forEach(item => console.log(item));
sayHello(name)
const getValue = ratio => ratio * 6.9;
console.log(getValue(2))

const getValue1 = (a, b = 3, c= 4) => (a * b + c);
console.log(getValue1(2))
const first = "Zz";
const last = "zZ";
const welcome = `You have logged in as ${first} ${last} .`;
console.log(welcome)

const lorem = `Lorem ipsum dplor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.`
console.log(lorem)

const odd = [1, 3, 5];
const nums = [2, ...odd, 4, 6]
console.log(nums)

const arr = [1, 2, 3, 4];
const arr2 = [...arr];
console.log(arr2)

let param1;
const mandatory = () => { throw new Error('Thieu tham so!'); }
const sample = (param1 = mandatory()) => param1
console.log(sample)

const employees = [
    { name: 'Emp A', age: 25 },
    { name: 'Emp B', age: 28},
    { name: 'Emp C', age: 35}
]
const names = 'Emp A'
emp = employees.find(item => item.name === names)
console.log(emp)

const rule = {
    firstName: {
        required:true
    },
    lastName: {
        required:true
    }
}

const validate = (rule, values) => {
    for(prop in rule) {
        if(rule[prop].required) {
            if(!values[prop]) {
                return false;
            }
        }
    }
    return true;
}

console.log(validate(rule, {firstName:'Duy'}));
console.log(validate(rule, {firstName:'Duy', lastName:'Buffet'}));

console.log(~~6.9 === 6)