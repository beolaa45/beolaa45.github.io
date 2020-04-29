/* Bài 1. Viết funciton printTriangle(height), với height là số integer > 2, in ra màn hình 1 hình tam giác vuông cân có chiều cao height. Ví dụ: 

// Với n = 4
*
* *
* * *
* * * *      */

// function printTriangle(n) {
    
//     var str = '';

//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){

//             if(j <= i){
//                 str += ' * '
//             }else {
//                 str += ' '
//             }
//         }
//         str += '<br>'
//     }
//     return str
// }

// document.write(printTriangle(4));

// Bài 2. Viết function printEmptyRectangle(width, height), với width và height là 2 số integer > 3,
// in ra một hình chữ nhật rỗng có kích thước width x height. Ví dụ: 

// // Với a = 5, b = 3
// * * * * *
// *       *
// * * * * *

// function printEmptyRectangle(a, b){
//  let str = ''

//     for(let i = 0; i < a; i++){

//         for(let j = 0 ; j < b; j++){

//             if(i > 0 && i < (a -1) && j > 0 && j < b-1) {
//                 str += '&nbsp;&nbsp; '
//             }else{
//                 str += ' * '
//             }
//         }
//         str += '<br>'
//     }
//     console.log(str)
//     return str
    
// }

// document.write(printEmptyRectangle(3,5));

// // Bài 3. Viết function printSpecialTriangle(height), với height là số integer > 1, 
// //in ra hình tam giác cân ngược với chiều cao bằng height. Ví dụ: 

// // // Với n = 3
// // * * * * *
// //   * * *
// //     *
// // i=0; j=0
// // i=1; j>= 0+i; j<a-i

// function printSpecialTriangle(a){
//     let str = '';

//     for(let i = 0; i < a; i++){
//         for(let j = 0; j < (a*2 -1); j++){

//             if( j >= 0 + i && j <= (a*2 -1) - 1 - i ){
//                 str += ' * '
//             }else{
//                 str += ' &nbsp;&nbsp; '
//             }
//         }
//         str += '</br>'
//     }
//     console.log(str)
//     return str;
// }

// document.write(printSpecialTriangle(3))

// // Bài 4. Viết function printX(height), với height là số integer > 4 và là số lẻ, in ra hình chữ X có chiều cao bằng height. Ví dụ: 

// // // Với n = 5
// // *       *
// //   *   *
// //     *
// //   *   *
// // *       *
// // i=0; j=5;
// // i=1; j=0+i; j= a-i-1

// function printX(a) {

//     let str = '';
//     for(let i = 0; i < a; i++){
//         for(let j = 0; j < a; j++){

//             if(j === 0 + i || j === a - 1 -i ){
//                 str += ' * '
//             }else {
//                 str += ' &nbsp;&nbsp; '
//             }
//         }
//         str += '<br>'
//     }
//     return str;
// }

// document.write(printX(5))


// Bài 5. Viết function printButterfly(height), với height là số integer > 4 và là số lẻ, in ra hình con bướm có chiều cao bằng height. Ví dụ: 

// // Với n = 5
// *       *
// * *   * *
// * * * * *
// * *   * *
// *       *
// j = i + 1; j = a -1 - (i+1)
//i =3; j= 
// function printButterfly(a){
//     let str = ''
//     for(let i = 0; i < a; i++){
//         for(let j = 0; j < a; j++){

//             if()
//         }
//     }
// }

