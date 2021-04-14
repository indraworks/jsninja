//map membuat aarray yg baru
//masudnya nilai2 element dari elelment array yg lama aka n dipetakan
// atau diolah dan kmudian hasilnya ditampung di nilai variable yang baru
// sbb:

const product = [
  { name: 'gold star', price: 40 },
  { name: 'medal pure', price: 50 },
  { name: 'rubby shine', price: 20 },
  { name: 'jewerly', price: 15 },
  { name: 'shapire', price: 90 },
];

const updatePrice = product.map((product) => product.price * 1.5);
console.log('harga per jun 2021 perhiasan', updatePrice);
//hasil : r jun 2021 perhiasan (5) [60, 75, 30, 22.5, 135]