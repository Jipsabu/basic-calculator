const Cong2so = (a, b) => {
  return a + b;
};
console.log(Cong2so(3, 4));

const Tru2so = (a, b) => {
  console.log(a - b);
};
Tru2so(3, 5);

const Nhan2so = (a, b) => {
  console.log(a * b);
};
Nhan2so(3, 5);

const ChiaLayDu = (a, b) => {
  console.log(a % b);
};
ChiaLayDu(6, 5);

const ChiaLayNguyen = (a, b) => {
  if (b === 0) {
    console.log('Khong duoc chia cho 0');
  } else console.log(Math.floor(a / b));
};
ChiaLayNguyen(6, 0);

console.log('-----------------------------');

const arr = [1, 2, 6];
console.log(arr);

const CongArr = arr => {
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    n = n + arr[i];
  }
  console.log(n);
};
CongArr(arr);

const ChanLe = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] % 2 === 0) console.log('Day la so chan');
    else console.log('Day la so le');
  }
};
ChanLe(arr);
