//utk ambil tag p kit acoba ya
const para = document.querySelector('.error');
console.log(para);
console.log(para.textContent); //cetak isi/tulisan  dari  class para
// maka hasilnya adalah null
/*
hasil diatas (para):
hasllnya adalah null!

kit aharus memilih dia bersadarkan id atau class
kalau pilih classtingal ktik dlm kurugndiatas nama classnya

*/
const paras = document.querySelectorAll('p');

console.log(paras);
//hasil :NodeList(3) [p, p, p.error] mirip array tapi sbnanrnya bukan array
//kalau mau ambil individue dgn [index]
console.log(paras[1]); //hasil :<p>lorem ipsum  </p>
const error = document.querySelectorAll('.error');
console.log(error); //hasil ndelist p error,div error
////CATATAN ////
//selector css mis mau lihat selector/yg dipilih pada console
//di bagian htmlnya sorot klik kanan pilih selector
//mis :stlah disorot akan tampak sptrti ini body>h1 kita sldang pilih h1 dari parent body

//bgaiaman caranya alau mau lihatkan smua eleemnt
//yaitu dgn cara queryselectorAll mis mau kluarkan smua tag p
//document.querySelectorAll('p') p ini disnbut nodelist
//yatu ini mngacu pada nodelist yg kluarkan smua tag p darinya
