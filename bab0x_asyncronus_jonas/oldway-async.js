//KELANJUTAN DARI ASYNC (INI BASIC ke 2)

//PENTING SEKALI SYNTAX DARI SETTIMEOUT set timeout :
/*
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

1)var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
2)var timeoutID = scope.setTimeout(function[, delay]);
3)var timeoutID = scope.setTimeout(code[, delay]);

BIASAYNYA YG PERTAMAN BANYAK DIPAKAI UTK PASSING ARGUMEN mnah argument arg1 INI BISA SAJADI 
MERUPAKAN sebuah Fungsi sebelumnya!!
contohnya sbb: simak perhatikan!

function sayHi(who) {
  alert(`Hello ${who}!`);
}

Now, you can pass the name of the person into the setTimeout() call as a third parameter:
let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');


*/
//ini contoh yg eprtama 1 kalang arguemnt saja

// function getReceipt() {
//   //didalamnya ada fucntion setInterval
//   const receipID = [20, 20, 30, 40];
//   setTimeout(
//     () => {
//       console.log(receipID);
//     },
//     4000,
//     setTimeout(() => {
//       console.log('indra helo callback2');
//     }, 4000)
//   );
// }
// console.log('gatal');
// getReceipt();

//kita sekarang buat 3 kalang didalam fungsi ada funcgis lagi callbak aa lagi callback
//3 nested callback

// function GetReceiptX() {
//    setTimeout(fn
//kalang1
//     setTimeout(fn
//kalang 2
//         setTimeout(fn,3000

//             )

//         ,3000)

//     ,3000)

// }

//dibawah ini pengimplentasion contoh diatas

function GetReceiptX() {
  const ReceipID = [13, 14, 15, 16];
  setTimeout(
    () => {
      console.log('kalang1');
      console.log(ReceipID);
      //kalang2
      setTimeout(
        (id) => {
          console.log('kalang 2:');
          const ReceipSatu = {
            title: 'masakan jawa',
            bumbu: ['bawang', 'sambal'],
            publisher: 'jhon Doe',
          };
          console.log(
            `masakan no:${id} dan title = ${ReceipSatu.title} pencipta: ${ReceipSatu.publisher}`
          );
          //kalang 3
          setTimeout(
            (id) => {
              console.log('kalang3');
              const ReceipDua = {
                title: 'masakan padang',
                bumbu: ['jahe', 'kunyit'],
                publisher: 'armand maulana',
              };
              console.log(
                `masakan no:${id} dan title = ${ReceipDua.title} pecipta : ${ReceipDua.publisher}`
              );
            },
            3000,
            ReceipID[2]
          );
        },
        2000,
        ReceipID[1]
      );
    },

    2000
  );
}
GetReceiptX();
//contoh diatas disebut call back hell ,karena callbacak functon kalang dalam kalan g
//ini cara lama asyncornus
