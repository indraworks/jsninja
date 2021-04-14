//get /grab h1
let myH1 = document.querySelector('h1');

//kita coba dgn setAttribute
myH1.setAttribute('style', 'color:pink;');
//hasil margin ilang :
//<h1 style="color:pink;">The DOM</h1>

//kit acoba balikan dulu dgn set atribute style
//baru nanti dgn style object properties utk settingnya

//kembalikan
myH1.setAttribute('style', 'color:orange;margin:50px;');
//kit apakai style lagi

myH1.style.color = 'white';
myH1.style.background = 'green';
myH1.style.border = '5px solid black';
myH1.style.fontSize = '3.5rem';

/*
kita sblumnya di bab seblunya sudah pake setatriute utk 
ubah style tapi sifatya dalah menimpa menghapus yg lain 
contoh diatas di h1 ada style color dan margin 
jia kia set atribute color:gren maka yg margin akan hilang
mari kita coba beda dgn
langsung dot style dan properites
mis kita query seleror h1.style.color = 'purple
maka yg margin tidak hilang 
jika kia mau hilangkan maka cukup
h1.style.margin ="" maka yg color dan nilai atributelain dalam h1 tidak hilang!
yg hilang a\hnya margin 
jadi cukup jelas beda pnggunaan set atribute dgn style yg tertempel sbgai object
dan properties di tag/node element utk digunakan ubah valuenya!


*/
