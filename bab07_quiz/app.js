//

const myform = document.querySelector('.quiz-form');

const jawabanQuiz = ['B', 'B', 'B', 'B'];
const result = document.querySelector('.result');

myform.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0;
  const jawabanUser = [
    myform.q1.value,
    myform.q2.value,
    myform.q3.value,
    myform.q4.value,
  ];
  jawabanQuiz.forEach((item, index) => {
    console.log(item);
    console.log(jawabanUser[index]);
    if (item === jawabanUser[index]) {
      score += 25;
    }
  });
  //buat scroll keatas boleh tulis winow.scrollto atau tidak

  //kit agunakan setTimeOut utk kasih jeda 3 detik baru croll keatas
  // setTimeout(() => {
  //   alert('hello boy'), 3000;
  // });

  window.scrollTo(0, 0); //utk menuju keatas
  result.classList.remove('d-none');
  //console.log(`nilai jawaban = ${score}`);
  // result.querySelector('span').textContent = `${score}%`; kita buat step2 increase
  //denga cara interval
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
      console.log(output++);
    }
  }, 50);
});

//kalau mau cari lagi anaknaya si result
//maka dgn query selector dibawahnya !

////////////////LATIHAN ///////////////////////

// let fruits = ['apple', 'orange', 'cherry'];

// fruits.forEach(myFunc);

// function myFunc(item, index) {
//   console.log(` item =${item} ; index =${index} `);
// }

// //es6
// console.log('es 6 away :');
// fruits.forEach((item, index) => {
//   console.log(` item =${item} ; index =${index}`);
// });

// let kunciQuiz = ['A', 'B', 'A', 'C', 'C', 'D', 'B', 'C', 'C', 'A'];

// let jawabQuiz = ['C', 'C', 'C', 'D', 'C', 'D', 'B', 'C', 'C', 'A'];

// function x(namaArray) {
//   let score = [0, 0];
//   let i = 0;
//   let s = 0;
//   for (indek in namaArray) {
//     //console.log(`${namaArray[indek]}`);
//     if (kunciQuiz[indek] === jawabQuiz[indek]) {
//       i += 10;
//     } else {
//       s += 10;
//     }
//     score[0] = i;
//     score[1] = s;
//   }
//   return score;
// }

// let hasil = x(kunciQuiz);
// console.log(`hasil ujian  = ${hasil}`);

/* WINDOW OBJECT SCrOLL
ngetes di console test aja 
ketik window
window.outerWidth dgn outerWidtg saja itu sama 
window.outerwidth(0 // utk cari ukur besaran nilai bidang page 
tetang widnow object utk window karena sifatnya global gak perlu ditulis 
biasayna pakai window contoh 
widnow.console.log(dkshdshfdsjfh) krn sifat global dan utk metode dan property maka hanya 
diltulisconsole.log saja
contoh document .querySElector( fdsfs) krn sifat utk metode dan globlam 
maka ditulis hanya utk doucment .query selector saja
nah ita mau sescrolll 
utk buat supaya ke scroll maka metode scroll to butuh waktu interval sekita 3 detik tuk keatas

*/
