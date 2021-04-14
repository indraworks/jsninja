//pertama kita buat dulu asal mula async
//dengan mbuat contoh syncronus
//note arrow func adalah referrrence function
//setTimeOut adalah function javascript yg dimasukin argmentt /passing parameternya adalah
//sebuah function
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals

//1)example settimeout
//rumus setTimeout(fn,interval ) disini interval bisa 1000,2000 1000 = 1s
//fn adalah function() {} // terserah mau isinya printout brupa console atau fungsi matematik

// let myGreeting = setTimeout(function () {
//   alert('Hello, Mr. Universe!');
// }, 4000);

//PENTING SEKALI SYNTAX DARI SETTIMEOUT set timeout :
/*
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

1)var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
2)var timeoutID = scope.setTimeout(function[, delay]);
3)var timeoutID = scope.setTimeout(code[, delay]);

BIASAYNYA YG PERTAMAN BANYAK DIPAKAI UTK PASSING ARGUMEN mnah argument arg1 INI BISA SAJADI 
MERUPAKAN sebuah Fungsi sebelumnya!!
contohnya sbb: simak perhatikan!

function sayHi(who) {
  alert(`Hello ${who}!`);
}

Now, you can pass the name of the person into the setTimeout() call as a third parameter:
let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');


*/

function sayHi(who) {
  alert(`Hello ${who}!`);
}

//Now, you can pass the name of the person into the setTimeout() call as a third parameter:
let myGreeting = setTimeout(sayHi, 3000, 'Mr. Universe');

myGreeting; //stlah 3 detik keluar alertnya

// console.log('muncul setelah 4 detik tulisan dibawah ini ');
// console.log(myGreeting);
// console.log('      ');
//2)sekarang kita coba sample syncronus javascript :

// const secondFunc = function () {
//   console.log('hi there aim the second');
// };

// const firstFunc = function () {
//   console.log('hi there ,iam the first');
//   secondFunc();
//   console.log('the end');
// };

// firstFunc();

// 3)coba aysncronus javascript
//sekarang kita masukan fungsi interfal settimeout
//sekalian kit againti functuion dgn arrow functuon pngganti referene fucntion
//fn = ()=>{}

console.log(' ');
console.log(' ');
console.log(' ');

const secondFuncx = () => {
  setTimeout(() => {
    console.log('hi there iam async after 5 second');
  }, 4000);
};

const firstFuncx = () => {
  console.log('hi iam the first');
  secondFuncx();
  console.log('ended of contoh async');
};

firstFuncx();
//hasil:
/*
i iam the first
async.js:51 ended of contoh async
async.js:44 hi there iam async after 5 second

//note:dari urutan jelas bahwa stlah first ,kmudian second stlah funcsi seond 
//maka jvasctip trun ke stack slanjutnya pritn ended of conth sync
//stlah intercal slai maka jscript lanjutkan print sencond
//ini disebut async interval sbab timer ini adalah pihak dliuar js program yg sdang jalan
*/

//PRINSIP ASYNC ADALAH :
/*
 // sebuah function callback function yg melayani kerja di background
 //jadi selama proses sudah dlluar program utama ,program utama teruskan
 //ekskusi 
 //pasing ke callback function ,jadi ininon blocking 
 //sebab jalan itu callback funtion eksukis sd time intercal selsai
 ..semntara program utma jalan eskusi stack per stack

syntax
*/
