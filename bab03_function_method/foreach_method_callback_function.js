/*
fakta tentang fungsi 
fungsi aadlah instan dari sebuah object
fungsi berlaku sperto object
kita dapat store fungsi kdlaam variable //reference function
kita dapat passing sebuah  fungsi sebagai argumen kedalam fungsi lain s
kita dapa kembalikan sbuah fungsi dalam bentuk fungsi

*/
//contaoh paling mudah callback funtion hitung umur
//

personUmur = [1990, 1987, 1994, 1973, 1969, 1988];

function hitungUmur(arrayTahun, mycalc) {
  //<-- parameter

  let arrayKu = [];
  for (i = 0; i < arrayTahun.length; i++) {
    arrayKu.push(mycalc(arrayTahun[i]));
  }
  return arrayKu;
}

//fungtion callback
selisih = (X) => {
  return 2020 - X;
};

//panggilfungsi sebagai argument utk passing

hitungUmur(personUmur, selisih);

console.log(hitungUmur(personUmur, selisih));

//contoh lebih sederhanna saja tampilkan angka atau nama

function tampilNama(mystr, myfunc) {
  //<---parameter passing
  return myfunc(mystr);
}

//callback function

const printNama = (z) => {
  return console.log(`hai saya dari callback name :${z}`);
};

//panggil argument melalui fungsi

tampilNama('basuki', printNama);

//penggunaan metode foreach adalah mewakili kalang loop for i

let person = ['arie', 'lucky', 'alya', 'sastra', 'andrea', 'fikri'];

person.forEach(function () {
  console.log('hello'); //dari sini terlihat di console hello trpeitn sbnyaka 6x
});
//dari sini diketakhui foreacah menghiung julan element dan meloopnya
//jika pakai console maka diprint apa yg mau diprin di console

//coba kita ganti function jadi arrwo function
person.forEach(() => {
  //ganti functuonnya trus buat tanda parantases +=>{}
  //jangan lupa return jia banyak baris
  console.log('aku arrow function'); //akan terctak arrow function X6
});

//nah skrg jika elementnya kit aprint gak masalah
//isi parameter call back boleh macam2 nama siljakan saya pilih nama item

person.forEach((item) => {
  console.log(item); //akam terprint eleement person semuanya karna foereach ngeloop element
});
