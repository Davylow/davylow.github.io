// const checkSole = num => {
//     return num % 2 === 1;
// }
// console.log(checkSole(3))

// var sachs = [
//     {
//         tacGia: 'Harper Lee',
//         tieuDe: 'To Kill a Mockingbird',
//         namXuatBan: '2020',
//         trangthai: true
//     },
//     {
//         tacGia: 'Ray Bradbury',
//         tieuDe: 'Fahrenheit 451',
//         namXuatBan: '2022',
//         trangthai: false
//     }
// ]
// console.log(sachs[0].tacGia,',', sachs[0].tieuDe,',',sachs[0].namXuatBan,',',sachs[0].trangthai)
// console.log(sachs[1].tacGia,',', sachs[1].tieuDe,',',sachs[1].namXuatBan,',', sachs[1].trangthai)
// for let sach in sachs(){

// }

let i =0
const checkMang = () => {
    const arrDemo = [2, 3, 4, 5]
    let min = arrDemo[0];
    let max = arrDemo[0];
    for(let i in arrDemo){
    // for (let i=0; i < arrDemo.length; i++){
        if(min > arrDemo[i])
        {
            min = arrDemo[i];
        }
        if(max < arrDemo[i]){
            max = arrDemo[i];
        }
    }
    return console.log(max, min)
}
checkMang()

function plus(){
    var res = 0;
    for(var i in arguments){
        res += arguments[i]
    }
    return res;
}

console.log(plus(2,2,2,2,2,2,))