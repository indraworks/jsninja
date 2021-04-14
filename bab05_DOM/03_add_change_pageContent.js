//bab 03 utk tahu :
//penggunaan innerText
//penggunaan innerHTML

//kit amau ganti tulisan yg ada didalam
const myInner = document.querySelector('#myhello');
myInner.innerText = 'Hello Indra God Morning'; //akan ubah timpa tulisannya
//yg ada di tag p yg ada id myhello

//kalau mau insert pakai += ,contoh
const insertInner = document.querySelectorAll('p');
insertInner.forEach((item) => {
  item.innerText += 'adding new Text';
});

//kalau innerHTML tidak ubah hanya tulisan saja tapi juga prperites
//dari tag teresbeut contoh mau ubah yg ada class error jadi warna biru
//dan bold,dia sama aka timpa tulisan dan properties tag
//disin kita gak hapus properties tag yg lama tapi kita tambah saja
const myInnerHTML = document.querySelectorAll('.error');
myInnerHTML.forEach((item) => {
  item.innerHTML += ' <span style="font-size:40px;">hello Jhon </span>';
  //kalau mau update ya harus ditulis semua dari awal tag yg lama dan propertynya
});

/*
cara ganti syle ada di 
pake span caranya:
https://stackoverflow.com/questions/26890675/can-i-add-a-style-tag-to-innerhtml/26890814
'<span style="font-size:40px">John Doe</span>'
 atau 

 Style tags are meant to contain CSS blocks including selectors, allowing them to style multiple elements at a time. All of the CSS for the style tag should go between the <style> tags themselves.

To do what you're trying to do, you need to return an element that either uses a class that has defined styles or inline styles like so:

cell4.innerHTML = '<span style="font-size:40px">John Doe</span>';
OR

cell4.innerHTML = '<span class="fs40">John Doe</span>';
where the CSS .fs40 { font-size:40px; } in your stylesheet.


*/
