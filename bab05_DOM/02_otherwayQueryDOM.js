//get an element by ID
const myID = document.getElementById('page-title'); //hasil: <h1 id="page-title">The DOM</h1>
console.log(myID); //kita gak perlu kasih #page-title
//karena udah nunjuk elementId sama sprti yg bawah smua tinggal ketik nama saja

//get eleemnts by their class Name
const myClass = document.getElementsByClassName('error');
console.log(myClass);
//disini yg kluar adalah htmlColection bukan nodelist sprti queryselectorAll
//maka utk thmlCOlection gak bisa pakai forEact utk ambil individue/elementnya!
//yg bisa hanya nodelist yg diambil dari cuqey selectorAll

// get elment by tagname

const myTag = document.getElementsByTagName('p');
console.log(myTag);
