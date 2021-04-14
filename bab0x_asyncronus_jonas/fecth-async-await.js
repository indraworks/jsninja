//ini bagian terakhir

//kit asudha gunakan promise ingar promiese selalu melakukan kembalian obect
//utk ambil data harus diambil dgn 2 then ,then pertama adalah utk ambil data json
//dan harus ada nilai return utk dieksusi then berikutnnya
//then berikutnya bisa langsunng esksusi dgn forEach atau map  diimpan di const varibale loacl
//atau bisa dgn disimpan divariable luar brupada array varArray=[],hasil eksusi forach itemvararray
//masukan di sini
//ok kita lanjut dgn fecth async await ,
// await akan selalu dipakai jika kit aakses sebuah procedure/metode  dimasukan dlam variable
//kit amnggunakann fungsi reference
//nah hasil semua dgn melakukan panggil fungsi referencenya

//INI SANGAT PENTIN DAN BEDA YA  KALAU DI ASYNC AWAIT MAKA FUNCTIONNYA MREUPAKAN CALL BACK FUNCTION
//DAN DITARUH DALAM FUNGIS REFERENCE DAN HASILNYA MASIH BERUPA PROMISE PENDING
//NAH EKSUSI THENNYA DISINI SAMA KAYA PROMISE TADI ADA DUA RESOVE DAN CATCH
//BARU BISA DI PRINT

const myurl = 'https://jsonplaceholder.typicode.com/todos';

const FetchAsynAwait = async () => {
  //PENJELASAN :disipan di fungsi
  const response = await fetch(myurl); // masukan ke response constanta json
  const data = await response.json(); // stah daapt json dapat data  tidak pake then
  return data; //hasil semua ini dimasukan dalam data
};

//kita console.log functon FetchAsyncawait maka hasilnya masih berupa pending promise
FetchAsynAwait();
//NAH POINT PENTINGNY ADISINI ! YIATU HASIL PROMISE HARUS DIOLAH DGN THEN JIKA RESOLVE DAN
//DIOLAH DGN  .THEN ( akalau reoslve) dan DENGAN CTACH ( kalau reject)

FetchAsynAwait()
  .then((data) => {
    //console.log('resolve', console.log(data));
    data.forEach((item) => {
      console.log(item.title); //kit aekskusi disini
    });
  })
  .catch((err) => {
    'rejected', console.log(err);
  });
