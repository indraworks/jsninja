//reduce mrupakan call back function yg mana trdiri atas
/*
trdiri atas :
(acc,curr)
dimana acc adalah accumulator yg diset 0 defaultnya
nah current adalah nilai elenent dari himp array nya
hasilnya berupa selector count atau agregate trgantung dari kita
mau perkalian atau penjumlahan 
*/
//contoh 1:

const nilMhs = [
  { name: 'Irfan', nilaiUTS: 100 },
  { name: 'Dira', nilaiUTS: 94 },
  { name: 'Sheva', nilaiUTS: 78 },
  { name: 'Irfan', nilaiUTS: 100 },
  { name: 'Dira', nilaiUTS: 94 },
  { name: 'Sheva', nilaiUTS: 78 },
  { name: 'Irfan', nilaiUTS: 100 },
  { name: 'Dira', nilaiUTS: 94 },
  { name: 'Sheva', nilaiUTS: 78 },
  { name: 'Irfan', nilaiUTS: 88 },
  { name: 'Dira', nilaiUTS: 94 },
  { name: 'Sheva', nilaiUTS: 78 },
  { name: 'Irfan', nilaiUTS: 100 },
  { name: 'Dira', nilaiUTS: 94 },
  { name: 'Sheva', nilaiUTS: 78 },
  { name: 'Irfan', nilaiUTS: 77 },
  { name: 'Dira', nilaiUTS: 94 },
  { name: 'Sheva', nilaiUTS: 78 },
  { name: 'Irfan', nilaiUTS: 100 },
  { name: 'Dira', nilaiUTS: 94 },
  { name: 'Sheva', nilaiUTS: 78 },
  { name: 'Irfan', nilaiUTS: 55 },
  { name: 'Dira', nilaiUTS: 94 },
  { name: 'Sheva', nilaiUTS: 78 },
  { name: 'Irfan', nilaiUTS: 57 },
  { name: 'Dira', nilaiUTS: 55 },
  { name: 'Sheva', nilaiUTS: 88 },
  { name: 'Irfan', nilaiUTS: 90 },
  { name: 'Dira', nilaiUTS: 34 },
  { name: 'Sheva', nilaiUTS: 78 },
  { name: 'Irfan', nilaiUTS: 30 },
  { name: 'Dira', nilaiUTS: 44 },
  { name: 'Sheva', nilaiUTS: 84 },
  { name: 'Irfan', nilaiUTS: 81 },
  { name: 'Dira', nilaiUTS: 54 },
  { name: 'Sheva', nilaiUTS: 77 },
];
//kalau banyak fillter dulu
const nilIrfan = nilMhs.filter((item) => item.name === 'Irfan');
const nilSheva = nilMhs.filter((item) => item.name === 'Sheva');
const nilDira = nilMhs.filter((item) => item.name === 'Dira');
//////cara manual
arrayIrfan = [...nilIrfan];
console.log(arrayIrfan);

let sum = arrayIrfan.reduce((acc, curr) => {
  return acc + curr.nilaiUTS;
}, 0);
const avg = sum / arrayIrfan.length;
console.log('average =', avg);
/////end cara manual /////

/////CAra memakai Function //////
const funAvg = (yourName) => {
  const nilName = nilMhs.filter((item) => item.name === `${yourName}`);
  const newArr = [...nilName];
  const sum = newArr.reduce((acc, curr) => {
    return acc + curr.nilaiUTS;
  }, 0);
  return sum / newArr.length;
};
////// end cara memakai function ///
const hasilIrfan = funAvg('Irfan');
console.log('hasil Irfan =', hasilIrfan);
const hasiSheva = funAvg('Sheva');
console.log('hasil Sheva =', hasiSheva);
const hasilDira = funAvg('Dira');
console.log('hasil Dira =', hasilDira);
