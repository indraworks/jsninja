//function constructor

//object literal adalah macam dict dipython ada
//

//cosntructor Person

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//kita buat  method di Person
//cara: namaConstrutornya."proptotype".namaMetodenya
Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};

//kita akan mmebuat property di Person
//cara :namaConstructor.prototype.namaProperties
//disini kit ataruh nama lastName mis valuenya adalah "Smith"
//disini jug akita taruh marriedStatus = true
//nah properties ini bisa di turunkan atau dipakai oleh isntance juga
//smua instance! sam adgn metode diatas!

Person.prototype.lastName = 'Smith';
Person.prototype.marriedStatus = true;

//ingat beda metode dgn propeties pada constructor/atau paretn class
//dijavascript jika metode adalah mrupakan function  maka propties adalaj
//metupakan property yg berisi nisai yg dimiliki oleh construcor/parent class
//propertis: isntansiate.namaProperties  //tidak ada braket tanda kurung!
//method:instasiate.namaMethod()

//instasiate object jhon
var jhon = new Person('jhon', 1990, 'Software Engineer');
var marry = new Person('marry', 1996, 'Actres');
var Ahmad = new Person('Ahmad', 1993, 'CivilEngineer');

//kit aakan gunakan metode dgn cara paggil melalui
//Instansiate.nama_method
jhon.calculateAge();
marry.calculateAge();
Ahmad.calculateAge();
console.log(jhon);

//kita gunakan properties dimana bisa diinheritance ke instansiate
//atau dgn katalain si object
console.log(jhon.lastName);
console.log(marry.lastName);
console.log(Ahmad.lastName);

/*
yg dipahami dari oop javascript e5 yg lama
yaitu prototyp baik metode dan proproties di buat disini 
      adalah supaya bisa di inherintance /diwariskan pada 
      class yg lain
      sbuah class adalah blurint buat instasiate atau obect
      dan dibuat dari constructor dimana construtor adalah
      mrupakan function Namafunction(param) {

      }

//instansiate
var isntasiate1 = new Namafunction(param);
nah blue print tadi didalam constructor dia bisa buat method
yaitu fucntion didalam constructor dimana nanti sama si isntasiate bisa dipanggil
ini yg dibseut dgn isntilah prototipe chain di dalam javascript

*/

/*
catatan utk explore tentang protoype dan proto
di console>ktik jhon 
>johon
hasil:
Person {name: "jhon", yearOfBirth: 1990, job: "Software Engineer"}
job: "Software Engineer"
name: "jhon"
yearOfBirth: 1990
__proto__:
calculateAge: ƒ ()
lastName: "Smith"
marriedStatus: true
constructor: ƒ (name, yearOfBirth, job)
__proto__: Object

ket diatas; jhon adalah mrupakan object daro Person dimana punya nilai
             properties:name,age,job
            dan jhon mwarisi/inhetitanceyaitu:
              nilai calculateAge (metod) ,
              dan mewarisi porptries: marriedStatus
                                      lastNmae
cara check apakah disini ownProperty (object yg dimilik jhon 
 atau diwarisi dari protp ( metod dan proptires yg dbuat oleh parentclass /cinstructor!)     
      )
>jhon.hasOwnProperty('job') //apakah job mrpakan propety milik jhon
>true

>jhon.hasOwnProperty('lastName')
>false
//kaena protry lastName adalah mili parentClass/constructor yg diturunkan pada smua 
//isntance yg tercetak di classParent ini /constructor ini 

>jhon instanceof Person
>true



//////Pengenalan Prototype chain /////
jadi prototype chain adalah merupakan wadah pusat dimana 
sudah disediakan oleh javascript dimana terdapat didalamnya 
metode dan property
contoh :
>var x=[2,4,6,8];
>console.info(x)
hasil:
>(4) [2, 4, 6, 8]
0: 2
1: 4
2: 6
3: 8
length: 4
__proto__: Array(0)  ---> ini smua metode dibawah brasal dari aray constructor propto
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
...dst
///keterangan diatas :terlhat bahwa array tadai punya proto aray yg teridir
dari berupa metode2 yg biasa di pakai oleh array2 yg nanti kita buat
jadi jelas ini disebut protochain yaitu bisa inherintacnce pada setiap array yg dibuat di
javascript!
proto__: Array(0)  ---> ini smua metode dibawah brasal dari aray constructor propto
                   --->ki amnyebutnya prototype chain
*/
