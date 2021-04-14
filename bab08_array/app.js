let state = {
  contact: [
    { id: 1, name: 'indra' },
    { id: 2, name: 'alfa' },
  ],
};

console.log('state =', state);
//console.log('...state', ...state);

const payload = { id: 3, name: 'lucky' };
let state2 = [
  ...state.contact,
  payload,
];
console.log('state2 =', state2);
