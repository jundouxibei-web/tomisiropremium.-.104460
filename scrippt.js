'use strict';
console.log('yaa');

function goNext() {
    const btn = document.querySelector('.btn');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index2.html';
  }, 600);
}
