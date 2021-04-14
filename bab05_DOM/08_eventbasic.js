//kita test sekagnag jadi kalau di js ada sbuah event itu akan
//buat functionnamanya addeventlistener dalam funvtion ada 2 parameter
//1.suatu aksi ,dan yg kedua adalah calback function apa yg akan dilakukan jka aksi itu terjdai sbb:

//kita mau klik button dan nanti ada hasil adalah  clg terklik

// const button = document.querySelector('button');

// button.addEventListener('click', (e) => {
//   console.log(e);
//   console.log('hi clicked');
// });

//////////////BAGIAN PERTAMA ///////////////////////////

// const cmdList = document.querySelectorAll('li');
// const myinput = document.querySelector('name-task');
// const mybutton = document.querySelector('button');

// mybutton.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(myinput.value);
// });

// cmdList.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     console.log(e.target);
//     //kalau kit amau ngedelte bisa ditandai dulu pakai style.textdecoration
//     e.target.style.textDecoration = 'line-through';
//   });
// });

//////////////////////END BAGIAN PERTAMA /////////////////////

////////////BAGIAN KEDUA  JIKA KITA BUAT  FORM /////////////////
//form
//adevenlistener ada dalam naungan form dgn action submit beda dgn diatas
const myForm = document.querySelector('.myform');

//isi nilai input yg nanti di buat di li melalui ul dgn ul.append(li)
const mytaskField = document.querySelector('#mytaskfield');
//ul
const myUL = document.querySelector('ul');
//li
// const myLi = document.querySelector('li');
//(salah ini utk hal disini li sebgaia utk ceate aelement
//maka haru sditulis document.createElement('li')
//kit amau createa tag dan property li

//create eventListener subject adalah form walau yg klik adalah button karen adalam form conmponent buttonnya

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createElement(mytaskField.value);
});

function createElement(x) {
  //create tag li
  myLi = document.createElement('li');
  //is texnode li dgn value dari field input box
  myLi.textContent = x;

  // kaitkan dgn parent UL utk ditambahkan di li list
  myUL.append(myLi); //jika appen maka dibawah dia ngisinya  += adalah tanda utk inser
  // myUL.prepend(myLi);
  // myUL.insertAdjacentHTML(
  //   'beforeend',
  //   `<li class="container"> ${x} <button onClick="deleteItem(this)">delete</button> </li>`
  // );
}

//kalau mau hapus but add evenlistener lagi dari ul ,li yg dipilih

const liALL = document.querySelectorAll('li');
liALL.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.remove();
  });
});

///////////////////END FORM /////////////////////////////////

////PENTING !! ////////////////////
/*
KITA GAK BISA DELETE YG BARU KENAPA?YA karena 
kita buat yg baru tapi gak di attached addevent listener utk yg baru 
tapi kita atached eventlisteer yg list yg lama jadi ist yg lama saja yg kedelete
yg baru gak bisa! cara tanggulanginya next di bab 09 
event bubling,delegation


*/

/////////////////

////////////////////CARA KETIGA ////////////////////////////////
//cara ketiga adalah dgn cara insertAdjacent chanel

////////////////////////////////////////////////////////////////

/*
//KETERANG BASIC BUTTOn DI CLICK 
CATATAN PENTING JIKA SBUAH event mis click yg pada function diatas atau event apa aja yg 
telah terjadi maka JS akan kluarkan parameter builtin namanya event
akan masuk di ()=> , sebgai parameter sebut kita singkat aja e
nah diconsole log aslinya adalah event nah kalau kita tampilkan di console loh
aprameter ini bersii smua obejct informasi eevent object yg mau kita tamilkan 
nah disini kita pilih informasi event.target ,apat iut informasi ya tadi 
berupa obejct yg kita klik kita mau tampilkan!
conoh sbb diatas

jadi event atau e tadi (e)=> 
console.log(e) //hasil berupa semua informasi dari mouse event
apa isinya yg mau kita pilih disitu ada target (target adalah object yg kita clikc 
  jadi info obect atau target apa sihc yg kit aklik ini ?!
  ):
MouseEvent {isTrusted: true, screenX: 424, screenY: 385, clientX: 184, clientY: 326, …}
altKey: false
bubbles: true
button: 0
buttons: 0
cancelBubble: false
cancelable: true
clientX: 184
clientY: 326

.....   
...   
... 
target: button //nah tadi kita klik button kluarlah info disini 
barusan kita klik button 


*/

/*CATATAN TAMBAHAN utk mmbuat tambahan sebuah list <li> 
kit abuat dlu selector yg menunjuk ke li nama metode .createElement 




*/
