//kit aakan amembuat list dihatml dgen cara js cript callback functuon

const ul = document.querySelector('.people');
const people = ['yenni', 'lucky', 'teguh', 'indra', 'kevin'];
let html = ``;

people.forEach(function (person) {
  html += `<li style="color:purple"> ${person} </li>`;
});

console.log(html);

ul.innerHTML = html; //kata innerHTML masukin html nilainya kedalam ul dibrowser
