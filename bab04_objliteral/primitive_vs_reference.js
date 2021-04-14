//kita bicara primitive vs reference types
/*
apa itu data pritmitive adalah sbb:
boolean:false,true
string:'aku','123',
number:12345,13.7
null : variable kosong tidak ada angka 
undefinied: blum diassign 

Reference Types :
-semua data type object  contoh let myobj : {    }
-objliteral yaitu :let myobjliteral:{
    x:{},d:[{},{}]
}
objliteral adalah obj yg didalamhya ada data arary atau data obj lagi atau data array didalam
nya ada data obj lagi,atau obj dlamnya ada fungsi
array : [...,...,] //not eisiya bisa string,numberbooelan, atau object
function: fungsi2 baik dalam object atau indepnden
-date : tanggal
-object2 lainya 

kalau primite di simpan distack
jadi satu variable 
let a= 2
let b = a
jika a = 6 maka b tetap sama yaitu b=2
karena adressnya beda.



kalau objliteral pointernya disipan distack tapi nilainya disimpan di heap
jadi alamat pointernya saja yg direferensikan di stack

const myobj1 ={3.14,"aku",[1,2,3],false}
const myobj2 = obj1  //dicopy dke obj2


maka 
distact            *pointer -------------> Heap isi{3.14,"aku",[1,2,3],false}
05|         |       adress pointer sama yg mereferal posisi di heap data2 nya
                    jadi kalau obj2 dicopi dari obj1 jika obj 2 berubah maka obj2 brubah juga!
04|         |
03|         |
02| *pointer | myonj1
01| *pointer |myobj2

jadi distack adress memori beda tapi memilik adress pointer yg sama yg mengarah pada 
address heapnya jadi isinnya sama  dan apabila obj1 diganti mis obj1[0]=6.28
maka otomatis obj2 akan sama sebab mereka mempunya data heap yg sama dgn pointer yg sama 

*/
//contoh primitive
let a = 12.6;
let b = a;
a = 'sudah ganti';

console.log(`hasil primitive a dan b berbeda a =${a} , b=${b} `);

//contoh  reference type

let obj1 = { pi: 3.14, name: 'indra', angka: [1, 2, 3] };
let obj2 = obj1;
obj1[0] = 6.8;
console.log(
  'reference adalah heap( isi datasama) dan pointer sama,beda adress mermori variable saja '
);
console.log(`obj1 ${obj1[0]}  = obj2 ${obj2[0]} `); // nilai sama 6.8
