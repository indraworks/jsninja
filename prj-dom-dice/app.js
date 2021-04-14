/*
game rule
auran main ,dadu dimainkan kalo dia hol maka akan disipan di global score
            angka nambah bagi pemain,dan play turn on ke pemain satunya
            kalau nilai 1 kluar dari dadu maka angka jadi reset nol ,play pindah ke 
            pemain asatunya begitu strusnya sampai angka 100

*/
let scores, roundScore, activePlayer;

scores = [0, 0]; //gloal score variable
roundScore = 0;
activePlayer = 0; //index utk pemain active roling dice/dadu

//kalau mau masukan text dgn stylenya maka pakai innerHtlm

//test coba matikan display img/dadu sblum dimulai /atau saat reset

//event btn-roll klik

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//btn-roll
document.querySelector('.btn-roll').addEventListener('click', function () {
  //kita mau mainclick button roll yg pertama

  //1.ambil random number
  dice = Math.floor(Math.random() * 6) + 1;
  // 2.dipslay result d current0 (awla pemain player 0) & display juga dice/dadunya
  let diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = `./image/dice-${dice}.png`; //tampilkan gambar dice yg dinamyc brdasarkan source
  //dan piliha ndari random dice/selecksi gambarnya random

  //3.update round score if the rolled number wasNOT ==1
  if (dice !== 1) {
    //add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    //next player
    nextPlayer();
  }
});

//btn hold
document.querySelector('.btn-hold').addEventListener('click', function () {
  //add CURRENT score to Global score
  scores[activePlayer] += roundScore;

  //update the UI
  document.querySelector('#score-' + activePlayer).textContent =
    scores[activePlayer];

  //check if player won the game
  if (scores[activePlayer] >= 25) {
    document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
    //
  } else {
    //next player
    nextPlayer();
  }
});

/* kaidah DRY */

function nextPlayer() {
  //nextPlayer
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  //jika di 1 maka dia harus reset ditulisan curent-0 atau curent-1
  //dan active yaitu bulatan merah pindah ke player yg lain mis tadi 0 skrgn bulatan merah di inser
  //ke palyer 1 nama clas= .active  ini mrupakan:: sbuah css insert utk ditampilkan
  //ktika player yg sedang active rolling dadu

  //reset
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //remove bulat merah class .active
  //  document.querySelector('.player-0-panel').classList.remove('.active');
  //  document.querySelector('.player-1-panel').classList.remove('.active');
  //kita pake toggle jika dia ada maka dihapus jika tidak ada maka di add itu keunikan togggle
  document.querySelector('.player-0-panel').classList.toggle('active'); //ndak pake dot
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none'; //hide diecnya
}

/*
pemyebutan variable
-utk name Player1 
  ngambil id 
           let player1 = document.getElementbyId('name-0');
       
-ukt scode Player1
            let score-0 = document.querySelector('.score-0'); //tulisan besar di bawah kata Player1

-utk kota merah Player1 dibawah :( ini kotaknya pada class :player-current-box)
    .player-current-score ( kotak kecil dalam merah)
      idnya yg bedain yg dimerah :#current-0 nah 0 nya angka kita kasih  ke /simpan di activePlayer 
      supaya kalau pindah2 kita tinggal ganti angkanya 
      
    -current-0 atau current-1 angka /nilai dadu waktu di roll dicelaj disini 
    -curent0 = document.querySelector('#current-0)

    -utk button smua pake class manggilnya:
    btn-New-game 
     btn-new = docuemnt.querySelecttor('.btn-new') //play new game ini reset semua
     btn-Hold =doucment.querySelector('.btn-hold) //utk tahan dan dipslay angka yg kita punya trakhir sblum pindah plyaer
     btn-roll =docuemnt.querySelector(.btn-roll) //ini utk roloing dadunya tampilka  angka di curent dan 
                                                   tambahkan angka nilai totalCurent jika tidak 1 maka tambahkan trus di 
                                                   total curent sblum tombol btn-hold ditekan utk dipslay angka terupdate
      
      
                                                   ditulis di .score-0
 



 //catatan atas:
//ambil nilai dari tulsan besar dibawah nama player
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
dice = Math.floor(Math.random() * 6) + 1;

/*
dadu /dice di gelindingkan berarti 
angka yg kukuar random iutk itu kita buat 
nilai dice didapat damr Math.floor(Math.random()*6)
Math.random*6 = kluarin angka real 1 sd 6
Math.floor ubah jadi integer brapa pun angka di belakang komanya
catatan innerText dan textConntent sama cuman text content utk text yg gak kliatan dia pasti take it!
dak kliatan maksudnya kalau di hide proprtiesnya

// document.querySelector('#score-0').textContent = dice;
// document.querySelector('#current-' + activePlayer).innerText = dice;
document.querySelector(
  '#current-' + activePlayer
).innerHTML = `<em>${dice}</em>`;
*/
