const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filter = arr.filter(el => el <= 5); // [1,2,3,4,5] type:array
// console.log(filter);

const find = arr.find(el => el >= 5); // 5  type:number
// console.log(find);

const every = arr.every(el => el > 2); // false type:boolean
// console.log(every)

const some = arr.some(el => el >= 9);
// console.log(some);

const includes = arr.includes(2, 3); // true type:boolean
// console.log(includes);

const map = arr.map(el => el + 1);
// console.log(map);

const reduce = arr.reduce((a, b) => a + b, 0);
// console.log(reduce);

arr.push(10); // Them 10 vao phia cuoi array
arr.pop();

console.log(arr);

// console.dir(arr)
