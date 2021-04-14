//KELANJUTAN DARI OLDwAY -ASYNC (basic 3)

//YANG KEMARIN KITA SUHDA BAHAS oldway sicy DNG CALL BACK HELL
//calang callback yg bikin lama nah sekarang kita bahas promises
//promises ini merupakan asyncronus javascript
//yang mana ada keluarannya pilihan yaitu jika sykses
//jika sukses = .then()
//jika yg erorr = .catch()
//dasarnya dulu
//dasar promises

const promiseResult = new Promise((result, reject) => {
  //jika event yg didapat sukses
  result();
}).then(console.log('hello saya sukses'));

//keterangan diatas kalau di taruh result itu fungsi yg handle jika promise
//sukses hasilnya masuk pending ,mmaka harus ada then utk proses kelanjutan

//contoh dibawah jika handle reject maka kita akan pakai catch
const promiseReject = new Promise((result, reject) => {
  //jika event yg didapat sukses
  reject();
}).catch(console.log('hello saya reject '));

//demikian juga jika reject maka hasilnya di pakai catch utk tangkap pesan reject dari
//response reject()
//jadi callback functionnya masing2 akan ekskusi jika dari server ada result(sukses) atau reject(failed)
//yang perlu di ketahui adalah jika function sukses maka bisa dibuat kesuksi beberapa
//then dalam waktu bersamaan
const promiseBoth = new Promise((result, reject) => {
  //jika event yg didapat sukses
  result();
})
  .then(() => console.log('sukses berhasil '))
  .then(() => console.log('saya juga sukses diekskusi'))
  .catch(() => console.log('hello saya reject '));
//ingat semua then and catch function merupakan call back function ya!
//kalau gak return boleh dtulis tanpa calibrace {}

//contoh aplikasi kita pakai promise dgn async ( yaitu setimeout timer
const myAsyncTimer = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
})
  .then(() => {
    console.log('hi i excute the resolve cause pending');
  })
  .catch(() => console.log('there wes error please check'));
//setelah 3 detik maka akan keluar 'hi i excute the resolve cause pending'
//Promise {<pending>} setelahnya resolve stlah 3 dedik
//program diatas bisa dijalnkana di console tanpa pakai const
