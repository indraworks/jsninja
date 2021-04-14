const myForm = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
const myMsg = document.querySelector('.my-msg');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log('user name =', myForm.username.value); //ini sama tanpa buat query selector pada username
  // console.log('password = ', myForm.password.value);

  //validation
  // const username = myForm.username.value;
  // const username = myForm.username.value;

  const username = myForm.username.value;
  const Pattern = /[a-z]{6,12}/; //artinya brupa huruf kcil smua mmulai 6 sd 12  ^ dimulai huruf  $batas huruf sd 12 gak ada lagi apa2 ssudahnya
  //pattern :kata yg minimal 6 huruf maks 12 hrufu dimulai dari hurf dan diakhrii hruf
  //stahnya tidak ada lagi

  //cara ngetest patern dot test dalam kurung input value
  //dalam hal ini username yg nilai idiinptukan user pada form-input

  // let result = Pattern.test(username);
  // if (result) {
  //   myMsg.textContent = 'valid input';
  // } else {
  //   myMsg.textContent = 'not valid input all char from 6 to 12 ';
  // }

  //cara lain lagi utk test regex dgn cara cari  dichar no berapa
  //match nya kemdian itung dititk ^ mulai dia ktemu
  //hasil brupa angka jik atak ktmu nilai -1
  //jika ktmu nilai adalah >0

  //ii kebalikan diatas kalau diatas false atau true kalau disni cari patern yg cocok ktmu angka jhuruf mulai dari mana
  //posis ktmuanya dari pinggi awal
  let result = username.search(Pattern);
  //contoh dari pattern = diatas =/[a-z]{6,12}/
  //hasil = 5 ,mulai ktmunya  12345abcdefg6765867879789
  console.log(result);
});

/* ////////////////////////CATATAN //////////////////////////
Key point dari form jadi utk form 
mmbungkus compent2 yg ada d dalamnya misal label ,input box
dan button  nanh siinput ini akan cver itu smua sambil menunggu action yg namanya 
submit itu saja baru nani jalankan ()=>{}) callback functionya 

perlu diingat pada label ada for dia menunuk pada id yg ad apada infut form
perlu diingat pada input kita isi porperti name dan id ini sama 
sama nilainya kalau kita mau ambilvalue darinya 

///REFERENCE FORM MEWAKILI ANAK2 COMPONENT DIDALAMNYA 

perlu diingat jika kit apakai acuan /referenemisal id dari form atau class dari form
kita gak perlu buat reference 
contoh :
const myForm = document.queryseleor('nameForm)
//ini mengacu pada nilai dari username component di form adi usdah mewakili gak perlu buat query selector 
utk component didalam form tadi!
myForm.username.value 



CATATAN REGULAR EXPRESSION 
kalau mau cari kata yg match gunakan / indra  /g  (global pencarian yg match )
cari matchin apa ada tulisan indra ?
kalau kata yg diawali dan diakhir tanpa ada kata yg lain 
/^indra$/ -->cari kata yg hanya ini saja yg diawali dgn huruf i dan akhir harus a
sprti kata diatas  jadi satu baris hanya ada tulisan itu aja yg lain tak ada
/[a-z][A-Z/ ===>ini satu huruf yg match antara a-z bauk hruf kecil atau besar

/^.(6,10)/   //awal sbrang huruf min 6 hurf/cahr maksimal 10 huruf

 diatas kita mau testutk regular express dimana username yg kit amau test
 dan patternnya adalah smua  DIMULAI DARI HURUF huruf besar   atau KECIL 
 dan berakhir dgn huruf juga sesuah itu tak ada lagi 
 cara pattern ini adalah  :^ <---utk batasan dimulai  $ <---untuk batasan awal 
 

*/
