//ubah style DOM diatas
const myTITLE = document.querySelector('#page-title');
//kalau di css ada tulisa font-size maka tulusan - diganit
//dgn huurf besar tanpa spasi akan terulis begini :fontSize

myTITLE.style.fontSize = '50px';
myTITLE.style.fontWeight = 'bold';
myTITLE.style.border = '10px solid black';
myTITLE.style.color = 'orange';
myTITLE.style.marginLeft = '150px';
//kalau mau balikan margin atau hapus kasi nilai kosong
//otomatis marginLEft style hulang juga
myTITLE.style.marginLeft = '';

/////CATATAN :
/*
pada bab lalu kita sudah biara setAtriute nah tapi stylenya ini pasti 
tertimpa! atau ilang style yg lama nah kita akan gunakan 
prperty style bawaan dari javascript utk ubah dan sklaligus gak nimpa 
yg lainya sbab dama satu tag akan aa banyak stylemacanya 
cona aja diatas diconsole,nah tinggal pilih mana yg mau tdtigambahkan dan dikurangi
ukt add style
selector.style.property-namenya 
//utk remove 
selector.style.property-namenya = "" //jasik empty string aja 

//contoh it amau ubah tulisan the DOM  diatas ! 




//DISINI JUG AKITA BAHAS BEDA innerText dan textContent
kalau innertText dia hanya lihat atau bisa lihat 
text yg display = true
kalau textCOntent dia bisa lihat tulisan yg peroperty di hiddern 
atau display none contoh diatas utk span 
kita mau hitung jumlah ada error di tag p jika error 
kit amau kasih warna merah utk tulisannya
jika ada tulisan success kita kasih warna hijau pada tulisan emelement

*/
