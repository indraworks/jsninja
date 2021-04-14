//REST adalah pelewat di  parameter di callback function yg menyingkatnya jadi  function(...name)
//penjelasan:
// REST ADALAH  bagaiman menyatukan /atau menuliskan kembali argument yg banyak
//kit asingkat penulisnannya ketika berada di pasing parameter call back function yg dipanggil
// jadi list kumuplan bangyak anka diargumen mis a(1,2,3,4,5,6,7) t dipasing jadi sebuah array (...number)
//sehingga mudah utk melakukan manipulasi data
//sebb

const double = (...numbers) => {
  console.log(numbers);
  return numbers.map((item) => item * 2); //nilai argument dikembalikan dix2 lebih dahulu
};

console.log(double(1, 2, 3, 4, 5, 6));
/*
hasilnya :
(6) [1, 2, 3, 4, 5, 6]
spread_sets_symbol.js:12 (6) [2, 4, 6, 8, 10, 12] //hasil :return numbers.map((item) => item * 2)



//2.SEDANGKAN SPREAD ADA 2 : SPREAD AARAY DAN SPrEAD OBJECT 

//2.1 SPREAD (ARRAYs) 
//2.2 SPRADF (OBJECTS)

// 02 TENTANG  SPREAD ARAYS :
/*
spread array adalah merupaka sintak penganti element array  yg banyak dgn dot 3x +nama variable Aray
ini supaya mewakii pnulisan yg banyak tadi dan utk mudahkan misalkan operasi penggabungan,concatenation
atau copy dll

 }
//contoh spread array
  const person = ['dadu','hani','lina','eko']
  const personCopy = [..person,2,harga:{2000,3000,1500}]
*/
const person = ['dadu', 'hani', 'lina', 'eko'];
const personCopy = [...person, 2, [2000, 3000, 1500]];
console.log(personCopy);

//BERLAKU JUG AUKT OBJECT GUNAKAN ...NAME_VARIABKE_OF_OBJECT/ARRAY

const listSiswa = { name: 'indra', alamat: 'selat sunda', kelas: 'sma 1' };
const listGuru = {
  ...listSiswa,
  mengajar: ['bahasa', 'matematika', 'ipa', 'fisika'],
};
console.log(listGuru);

//TENTANG SET
//set adlaah himunan array yg uniq caranya adalah kalau mau buat set sbb
//contoh data dupliakat dalam array

const bilku = [1, 2, 2, 5, 7, 20, 39, 1, 2, 3, 15, 19, 85, 4, 4];

//kit asekaran gmau buat set
const mySetku = [...new Set(bilku)]; //jadi bilku di masukan ke dalam Set sebagai instalce dari new Set Object
console.log(mySetku);
//hasil semua jadi uniq :[1, 2, 5, 7, 20, 39, 3, 15, 19, 85, 4]

//ADD SET
myCape = new Set();
const CapeResult = myCape.add(60).add(120).add(13).add(13);
console.log(CapeResult);
//REMOVE SET
CapeResult.clear;
//
