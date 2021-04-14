//event bubling itu begini
/*
jadi ktika suatu element  mis element li dikasih addevent listener
nah ktika jalankan cbnya maka otomatis akan trjadi 
si JS scaleup naik ke parent ul utk liha parent dirinya utk di scaleup 
siap2 dapat utk di addeventlisterner juga bagian ulnya 
nah nanti jiak ada ul di addevenlistener dan di callback functionnya dijalankan dia akan scaleup

akan naik ke aprent yaitu body nah si body ini akan liat diriny asiap2 di scale up atau 
nah utk cegah ini biasaynay programerlakukan di addeventlistenernya dgn kasih metode
sbb:
e.stopPropgation


*/
const myForm = document.getElementById('myformId');
const myTask = document.getElementById('mytaskfield');

const myUl = document.querySelector('ul');

const myliALL = document.querySelectorAll('li');

//add kita pakai form
myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createElement(myTask.value);
  myTask.value = '';
  myTask.focus();
});

function createElement(x) {
  const myLi = document.createElement('li');
  myLi.textContent += x;
  myUl.append(myLi);
}

//remove tiak bisa caranya nya adalah dgn cara sbb dibawah
// myliALL.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.stopPropagation();
//     item.remove();
//   });
// });

//gak bisa ya jadi haru pake ul parentnya baru pake list utk remove!
//jadi pakeai ul dan kemudian periksa tagname yg dibawah childnya si ul ii
//apa tagnamenya adalah li jika ada mama delete itu saja

myUl.addEventListener('click', (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName == 'LI') {
    e.target.remove();
  }
});

//yg atas ga bsa delete karennay kit aharus buat di anaik ketas jadi naptent salah satunya
//dlm hal ini ul
