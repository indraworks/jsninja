//add remove class di suatu tag dgn cara
// classlist.add
//utk remove:
//classList.remove
const addCLS = document.querySelector('h2');
//console.log(addCLS.classList);

addCLS.classList.add('sumber');
addCLS.classList.add('test');
addCLS.classList.add('stnk');
//utk remove dari class
addCLS.classList.remove('stnk');

const allP = document.querySelectorAll('p'); //ambil smua selector p

allP.forEach((item) => {
  if (item.textContent.includes('error')) {
    item.classList.add('error');
  }

  if (item.textContent.includes('success')) {
    item.classList.add('success'); //ingat kalau classList gak perlu pakae dot nama classnya
    //mis diatas jangan tulis .success cukup success gak pkae dot
  }
});

//di style.css  ada class .success dan .error
/*
kta amu check apakan ada text tulisan dari nodeText dari tag ini 
yg ada kata "success" atau "error" jika success di add class .success 
dan sebaliknya ,kit agunakan textContent dgn textContent bisa cari detek tulisan atau kata yg didisplay non
kalau pakai innertext maka text dari noeText ( kita sebut node Text utk tulisan yg mengapit tag)
ok selamat mencoba

*/

/*



*/
