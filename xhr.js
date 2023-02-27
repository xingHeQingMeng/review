const xhr = new XMLHttpRequest();
// 侦听通信状态改变事件
xhr.addEventListener('readystatechange', (e) => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response);
  }
});
xhr.open('get', 'https://www.baidu.com');
xhr.send('');
