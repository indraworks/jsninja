//kita belajar tentang obj  literal
//let objname : {} //ini cara buat obj
// let myararyaname :[arry1,arry2,number,bollean ,dst] ini adalah array

let user = {
  name: 'crystal',
  age: 30,
  email: 'elemanko.crystal@gmail.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to enjoy life'],
  //kita pasang metode yaitu fucntion didalam object literal
  newspaper: ['bali-post', 'jawa-pos', 'kompas', 'cnn-news', 'jakarta-post'],

  login: function () {
    console.log('iam login now!');
  },
  //kit abuat logout metode
  logout: function () {
    console.log('iam logout already !');
  },
  logBlogs: function () {
    console.log(this.blogs[0]);
  },
  knowThis: function () {
    console.log(this);
  },
  jangaPakaiArrow: () => {
    console.log(this);
  },
  lognewsPaper: function () {
    console.log('this is all of news paper that read by User:');
    this.newspaper.forEach((paper) => {
      console.log(paper);
    });
  },
  // lognewsPaper:function () {} bisa di singkat penulisannya langsung jadi lognewsPaper() {}
  // disebut shrthand regular function
};
//acess namanya user
console.log(user.name);
//acess blognya user
console.log(user.blogs[1]); //10 thing enjoy life

//ganti access email
console.log(user.email);
//ganti emailnya
user.email = 'hinja-crystal@gmail.co.uk';
console.log(user.email);
//acess name dan gainti bis apakai []
user['name'] = 'Chun-li';
console.log(user['name']);
//atau
console.log(user.name);

///////// BICARA TENTANG METHOD DALAM OBJECT ////////////
///////// setiap object literal punya metode dan punya properties
///////// kit sekarang bisacar tentang metode
//metode adlaah fungsi didalam object yg dipasang agar object dapat mlkaukan tasknya
//diatas kita udah pasang login isi sbuah fungsi cetak 'iam login now '
//kalau kit apanggil akan sama object dot nama_metode

console.log(user.login());

//ini sama dgn dibawah ini
const myname = 'mario';
console.log(myname.toUpperCase()); //ini fungsi bawaan string
//toUpercase adalah function murni bukan metode karn dia tak di define dalam object

console.log(user.logout());

/*

////masalah metode dlm object  yg akses object dalam array //////
///kita akan buat metoe utk akses blog array ( elementnya)
// utk itu kita buat this ,this disini meresentasikan context object 
/// yg merefer pada user 
//kalau biasa kit atulis console.log( this ) ==> maka ini merefer pada global window 
object semua object yg mewkili windoow

*/
//contoh this mewakili object global window
console.log(this);
//hasil output :
//Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

//coba kit auji dgn taruh this disebuah fungsi knowThis
console.log(user.knowThis());
//hasilnya adalah this tsb merpresentasikan context object sluruh isi dari user
//hasil:
/* 
{name: "Chun-li", age: 30, email: "hinja-crystal@gmail.co.uk", location: "berlin", blogs: Array(2), …}

*/

//dan kalau kita buat this dlam kalang fungsi atau sebuah object maka diaakan merefer context object
// atau ruangl ingkup object dimana "this " ini di declare contoh diatas saya buat
//logBlogs: function () {
//  console.log(this.blogs[0]);
// },
//diatas kita akan tampilkan blogs.index[0] contoh:

//acees blog dgn fucntion /this
console.log(user.logBlogs());

/// INGAT ! INGAT ! JANGAN MENGGUNAKAN ARROW FUNGCTON JIKA MAU MEMAKAI THIS SEBAB TIDAK AKAN BERHASIL
///THIS DIDALAM ARROW FUNCTION DIANGGPA SEbAGAI THIS yg MEWAKILI WINDOW GLOBAL
/// JAFI PENGGUNAAN THIS ADALAH VALID UTK REPRESENTASIKAN OBJECT  JIKA DIDALAM FUNTION ,JIKA FUNCTIONYA BUKAN ARROW
///FUNCTION
console.log(user.jangaPakaiArrow());
//hasil: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

//kita bisa memekai arrou funtion didalam object fungsi yg bukan arrow function sbb:
console.log(user.lognewsPaper());
let state = {
  contact: [
    { id: 1, name: 'indra' },
    { id: 2, name: 'alfa' },
  ],
};

console.log('state =', state);
//console.log('...state', ...state);

//akhirnya state baru brtambah adi 3 dalam sbuah array
//ini teknik despreate jadi memisahkan dia jadi bntuk kumpulan tapi
//bukan array jadi nambahnaya array tidak pakai push atau unshift
//tapi pakai cara didispreate baru ditlis dibkalang koma anggota arary baru!
const payload = { id: 3, name: 'lucky' };
let state2 = [...state.contact, payload];
console.log('state2 =', state2);
