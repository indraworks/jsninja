//TENTANG THROW ERROR INI BAGIAN TERAKHIR LANJUTAN DARI BAGIAN FETCH -ASYNC-AWAIT_PROMISE

/*
ADA 2 HAL YG PERLU DI GRSI BAWAHIN TENTANG tangani error 
1.untuk eroor yg ada di bagian :
const functFinal = async() => {
   bagian 1==>  const response = await fetch(urk)
   bagian 2==> const data = response.json()
    return data
}

pada bagian 1 maka haru sdibuat throw new Error
tapi terlebih dahulu harus chek status response dari sote atau http status 
antara lain jika 200 ok jika 404 server gak bisa dihubungi  atau 401 not valid adress dll
daftar dibawah ini :
Successful responses (200–299),
Redirects (300–399),
Client errors (400–499),
and Server errors (500–599).

   maka kita buat if (response.status != 200) {
        throw new Error( 'Cant Fetch data from server!)
   }

pada bagian 2 diatas error akan dihandle oleh bagian catch  di functFinal
  functFinal().them((resolve)=>{})
              .catch((err)=> {console.log(err.message )})
              .


*/

//sekarang kita implementasikan sehingga jadi patern template kita
//utk buat async function /metode dgn fetch
//kita prakterkan dgn ganti todos jadi todis shinga server eror response

const myurl = 'https://jsonplaceholder.typicode.com/todis';

const FetchAsynAwait = async () => {
  const response = await fetch(myurl); //
  //kita handle error disini utk check response status
  if (response.status !== 200) {
    throw new Error('hi  indra cant fetch the server!');
  }
  const data = await response.json(); //
  return data;
};

//kita console.log functon FetchAsyncawait maka hasilnya masih berupa pending promise
//FetchAsynAwait();

FetchAsynAwait()
  .then((data) => {
    //console.log('resolve', console.log(data));
    data.forEach((item) => {
      console.log(item.title); //kit aekskusi disini
    });
  })
  .catch((err) => {
    //console .log rejected yg berasal dari data disini di excute
    'rejected', console.log(err.message);
  });

//keluaran program ////
//hi  indra cant fetch the server!
