'use strict';
console.log('yaa');
function goNext0() {
    const btn = document.querySelector('.btn');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index2.html';
  }, 600);
}


function check1() {
    
  document.querySelector('.toi1').style.display = 'none';
  document.querySelector('.kai1').style.display = 'block';
}

function goNext1() {
    const btn = document.querySelector('.btn11');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index3.html';
  }, 100);
}

function check2() {
    
  document.querySelector('.toi2').style.display = 'none';
  document.querySelector('.kai2').style.display = 'block';
}

function goNext2() {
    const btn = document.querySelector('.btn22');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index4.html';
  }, 100);
}




