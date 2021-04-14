/*selain querySelector
ada jug aquery yg lainya yg sifat nya adalah HTML colection 
dimana kita tiak bisa ambil ddia dgn foreach pertiem dalam sbuah loop
contohnya dalah  getElementsBy-->ada huruf s nya seklumpulan atau jamak
-getElementsByClassName--->skumpulan classname
-getElementsByTagName-->ngambil kumpulan tag tag name
-..dst 
sedangkan querySelectorAll adalah sama tapi dia dalam aarray bukan satuan kumpulan!
dan dgn querySElector All kita bisa pilih atau bisa gunakana for Each utk looping
utk get by Elements tadi bisa utk diambil juga secara array tapi utk kalang loop tidak bisa

-query selecor digunakan utk grab eleemnt atau component dalam  dom  
 lebih keindividu bisa id '#Id',bisa className = .nama_className,bsia tag tag htmlnya
 cotnoh ('h3') / atau ('p)
*/
// degan  query selector
let collParagrap = document.querySelectorAll('p');

collParagrap.forEach((item) => {
  console.log('list :', item);
});

//degan getEleemenstbyClassName
let eleParagrap = document.getElementsByClassName('error');
console.log('all class :', eleParagrap);
console.log('className errror  index-o :', eleParagrap[0]); //bisa diambil secara array

//getElementById -->kita gak erlu nulis # didalam kurung
let myId = document.getElementById('page-title');
//printmyId
console.log('myId = ', myId);

//getELements by their tagName

let myTagname = document.getElementsByTagName('p');

console.log('elment tag name =', myTagname);

//get Elements by their className
let myclassName = document.getElementsByClassName('error');
console.log('elements className =', myclassName);
console.log('myclassName index 0 =', myclassName[0]);
