/**
 *  tentang object di java script adalah beberda dgn bahas asprti java,python c++
 *  ja gnakan prototype sbagai object
 * jadi smua adalah objetc  dgn object ikit atahu sndri dapat utk memanipulasi
 * satu adat beberatapa property dan metode di tempat lain( pwewarisan)
 * didalam js pwwarisan atau inherinance bisa dilalkukan setelah membuat sbuah insance
 *jadi dibuat constructor dulu ,stlahnya baru buat instacne variable2 baru 
 dan bisa  diturunkan sifa2 dari konstuktor tadi yaitu metode atau property
 *
 *
 *
 */

// berikut penjelasannya
//ini adalah  object yg dibuat dgn cara membuat constructor atau blue print
//dibawah ini disebut funvtion COnstructor
//huruf besar nama dfunctionya dan yg dibuat adalah object
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

//bagian 1 cara buat object Instance dgn Construtor
//bisa dgn cara ini function constructor dimasukan ke variable
var Person = function (name, yearOfBirth, job) {
  (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
};
//semua proptotype yg dibuat di constructor
//adalah agar bisa di acees oleh object instance

//kita buat fungsi  calcualateAge dgn prototype
Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};

//kibta buat metode lastName = "Simith"
Person.prototype.lastName = 'Suryawan';

//sekatang kita akan buat object2 instancenya

var jhon = new Person('Herry', 1998, 'Lecture');

//kemudian kit abisa mengakses property dari jhon
//antara lain alculateAge dan

jhon.calculateAge();
jhon.lastName;
console.log(jhon.calculateAge()); //ini funcio ada kurungnya
console.log(jhon.lastName); //ini propreties

//kit abuat instance lagi

var Sampson = new Person('sampson', 1992, 'retired');
var Abdul = new Person('Abdul', 1983, 'Contractor');

console.log(Sampson.calculateAge());
console.log(Abdul.calculateAge());

//atau kita bisa tulis constructor sprti ini biar gak bingung

function Siswa(name, age, kelas, hoby) {
  (this.name = name),
    (this.age = age),
    (this.kelas = kelas),
    (this.hoby = hoby);
}

//instacne protoryte tahun kelahiran
Siswa.prototype.tahunKelahiran = function () {
  console.log(2020 - this.age);
};

var siswaSatu = new Siswa('Andri', 17, 3, 'makan padang');

// siswaSatu.proptype.tahunLahir = function () {
//   console.log(2020 - this.age);
// };
console.log(siswaSatu.tahunKelahiran());
//console.log(siswaSatu.tahunLahir());
//bagian 2 ObjectCreate
//adalah bagaiaman object di create yg ertama dgn function construor
//yg bagian 2 ini kita buat instacne obect dari Object.create

//kalau create Object ki tabuat variable  objProte yg berisi function /metode yang  nantinya dipakai sama2 sbgai
//proptype inheriance dari masing2 object instance
//karena masing2 object nstance /yg dibuat sudah mewarisi otomasti  dari variable protoro( fungsi didalamnya) ini
//gunamakan camel tidak huruf besar karna funsi biasa
var objPegawaiProto = {
  lamaKerja: function () {
    //kit apakai console.log  kalau biasa paka return
    console.log(2020 - this.tahunMasuk);
  },
};

//kitabuat sekarang
var pegawaiSatu = Object.create(objPegawaiProto); //pegawai satu dapat pewarisan prototype dari objPEgawaiProto
//sekarang buat instancenya
pegawaiSatu.name = 'Luna';
pegawaiSatu.tahunMasuk = 2015;
pegawaiSatu.job = 'Engineer';

console.log(pegawaiSatu);
console.log(pegawaiSatu.lamaKerja()); //hasil 5 artinya 5 tahun

//dari 2 cara diatas kita memakai paling gampang diingat adalah function COnstructor!!!

//// PRIMITIVES VS OBJJECT //////
//kit atahu data primitive adalah booean,number,string selain dari object

//primitive
var a = 23;
var b = a;
a = 46;
console.log(a); //a skrg =46
console.log(b); //b skrg tetap 23 karena bukan memaory adress yg dicopy

//object

