//gra b tag p

//let myP = document.querySelector('p');
// if (myP.classList.length == 0) {
//   //jika blum ada class maka tambahkan class error
//   myP.classList.add('error');
// }
// //cotnoh tambahkan class2 lain
// myP.classList.add('success');

//soal 2:
//check smua p dong textContent

let myallP = document.querySelectorAll('p');
myallP.forEach((item) => {
  if (item.textContent.includes('error')) {
    item.classList.add('error');
  }
  if (item.textContent.includes('success')) {
    item.classList.add('success');
  }
});
//kita juga bisa memakai toggle utk opn close pilihan
//secara langsung classList.toggle('nama_classnya') contoh
//dibawha ini kita mau select class title yg ada tulisan dom kmudian
//kita mau tambah class new_bold dan hapu s class dgn toggle
const title = document.querySelector('.title');
title.classList.toggle('murung'); //add class murung
title.classList.toggle('murung'); //remove class murung
//kesimpulan ada 3 cara metode di classList :add,remove,toggle
