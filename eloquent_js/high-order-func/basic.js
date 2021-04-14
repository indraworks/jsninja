console.log('hello');
/*
abstractions :
jadi sperti kita tahu function itu passing parameter adalah sebuah valua atau variable
nah jina kit abuat dia yg dipasaing adalah bukan sebuah parameter vatiriabel tapi 
yg dipasing adalah sebuah function dan diekbalikan sebagai sbuah nilai 
return dari paremter yg dipanggi itu 
tentungya kit adapat nilai dari hasil funcsi tadi dan hasil nila tersbeut dipass
dan dkeskusi difungsi sekarang 
dan hasil funciton sekarang di kembalikan kesebuah nilai 
ABSTRCT REPETION 
Abstracting repetition
Plain functions, as we’ve seen them so far, are a good way to build abstractions.
But sometimes they fall short.
It is common for a program to do something a given number of times. You
can write a for loop for that, like this:

for(let i=0;i<10;i++) {
    console.log(i)
}

kita aabstract :"please do something reapt 5 times"
kit abuat function N times
 function (N) {
     for(let i=0;i<N;i++) {
    console.log(i)
}
 }

*/

function repeat(N) {
  for (let i = 0; i < N; i++) {
    console.log(i);
  }
}
repeat(5);

//kita bisa buat fngsi diatas lebih univeral lagi yaitu ,tidak hanya tampilkan
//bebrapa kali repetaion tapi kita bisa buat parameter passing adalah function
//yang mana sebarang function tergantung apa function yg masuk dari argment
//jadi paramter ke-2 setelah N adalah senuah function yg dimasukan utk
//melakukan action sebuat saja parameternya ke 2 kita tuilis action

function repeatDo(N, action) {
  for (let i = 0; i < N; i++) {
    action(i);
  }
}

//sekarang kita akan panggil fungsi itu sekaligus
//kit amau lakukan peritnah push utk isis sebuah aarray

let mybil = [];

function doPush(x) {
  mybil.push(x);
  console.log(`masuk array ${x} :`);
}
repeatDo(6, doPush);
console.log(mybil);

/*
kesmpulan diatas dan hasil terlihat sbb:
masuk array 0 :
basic.js:58 masuk array 1 :
basic.js:58 masuk array 2 :
basic.js:58 masuk array 3 :
basic.js:58 masuk array 4 :
basic.js:58 masuk array 5 :
basic.js:61 (6) [0, 1, 2, 3, 4, 5]
jadi kit apaham sekarang hig order function basicnya :))
*/
//nah kita bisa lakukan singkat utk tulis dalam 1 kalang function

repeatDo(6, (i) => {
  mybil.push(i);
  console.log(`masuk array func2 ${i}:`);
});
//contoh lagi
repeatDo(9, (i) => {
  console.log(`${1} saya makan dan minum `); //akan terulis counter sya makan dan minum sbmyak 9 x
});

//lanjutan high oder funciton
