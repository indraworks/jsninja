//good habit always put semicolon at the end of your code writeen
//alert('hello indra');

//variable es6
let age = 25;
let year = 2019;
console.log(age, year);
//jika kit amau ganti gak perlu tulis let lagi
age = 30;
console.log(age, year);

//penggunakan let dan const
//utk const gak bisa diubah krn konstana dan akan erro jika di uabh
const countSeragam = 180;
console.log(countSeragam);
//akan error jika di ganti //uncaught typeError
//countSeragam =12 //ini akan eror
//penting penggunaan camel case utk variable

/*
catatan data type yg ada di javascript
booelan :true or false
number:1,2.2.45,7.8,etc ( baik float or integer namanya number)
string: 'a','nama saya ,'dll semuanya ' 
undefined: sebuah variable yg belum di definisikan 
null : sebuah variable yg berisi null
object : merupakan komplek data structur literalm,aray ,date dll
symbol : digunakan bersama object
*/

///// string /////////

console.log('hello world');
let email = 'indra.works2019@gmail.com';
console.group(email);

let firstName = 'Indra';
let lastName = 'Suryawan';
let fullName = `${firstName} ${lastName}`; //cara es6
let fullName2 = firstName + ' ' + lastName; //cara lana
console.log(fullName);

//string ada punya fungsi dan jug ametode
//kalau fungsi adalah task yg mana perform /melkukan tugas yg speisifik
//kalau metode adalah bawaan dari object utk melakukan tugas( berada dlm class)
//memang mirip dan hampir sama tapi mesti kita bsisa bedakan

//mengambil cracter dari string
console.log(fullName[2]); //dimulai dari nol indexknya

//length of string ,sebuah properties dari string
console.log(fullName.length);
//methode string
//metode string banyak bisa dilihat di MDN
console.log(fullName.toLocaleUpperCase()); //metoe utk hasilkan huruf besar
//metode indexOf mencari nilai index sbuah cha dlm string
myIndex = console.log(email.indexOf('@')); //posis char tsb di 15

//slice
mySlice = fullName.slice(2, 5); //berhenti sblum index 5
console.log(mySlice);

//substr :hmpir sama dgn slice tapi start dan ambil brapa char
mySub = fullName.substr(2, 5); //start2,diambil 5 char
console.log(mySub);

//reolace ganti char dlm string

myReplace = email.replace('a', 'o');
console.log(myReplace);
