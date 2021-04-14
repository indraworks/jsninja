//get href atribute tapi kit aambil id saja sbb jika ada yg sama hrefnya
//atau classnya sbb yg palin unik adalah id
const myidHREF = document.querySelector('#my-a');
// const getHREF = document.getAttribute('href')

myidHREF.getAttribute('href');
console.log(myidHREF.getAttribute('href')); //hasil:http://www.detik.com

//nah sekarang kita mau ganti isinya sekaligus mau tambah atribut di
//selector a yg selector id =my-a
myidHREF.setAttribute('href', 'http://www.detiknews.com');
myidHREF.innerText = 'berita pesawat jatuh';
//kita mau kasih fontItalic warna merah
myidHREF.setAttribute('style', 'font-size:20px;color:red;font-weight:bold;');

//catatan
//get atribute dimaksudkan mnegambil atribute dari tag
// yg mana di sebut atribute ??
/*
cntoh :
<p class="content">This is new content </p>
class adalah atribute 
href adalah atribute 
id adalah atribute 
style adalaah atribute 

//kalau mau amboil atau pilih atribute dalam tag ygatriute yg mana mis dalam tag
ada bnayka atrinute sprti contoh di hatmlnya 
property.getAttribute() sperti diatas hasi adalah isi adari atribute:
"http://www.detik.com"


NAH tadi dibab sblumya ita sudah edit misalnya yg tambah style di p dgn 
cara tulis tag htmlnya plus isinnya nah disini 
kalau mau kasih atau tamnbah style tinggal tulis 
property/setAttribute("nama_Atribut_nya","isi_nilai_dari_atribute(new-value)")


*/
