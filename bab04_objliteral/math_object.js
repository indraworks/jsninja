/// apa itu math object ?sblumnya kit asudah baha sarray obejct dan bagaiman aksesnya
//dalam sbuah object melalui metode (gfunction regular bukan arrow)
//object math snediri didalanm javascript sangat banyak contentnya
//dimulain dari kosntana macam2 konstanta matematik, fungsin2nya sendiri dan metodenya
//sbb:
console.log(Math);
//hasil sbagian saja biar tak terlau panjang:
/* 
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan: ƒ atan()
atan2: ƒ atan2()
atanh: ƒ atanh()
cbrt: ƒ cbrt()

*/
//coba utk pi
console.log(Math.PI); //tidak pakai PI() krn bukan funcion =3.14...
//contoh coba funtion acosh
console.log(Math.acosh(45)); //4.49

//kita gunakan onject Math cntoh yg dibahas yg sering dipakai (round,
//floor( cetak pembulatan kebawah ),
console.log(Math.floor(5.6)); // hasil 5

//ceil cetak pembulatan keatas,
console.log(Math.ceil(7.4)); //tercetak  8
//trunc membuat desimal jadi integer
console.log(Math.trunc(9.67)); //hasil bulat integer
console.log(Math.trunc(32.65)); //hasil bulat integer
//yg paling sering dipakai adaa]lah function random -->random adalaj
//adalah bilangan desimal yg random trus antara 0 sd 1
//jika kita mau menggunakan object Math random  antara 1 sd 100 maka kita kalikan random tadi sbb
console.log(Math.random()); // hasil tiap di refreseh conosole selalu berubah ( inisial origin 0 sd 1)
console.log(Math.random() * 100); //random dikali 100 jika 1-100 bilangan random yg akan ditampilkan
