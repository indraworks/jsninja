/*
seriously.
Higher-order functions allow us to abstract over actions, not just values.
They come in several forms. For example, we can have functions that create
new functions.
function greaterThan(n) {
return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
And we can have functions that change other functions.
function noisy(f) {
return (...args) => {
console.log("calling with", args);
let result = f(...args);
console.log("called with", args, ", returned", result);
return result;
};
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
We can even write functions that provide new types of control flow.
function unless(test, then) {
if (!test) then();
}
85repeat(3, n => {
unless(n % 2 == 1, () => {
console.log(n, "is even");
});
});
// → 0 is even
// → 2 is even


*/

//jadi intinya High Order FUnction bagian pertama tapdi tidak hany a lewatkan passin gparamerter
//berupa function dan hasilkan value tapi pada bagian 2 ini kita beri contoh
//hof akan buat sebuah function juga sbb sprti diatas kita praktekan dan tambah contoh lagi yg <ke-2>
//</ke-2>

function greaterThan(n) {
  return (m) => m > n;
  console.log(`nilai m : ${m}`);
  console.log(`nilai n: ${n}`);
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10); //(m) => m > n  blum ada hasil sbab m bum trisi
console.log(greaterThan10(11)); //ada nilai yg dikembalikan true 11 lebih besar dari 10
