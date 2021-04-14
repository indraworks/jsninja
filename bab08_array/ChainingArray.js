/*
Chaining array maksudnya gimana ?
jadi gini jika kita mengolah data dalam aarray yg sama 
kita buat filter tdhdp arrayA mis kemuddina kita buat map atau 
reduce thd arrayA maka gak perlu kita store dulu ke variable 
utk step pertama dan kedua kita store lagi ke variabel yg kedua 
jadi langsung pakai dot map atau dot reduce sambung...
sbb contohnya
dari soal yg eprtama kita filter dan kita reduce

 */
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

//function ditatas kan ada 2 filter dan reduce nah melakukan di array yg sama
//langsung aja dilakukan chaining sambung dot

const funAvg2 = (yourName) => {
 nilMhs.filter((item) => item.name === `${yourName}`)
      .reduce((acc,curr)=> {
       const sum = acc+curr.nilaiUTS;
       return sum
      },0)
  
  return sum / newArr.length;
};
const hasilIrfan2 = funAvg('Irfan');
console.log('hasil Irfan2 =', hasilIrfan2);




