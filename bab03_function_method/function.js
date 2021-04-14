//funcgsi di js adalah nama name_function() {}
//manggilnya name_function()  yaitu dgn

//fungsi declaration
function myDEC() {
  console.log('hello ini function declaration');
}

myDEC();
myDEC();

//funcgsi expresion

//Tentang Hoisting ingat penting sekali!
/*
function declaration bisa di taruh dibawah  statement pemanggil dan juga diatas statement 
pemanggilan gak masalah !
TAPI utk function  expression TIDAK BISA ditaruh dibawah statement dia selalu diatas 
statement 

let a = function() {

}; //haru ada ; utk functio expressio

//statement ada dibawah manggil dgn sebuat variablenya +parentheses ()
a() //memanggil fungsi 

*/

//// 2. ARGUMENT  & PARAMETER /////////////
// didalam function ada 2 yaitu argument nah argument adalah nilai atau sbuah nilai dari variable permanggi
// parameter adalah sebuah variable yang ada di function concohnya sbb

function SayHai(name) {
  //name disebut parameter(local)
  console.log(`hello my friend ,your name is :${name}`);
}

//dibawah ini nilai dari variable pemanggil disebut argument, jadi 'indra adalaj argumentnya :D

SayHai('indra');

// 2b nilai argument jug aberurutan dan parameter dlm funbgsi jug aberurutan contoh
function GoodSay(name, time, address) {
  console.log(
    `Good ${time},hi all friend my name is ${name},iam living in ${address}`
  );
}

GoodSay('indra', 'Morning', 'malang-sawojajar'); //jadi slelalu urut a1,a2,a3 ==> p1,p2,p3 9argument1,2,3 -->param1,2,3....

/// 2c.nilai default parameter bisa dipasang jika argument tidak dipasang nilainya pada pemanggil fungsi sbb:
//jika pemanggil fungsi tidak pasang argument alias nul utk itu antisipasi dgn pasanng nilai default parameter
//contoh:
function calcArea(nil1 = 5, nil2 = 30) {
  let result = nil1 * nil2;
  console.log(`hasil luas bidang tanah adalah :${result}`);
}

console.log(calcArea()); //150 jika tidak ditulis apa2
console.log(calcArea(9)); //hasil 270 karena nil1 ditimpa nilai baru =9 dan nil2 tetap tak berubah
console.log(calcArea(2, 5)); //hasil adalah 10 karena 2 2 nilai parameter ditimpa

//// RETURN VALUE jadi sbuah fungsi bis areturn value jika fungsi itu adalah  FUNGSI EXPRESTION

//biasanya kit atulis fungsi log out misal sprti perklaia dibawah ini langung ngepring
//tapi kit amau kembalikan dulu hasilnya tanpa di logut tampung di variable

function myName(nil1 = 3, nil2 = 6) {
  let a = nil1 * nil2;
  console.log(`hasil perkalian ${nil1}*${nil2} = ${a}`);
}

myName(6, 7);

//kita mau kembalikan nilainya dulu tampung di variable

//contoh

function LuasLingkaran(jari) {
  let luas = 3.14 * jari ** 2;
  return luas;
}

LuasLingkaran(6); //ini gak keluar haru sadatampung variable

let myLuas = LuasLingkaran(9.8);

console.log(`luas lingnkaran = ${Math.floor(myLuas)}`);