var obj1 = {
  name: 'Jhon',
  age: 25,
};
var obj2 = obj1; // kita copy obj1 ke obj2
obj1.age = 62;
console.log('object :');
console.log(obj1.age);
console.log(obj2.age);
//terlihat hasil obj1.age = obj2.age = 62 sebab
//yg di copy oleh obj adlah adress memory jadi object beda dgn primitive ya

/// TENTANG FUNCTION DI JS //////
//FAKTA2 TENTANG FUNCTION
/**
 * dalam js:
 * A functon is instance of the object type
 * fungsi adalah instance dari sebuah type object
 * a functuion behave like amyother object
 * fungsi berlaku sama sprti object lainya dlm js
 * we can stroe function in variable
 * kita bisa store fungsi kedalam sbuah variable
 * kita pass fungsi sbgai sbuah argument dalam  fungsi atau fungsi yg lain
 * we can renturn function from other function
 * kit abisa kembalikan gunsi dalam sbuah function
 *
 * **/

// PASSING FUNCTION AS ARGUMENT
//jadi kit akan masukan sebuah array dan juga fungsi yg mengkalkulasi array tadi sebagai paramter dan hasilny adisimpan diarray
//nah fungsi ini Fungsi(array,function())  ada function didalamnya ,nah function didalanmya sbgai argument pasing paramater disebut
//call back function sebab hasil suluruh Fungsi tadi di masukan dalam variable
//makanya fungsi didalam fungsi tadi disebut callback function artinya fungsi yg memanggil sebuah fungsi
//utk lebih jelasnya sbb:

//kita akan buat sbuah fungsi yg sisnya aarray yg dipasing  dan fungsi utk calculasi array yg masuk

var years = [1976, 2003, 2018, 1990, 1979];

function myfinalCalc(myarr, mycalc) {
  let tampArray = [];

  for (var i = 0; i < myarr.length; i++) {
    tampArray.push(mycalc(myarr[i]));
  }
  return tampArray;
}

//fungsi menghitung usia
function calculateMyAge(n) {
  return 2020 - n;
}

//fungsi check apa sudah > 18 th
function isageAdult(z) {
  return 2020 - z > 18;
}

//fungsi hitung denyut nadi ,bisa kita jadikan int from float

function checkHearRate(v) {
  if (v >= 18 && v < 81) {
    return Math.round(206.9 - 0.67 * v);
  } else {
    return -1;
  }
  return;
}

var finalResult = myfinalCalc(years, calculateMyAge); //disini karena call back function maka  disini
// calculateMyAge TIDAK DITULIS calculateMyAge() karena kita akan lewatkan kembalianya pada final result!
//calucaltemYAge dsebut callback function  dimana fungsi ini adalah sbgai argument dalam sbuah fungsi
//hanya ditaruh namnay saja dan kerjakan aarray item argument yg dipasing
//dan hasilnya di taruh di final variable
console.log(finalResult);

//utk fungsi check 18th > ?
var isAdultAlready = myfinalCalc(years, isageAdult);
console.log(isAdultAlready);

//check fungsi jangtung
var isheartHealt = myfinalCalc(years, checkHearRate);
console.log(isheartHealt);

//SOAL 2
//supaya k]lancar buatlah tiga argument 2 aarray ,1 call back fungtion
//fungsi utama bertugas utk data tahun masuk aray_pegawai, dan callback fungsiton yg isinya
//adalah calculasi jika  5<= x <= 10 tahun bonus 10% dari gajipokok
//jika x <5  5% dari gaji pokok
//jika x>10
//jika else maka tak dapat bonus

let mytahunMasuk = [2000, 2002, 1998, 2019, 2015, 2012, 2019];
let pokok = 3000000;

function finalTHR(arr, bonus) {
  var resultArray = [];
  for (i = 0; i < arr.length; i++) {
    resultArray.push(bonus(arr[i]));
  }
  return resultArray;
}

function calcBonus(y) {
  var j = 2020 - y;
  var finalGaji = 3000000;
  if (j > 5) {
    finalGaji = finalGaji + finalGaji * 0.5;
  } else {
    finalGaji = finalGaji + finalGaji * 0.2;
  }
  return finalGaji;
}

var myTHR = finalTHR(mytahunMasuk, calcBonus);
console.log(myTHR);
