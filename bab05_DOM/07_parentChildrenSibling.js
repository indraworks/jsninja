//kita mau kasih class ke smua anak/children di bawah
//parent article element

const myArticle = document.querySelector('article');

console.log(myArticle.children); //hasil :hasilnya element dibawah/children
//dari article mrupakan himpunan/kumpulan HTMLcolection ,ingat
//TMLCollection(6) [h2, p, p, p, p, div] ~ada6 komponent children dibawah <article>
//ingat gak bis adi pakai utk forEach utk itu di tranfer dulu ke aarray
//coversinya :
// console.log(Array.from(myArticle.children)); //hasil sudah aray:(6) [h2, p, p, p, p, div]
//1)jika semua mau diisikan class yg sama /flat
Array.from(myArticle.children).forEach((item) => {
  item.classList.add('hero');
});

//utk mislakan kasih class ke parentnya bisa,kesibling,
const myh2 = document.querySelector('h2');

console.log(myh2.parentElement); //article
console.log(myh2.parentElement.parentElement); //body
console.log(myh2.nextElementSibling); // <p> ...</p>
console.log(myh2.previousElementSibling); // nggak ada

// //kalau mau kasih kelas per individu ya kita declare satu aja mis h2
// //yg lain jadi tignal kasih property classnya ,h2nya jadi ancer2

// myh2.nextElementSibling.classList.add('myp');

//kalau mau individu memang harus buat selector 3 buah yaitu utk h2,p,div itu aja
//GAK BISA CARA LAIN!!!!

/*
html browser daccess oleh js dgn mngunakan DOM ( cdocument object modle)
dan ada hirarkinya  root(html)
                      body  
                        |        |      |
                        div  -- h1  --  div --sibling 
                        |   | 
                        p --p --sibling

div terhadap p disebut parent , p dgn p disebut sibling ini contoh  relasi antar node
skrg di bab ini kita diminta buat class berdasarkan pengenalan antar relasi ini 
jadi query selectornya harus mengenali dibawah (children) tdh dirinya 
                       harus mengenali diatas (parent ) thd dirinya 
                       harus mengnali sibling thdp dirinya -next atau bslumnya






*/
