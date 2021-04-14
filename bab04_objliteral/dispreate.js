/*
dibuat simulasi dari redux bagi yg masih bingung


*/

const initialState = [{
  nama:'indra',
  alamat:'jl semeru3'
}];

// function ubah(state=initialState,action) {
//   switch(action) {
//     case UBAH_DATA:
//      return {
//        ...state,
//        data:action.payload
//      }
//      default:
//        state
//   }
// }
const marie = {...initialState,nama:'pekok'}

console.log(marie)