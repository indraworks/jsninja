//obhect create
//dibawah ini nama variable hruf kecil
//ini dibuat object literal dimana
/*
personproto adalah object dimana 
key calulateAge mrupakan variable function tuk hitung tahun
*/

var personProto = {
  calculateAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};
//cara instansiate adalah
//melwatkan object literal tadi lwat
//comand "Object.create(param)" param~personProto
//stlahnya manual buat properties di instansiate/objetnya
var jhon = Object.create(personProto);
jhon.name = 'John';
jhon.yearOfBirth = 1990;
jhon.job = 'Software Engineer';

var marry = Object.create(personProto);
marry.name = 'Marry';
marry.yearOfBirth = 1993;
marry.job = 'Civil Engineer';

//cara lain isi proprties di object instaisate
var jane = Object.create(personProto, {
  name: { value: 'jane' },
  yearOfBirth: { value: 1998 },
  job: { value: 'sales marketing' },
});
/*
hasil diatas ,pada console:
jane
{name: "jane", yearOfBirth: 1998, job: "sales marketing"}
marry
{name: "Marry", yearOfBirth: 1993, job: "Civil Engineer"}
jhon
{name: "John", yearOfBirth: 1990, job: "Software Engineer"}


*/

//catatan:
// kita suah ada contoh bagaimana mmbuat
//create object atau isntance dgn construtor di js
//nah skrgn kita buat dgn cara create object
//caranya dibuat dulu onject literalnya ,stlah itu
//object lietral di pasing sgain argument
//stlahnya isntance yg bdibuat tadi kit aberi porpoerites2
//jadi ini direct dari propetirs proto

////////kesimpulan
/*
aa dua alteranfit fbuat object
1.dgn construtor,tinggal pasing value sbgai arguument 
   metode dan propteris dibyat terpisah tidak diinstance
   tai instance mewawiris metod dan propetirs tai.
   
2.dgn create object dan pasing object literalnya 
  baru buat properties di isntalsiate yg udah di create tadi


*/
