const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/posts';
// axios.get('https://api.github.com/users/mapbox').then((response) => {
//   console.log(response.data);
// });

//'https://jsonplaceholder.typicode.com/todos/
var mydata = [];
var datax;
async axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
  console.log(response.data[0]);
   mydata.push(response.data[0]);
});
console.log('datax', mydata);
