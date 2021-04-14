//ambil tulisan error di kumpulan p salah satu select
// let para = document.querySelector('body > div:nth-child(2) > p.error');
// console.log('1)ambil  di atara 3p dlam div :');
// console.log('hasilnya utk 1 :', para);
// //ambil tulisan error dilain  div salah satu select (tanpa p)
// para = document.querySelector('body>div.error');
// console.log('2.ambil dlm beda div tanpa p ');
// console.log('hasilnya lain div tanpa p :', para);
// //ambil tulisan error dilain  div salah satu select (dgn  p)
// para = document.querySelector('body > div:nth-child(4)');
// //body > div:nth-child(4) > p
// console.log('2.ambil dlm beda div dgn p ');
// console.log('hasilnya lain div dgn  p :', para);
/// it apilih dgn query selector tapi lewat id
// let para = document.querySelector('#error1');
// console.log('error 1 ', para);
// para = document.querySelector('#error2');
// console.log('error 2 ', para);

// para = document.querySelector('#error3');
// console.log('error 3 ', para);

///kalau mau select tag smua yg ada paragrap atau p
//maka gunakan queryselectorAll('p')

//kalau mau select smua class .error maka pakai juga queryselectorAll

//dari ambil smua yg ada di group untuk cari per-item parsial dgn cara
//queryselector('error[1]') atau querySelector('p[0]')
//jadi tergantung dari urut baris atas kebawah dari html dan urutannya mulai dari 0..
//ini sperti array

/////////contoh ambil all p dan all class with name .error
let pAll = document.querySelectorAll('p'); //ambil smua element p
console.log('semua list eleemnt paragraph :', pAll);
let errorAll = document.querySelectorAll('.error');
console.log('Error All ', errorAll);
//ambil  p index 2 dari pAll
console.log('ini errorAll index 2', errorAll[2]);

//ambil eror no 1 dari errorAll
console.log('ini p index 0', pAll[0]);

/*
penting daripada susah utk select dgn hirarki selector 
maka pembedanya dibuat dgn tag id 
ini saya copy saya buat baru yg ada error diberi id error1 
bukan class !sbb class boleh tidak uniq id dadalah uniq

*/

/* CATATA 
i amau akses object2 di DOM cara2nya gimana?
apa saja reference utk quering di DOM??
cara simpan dalam variable ,kalau universal gunakan querySelector("")
utk . dot utk class,#utk id, yg lainya tulis tagnya p,h1 gak perlu tulis < > (ikut dultuilis)

*/

/*
mau selector bingung kadang bingun cara di console select tag yg mau diselector
klik kanan pilih slector bisa copy,ada pilihan -->pilih selector (klik kanan) dan masukan ke js script kita utk doc.query selector yg dipilih tadi!

body > div:nth-child(2) > p.error
*/
