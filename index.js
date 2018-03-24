const v = [20, 1, 10, 21];
const x = [1, ...v];

const [first, ...second] = v;
console.log(first, second);