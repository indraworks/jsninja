//KELANJUTAN DARI PROMISE
//PENJELSAN  FECTH API MEUPAKAN SEBUAH PROMISE  JADI nanti responsenya adalah sebuah OBJECT
//SEPERTI DIbAWAH INI !!
//jika saya pakai fecth hasil adlah object semua!
const urlx = 'https://jsonplaceholder.typicode.com/todos';
fetch(urlx)
  .then((response) => {
    console.log('resolve', response);
  })
  .then((err) => {
    console.log('rejected', err);
  });

//hasil diatas object sbb:
//hanya object!pasti object kembalian fecth utk ambl data gimana?
//jika resolve berhasil maka
//cari metode json()ya  utk eskusi data harus direturn dulu dari .then pertama
//.then kedua melakukan ambil data taruh di variable baru kit aconsole.log
//ini contoh hasil kode diatas awal then pertama hanya response saja

/*conotoh kode diatas
bodyUsed: false
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: ""
type: "cors"
url: "https://jsonplaceholder.typicode.com/todos"
__proto__: Response                  
arrayBuffer: ƒ arrayBuffer()
blob: ƒ blob()
body: (...)
bodyUsed: (...)
clone: ƒ clone()
formData: ƒ formData()
headers: (...)
json: ƒ json()  <-------------- ///// kita ambil data di metode json()  ////
ok: (...)
redirected: (...)
status: (...)
statusText: (...)
text: ƒ text()
type: (...)
url: (...)
constructor: ƒ Response()    
Symbol(Symbol.toStringTag): "Response"
get body: ƒ body()
get bodyUsed: ƒ bodyUsed()
get headers: ƒ headers()
get ok: ƒ ok()
get redirected: ƒ redirected()
get status: ƒ status()
get statusText: ƒ statusText()
get type: ƒ type()
get url: ƒ url()


//end contoh kode */

//jadi karena fect adalah merupkana sebiah promise maka kembaliannya adalah
//sebuah nilai response yg berhasil dan reject
//jika berhasil maka dia akan keluarkan sebuah object kembalian
//nah utk ambil data nya adalah jika berhasil :
//1. ambil response metode  json sebagai kembalian karena disitu datanya
//dan harus direturn jika direnturn maka .then selanjutnya yg akan melaksanakan ambil
//argument kembaliannya
//2.gunakan sebuah const data atau apa saja utk tampung data

const url2 = 'https://jsonplaceholder.typicode.com/todos';
var mydata = [];
fetch(url2)
  .then((response) => {
    console.log('resolve', response);
    return response.json(); //kita return agar bisa di ekskusi utk then selanjutnya jsonnya
  })
  .then((data) => {
    //console.log(data); // di then kedua data kita ambil masuk ke variable mydata
    const dataku = data;
    dataku.forEach((item) => {
      console.log('titlenya :', item.title); //dan langsung di keeksusi ya
    });
  })
  .catch((err) => {
    console.log('rejected', err);
  });

//just eksute dalam then tersebut  ! lantas bagaimana kalau kita misalkan
//menggunakan variable dari luar dan mau akses maka harus dengan async await !
//lebih aman !
// tapi gak masalah bisa jadi buat variable mydata aray diluar  function fetch=promise
//pada saat then yg ke-2 diekskusi  masukan varibale mydata setelahnya baru di logoutput!
//sbb:

const url3 = 'https://jsonplaceholder.typicode.com/todos';
var mydata = [];
fetch(url3)
  .then((response) => {
    console.log('resolve', response);
    return response.json(); //kita return agar bisa di ekskusi utk then selanjutnya jsonnya
  })
  .then((data) => {
    //console.log(data); // di then kedua data kita ambil masuk ke variable mydata
    const dataku = data;
    dataku.forEach((item) => {
      mydata.push('data saya push :' + item.title); //dan langsung di keeksusi ya
    });
  })
  .catch((err) => {
    console.log('rejected', err);
  });

console.log(mydata);
