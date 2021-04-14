//get tab which inside of the atribute that we will change

let myLink = document.querySelector('a');
//get atribute
console.log('isi href atribute = ', myLink.getAttribute('href'));
//set atribute
myLink.setAttribute('href', 'https://www.thenetninja.co.uk');
//kita ubah tulisan di tag a
myLink.innerText = 'The Net Ninja WebSite';

//kita mau ubah color di p
let myP = document.querySelector('p');
myP.setAttribute('style', 'color:blue;'); // jgn lupa tnada petiknya
//ada didalam tanda kutip
//kita mau ubah nama class dari error jadi success
myP.setAttribute('class', 'success');
