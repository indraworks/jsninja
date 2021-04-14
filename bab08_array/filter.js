//contoh filte radalah  mefilter deretan array
//kit abuat kembalian dgn return

const mynumber = [20, 24, 25, 28, 30, 35, 38, 40];

const hasilFilter = mynumber.filter((item) => {
  // kita buat kembalian
  return item > 30;
});

console.log(hasilFilter);

//utk object bagaiman cara memfilternya tetap sama
const users = [
  { name: 'shaun', premium: true },
  { name: 'yhosi', premium: false },
  { name: 'drupa', premium: false },
  { name: 'markonah', premium: true },
];
const PremiumUsers = users.filter((user) => user.premium == true);

console.log('PremiumUsers =', PremiumUsers);

//utk yg siat boolan atau true false gal perlu perbandingan langsung sudah bisa

//copy dulu
const user2 = [...users, { name: 'indra', premium: true }];

const personExtPremium = user2.filter((user) => user.premium); //yg mucncul yg true
console.log('extendPremium = ', personExtPremium);
