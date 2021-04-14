//utk ubah masukan dulu grab tag /element yg di garab
//kmudian isisvariable dgn text pengubah
//gunakan innerTet metode thd variable eleemnt yg akan diubah sklaigus isi
//valuenya disini sbb:

/////////////// ubah element individw dgn innertext /////////
let para = document.querySelector('p'); //query selector akan ambil grab tstb paling pertama
//p yg pertama dari htmlm yg diamabil p baris teratas yg ada p nya
console.log(para);
//setelahnya dgn innertext kita masukan timpa dgn text yg baru
para.innerText = 'HEllo SEnja';
//update para
console.log('update <p> skrg = ', para); //dihtmpl page p sudah hello Senja isi content elemnt

////////////ubah semua isi content element <p> dgn inner text ////////
//caraaadalah dgn queryselectorAll kmudian pake forEach utk update
para = document.querySelectorAll('p'); //grap smua <p>

para.forEach((item) => {
  item.innerText += 'hello Senja all';
});

console.log(para);

/////1.a.mengubah content htmlnya bukan textnya ! /////////////
let content = document.querySelector('.content');
console.log('content sblum diubah  =', content);
content.innerHTML = '<p><h1>This is My new Content !</h1></p>';
console.log('contnent  sesuadah =', content);

////////////// 1b. kita tambahkan content dgn nanma2 dlm array //////

const daftarSiswa = ['kevin', 'Charisa', 'Alya', 'fara', 'Zaki'];
content = document.querySelector('.content');
daftarSiswa.forEach((item) => {
  content.innerHTML += `<p>${item}</p>`; //utk tambah +=
});
console.log(content);

// dalam jumlah besar ,kita bisa buat utk jadi template html code diatas !!

/* /////////CATATAN ////////////////////////////
note kita akan ubah suata tml element isinya dgn 
metode innerText sprti kita tahu bahwa DOM adalah merupakan node tree
hirarkiel jadi  dari html
                      |          |
                      head      body
                        |         |  |
                        title    p   h1   ...dst

smua yg ada di dibagan atas tree itu sibut sgai node nah tulisannya 
didalam node node itu dosenut textnode
yg grab node adalah queryselector dan querySelectorALl
yg ngambil HTTMLcolections adlaah getElementsbyName,byClasssName,byTagName


*/
