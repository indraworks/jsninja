/// INI PENTING DIPAHAMI TENTANG AROW FUNCTION
/// arary funcion adalah arrow function yg menggantikan hilangkan
/// kata function() {} jadi hanya tertulis tpat jkurung parameternya
//dab sebuah arrow dan ingat function ini adalah function expression ya !
// yaitu sebuah fungsi yg ada nilai kembaliannya  return!
// nah jika hanya ada sebuah parameter dan satu baris line code di function tersebut
//maka boleh tanda paranteses () dihilangkan dan juga blok program fungsi tersebut dihilangkan
//contoh :

//regular function simple
//kita tulis function asli /regular function!
function greeting(myname) {
  return `good morning' ${myname}`;
}
mygreet = greeting('indra');
console.log(mygreet);

/////// function arrow simple /////////
// greetingx = (myname) => {
//   return `good morning' ${myname}`;
// };

//kalau satubaris kata return bleh dihilangkan sbb code block {} boleh hilang :
greetingx = (myname) => `good morning' ${myname}`;

mygreetx = greetingx('lucian');
console.log(mygreetx);

////// CONTOH ARROW FUNCTION JIKA 2 PARAMEER DAN BUKAN SATU BARIS CODE BLOCK  /////////

//function regular asli :
function hitungBonus(gaji, mskj, tax) {
  let income = 0,
    bonus = 0;
  for (i = 0; i < gaji.length; i++) {
    income += income + gaji[i] * tax;
  }
  //console.log(income, 'income');
  return (bonus = (income * mskj) / 12);
}

mybonus = hitungBonus([12, 15, 13, 56, 13], 7, 0.25);
console.log('bonus yg saya dapat', mybonus);

//sekarang fungsi diats kita ubah menjadi arrow

hitungBonusx = (gaji, mskj, tax) => {
  let income = 0;
  let bonus = 0;

  for (i = 0; i < gaji.length; i++) {
    income += income + gaji[i] * tax;
  }
  //console.log(income, 'income');
  return (bonus = (income * mskj) / 12);
};

mybonusx = hitungBonusx([6, 8, 9, 12, 15, 13, 9], 8, 0.13);
console.log('bonus kedua yg saya dapat', mybonusx);
