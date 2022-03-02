/* Iterables ******************************

Iterable/iterator protocol
 Iterable : has [Symbol.iterator]() and return Iterator
 Iterator : has next() and retrun object that has {value, done}
*/

// ES5
const list = [1, 2, 3];
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

const str = 'abc';
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//ES6+
for (const i of list){
    console.log(i);
}
for (const i of str){
    console.log(i);
}

//Array
const arr = [1, 2, 3]; 
for (const i of arr) {
    console.log(i);
} 

//Set
const set = new Set([1, 2, 3]);
for (const i of set) {
    console.log(i);
} 

//Map
const map1 = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const i of map1) {
    console.log(i);
} 

/* Generator
The Generator object is returned by a generator function 
and it conforms to both the iterable protocol and the iterator protocol.
*/

//Spread Operator
const a = [1, 2];
//a[symbol.iterator] = null;   --->  error 
console.log([...a, ...[3, 4]]);
console.log([...a, ...[3, 4], ...arr, ...set, ...map1.keys()]);

//make generator
function *odds(a) {
    for (let i = 0; i < a; i++) {
        if(i % 2) yield i;
    }
}

let iter = odds(10);
console.log(iter.next()); // {value: 1, done: false}
console.log(iter.next()); // {value: 3, done: false}
console.log(iter.next()); // {value: 5, done: false}
console.log(iter.next()); // {value: 7, done: false}
console.log(iter.next()); // {value: 9, done: false}

//map 
const products = [
    {name: 't-shirts', price: 150},
    {name: 'hoodies', price: 200},
    {name: 'hats', price: 100},
    {name: 'dresses', price: 300},
    {name: 'pants', price: 250}
  ];

  let names = [];
  for (const p of products) {
    names.push(p.name);
  }
  console.log(names);

  //map function
  const map = (f, iter) => {
    let res = [];
    for (const a of iter) {
      res.push(f(a)); //value that will collect 
    }
    return res;
  };

  console.log(map(p => p.price, products));

  