//pada sebelumnya sudah bicara tentang bagaiman acaess object dgn this
//dan jagnan pakai arrow function dalam memaki this dlm sbuah object,tapi pakai regular fungsion dlama
//makai this dalam sbuah object
//nah skrg kit abicara tentang array yg didalamnya adalah object

// let blogs = [
//   { title: 'the famouse chicken grepek ', likes: 20 },
//   { title: 'the green tea menu & friends', likes: 105 },
// ];

//console.log(blogs); //hasil merupakan sbuah array object
/*(2) [{…}, {…}]
0: {title: "the famouse chicken grepek ", likes: 20}
1: {title: "the green tea menu & friends", likes: 105}
length: 2
__proto__: Array(0) */

//kita gunakan lagi user sprti bab sblumnya
let user = {
  name: 'crystal',
  age: 30,
  email: 'elemanko.crystal@gmail.co.uk',
  location: 'berlin',
  //didalam blogs berupa data array yg didalamnya adalah object kita sennut objectArray
  blogs: [
    { title: 'the famouse chicken grepek ', likes: 20 },
    { title: 'the green tea menu & friends', likes: 105 },
  ],
  //kita pasang metode yaitu fucntion didalam object literal
  newspaper: ['bali-post', 'jawa-pos', 'kompas', 'cnn-news', 'jakarta-post'],

  //kita buat metode blogs nama arrayBlogs dan bagaiman cara access
  //yaitu dgn this.blogs pakai foreach utk looping tiap object array didalam blogs Aray
  //jadi aadgn meakai this bisa ambil object child dalam user blogs
  arrayBlogs() {
    this.blogs.forEach((blog) => {
      console.log(` titel blogs: ${blog.title}, disuka : ${blog.likes}`);
    });
  },
};

user.arrayBlogs();
