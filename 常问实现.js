/**
 * 数组去重
 */
const arr = [];

// 1
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; ) {
    if ((arr[i] = arr[j])) {
      arr.splice(j, 1);
    } else j++;
  }
}

// 2
const arr1 = [];
for (var i = 0; i < arr.length; i++) {
  if (arr1.indexOf(arr[i]) < 0) arr1.push(arr[i]);
}
// 3
const newArr = [...new Set(arr)];

/**
 * 判断对象为空
 */
const obj = {};

// 1
JSON.stringify(obj) === '{}';

// 2
function isObjectEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// 3
Object.getOwnPropertyNames(obj).length === 0;

// 4
Object.keys(obj).length === 0;

/**
 * 复制数组
 */

// 1  循环逐一复制
for (let i = 0; i < arr.length; i++) {
  if (i in arr) newArr[i] = arr[i];
}

arr.map((_) => _);

arr.reduce((v, a) => {
  v.push(a);
  return v;
}, []);

// 2 结构符
const newarr = [...arr];

// 3 slice 方法
arr.slice();

// 4 concat 方法
arr.concat();

// 实现一个方法，找出仅存在与A 或 B 中的所有数字

/**
 *
 * @param {Array} arr
 * @param {Array} brr
 */
function getDiff(arr, brr) {
  var onlyArr = arr.filter((item) => !brr.includes(item));
  var onlyBrr = brr.filter((item) => !arr.includes(item));
  return {
    onlyArr,
    onlyBrr,
  };
}
