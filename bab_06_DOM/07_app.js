const article = document.querySelector('article');
// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

// Array.from(article.children).forEach((item) => {
//   item.classList.add('article-element');// add all
// });
//jadi kita bisa
Array.from(article.children).forEach((item) => {
  item.classList.add('new-element');
});

const title = document.querySelector('h2');
console.log(title.parentElement); //atasnya h2 adalah body
console.log(title.parentElement.parentElement); //atasnya lagi
console.log(title.nextElementSibling);
console.log(title.next);

//contoh
let myP = document.querySelector('p'); //select p paling ata(default)

console.log('p1 parent element =', myP.parentElement);
console.log('p1 parent parent element =', myP.parentElement.parentElement);
console.log('p1 parent prev.sibling element =', myP.previousElementSibling);
console.log('p1 parent next.sibling element =', myP.nextElementSibling);
console.log('p1 parent prev.sibling aja =', myP.previousSibling);
console.log('p1 parent next.sibling aja =', myP.nextSibling);
