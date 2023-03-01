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

// 是否存在 a ,a == && a==1 为true

var value = -1;
Object.defineProperty(window, 'a', {
  get() {
    return (value += 1);
  },
});
if (a == 0 && a == 1) {
  console.log('true');
}

// 实现一个 add 方法，是计算结果能够满足如下预期
// add(1)(2)(3) = 6,add(1,2,3)=6

function add(...args) {
  if (args.length > 1) {
    return args.reduce((a, b) => a + b);
  }
  if (args.length === 1) {
    return (_) => {
      return (v) => {
        return args[0] + _ + v;
      };
    };
  }
}

// 千分位
/**
 * 本质是要将数字转化为带有千分位字符串
 */
// 方法一 使用正则方法
var str = 12345 + '';
console.info(
  str.replace(/\d{1,3}(?=(\d{3})+$)/, function (s) {
    return (s = ',');
  })
);
//方法二  数字转数组 反转后 添加 , 再反转回来拼接为字符串
console.info(
  str
    .split('')
    .reverse()
    .join('')
    .replace(/(\d{3})+?/g, function (s) {
      return s + ',';
    })
    .replace(/,$/, '')
    .split('')
    .reverse()
    .join('')
);
// 方法三 toLocaleString
(123456).toLocaleString();
