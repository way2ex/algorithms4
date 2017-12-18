// let arr = new Array(1000000);

// console.time('every');
// arr.every(item => {
//     item = '3';
// });
// console.timeEnd('every');

// console.time('for');
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = '2';
// }
// console.timeEnd('for');

// console.time('forEach');
// arr.forEach(item => {
//     item = '3';
// });
// console.timeEnd('forEach');

// console.time('forof');
// for (let item of arr) {
//     item = '2';
// }
// console.timeEnd('forof');

// console.time('forin');
// for (let item in arr) {
//     item = '4';
// }
// console.timeEnd('forin');

var array = [];
array.length = 100000000;
console.time('for')
for(var i=0,length=array.length;i<length;i++){
 array[i] = 'hi';
}
console.timeEnd('for');

var array2 = [];
array2.length = 100000000;
console.time('for2')
for(var i=0;i<array2.length;i++){
 array2[i] = 'hi';
}
console.timeEnd('for2');

// var array3 = []; array3.length = 10000000;
// console.time('map');
// array3.map(item => {
//     item = '3';
// });
// console.timeEnd('map');

// var array4 = []; array4.length = 10000000;
// console.time('for-of');
// for (let item of array4) {
//     item = '4';
// }
// console.timeEnd('for-of');

// var array5 = []; array5.length = 10000000;
// console.time('forEach');
// for (let item of array5) {
//     item = '4';
// }
// console.timeEnd('forEach');
// VM4122:7 for: 87.2509765625ms
// console.time('aa');
// (function() {
// 	var arr3 = []; arr3.length = 10000000;
// 	for(var i=0,length=arr3.length;i<length;i++){
//          arr3[i] = 'hi';
//         }
// })();
// console.timeEnd('aa');