// let button = document.querySelector('button');

// //sekarang kita akan gunaka addeventlisternet
// //yaitu jika di click btton maka ada callbck function yg mana
// //akana pasing parameter dari mouse /keyboard tuk jalankan funciton

// button.addEventListener('click', () => {
//   console.log('you click me!');
// });

/*
utk alankan pasing argument yg di lewatkan /param yg dilewatkan 
maka ini sbgarang hruf atau kata ya atau biasa pakai e ,atau event
terserah 

*/

//sekerang kalau mau tampilkan jika linya maka kita gab linya
//ingat ingat uqery selectornya mesti yang All sebba list itu pbanyak!
let myList = document.querySelectorAll('li');
//item adalah perpartial dalri mylist yg mrupakan smua li
// kmudian peritime dipasang addevenlisterner agar pas diclick akan muccul
//tulisan saya sedang di clikc
// myList.forEach((item) => {
//   item.addEventListener('click', () => {
//     console.log('saya di click !');
//   });
// });

//kalau mau munculkan apa yg ditulis dikeyboard/atau yg mau dimunculkan dari event
//maka event tsb harus dipasingsebgai argument
//kalau kita liaht diconsole e /event ini bisa ganti sebarang karater yg jelas
//dikenai oleh JS bahwa yg masuk ke cb adalah argument berupa event!

myList.forEach((item) => {
  let val = item.innerText;
  item.addEventListener('click', (e) => {
    console.log(val);
  });
});

//melihat aslinya e
myList.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e);
    //ouseEvent {isTrusted: true, screenX: 273, screenY: 370, clientX: 223, clientY: 265, …}
  });
});

//kita akan hilangkan item tapi sblunya kita hanya kasih garis aja
//sblumdihilangkan
myList.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.target);
    //ouseEvent {isTrusted: true, screenX: 273, screenY: 370, clientX: 223, clientY: 265, …}
    e.target.style.textDecoration = 'line-through';
  });
});
