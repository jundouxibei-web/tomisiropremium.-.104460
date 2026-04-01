'use strict';
console.log('yaa');
//例題
function goNext0() {
    const btn = document.querySelector('.btn');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index2.html';
  }, 600);
    localStorage.setItem("score", 0);
}

let score = Number(localStorage.getItem("score")) || 0;


const answer1 = "とらんぺっとよシロー"; // 正解（例）
const answer2 = "らびっとよシロー";
const answer3 = "いえすきりすとよシロー";
const answer4 =　"はシロー";
const answer5 =　"こんふりくとよシロー";
const answer6 =　"とんでひにいるなつのむシロー";
const answer7 =　"シローい";
const answer8 =　"いとりふとよシロー";
const answer9 =　"しょうねんよたいシローをいだけ";
const answer10 =　"のどじろひめあおばとよシロー";



//問1
function check1(){
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';

  const input = document.getElementById("toyo1").value;

  if (input === answer1) {
    score += 1; // 1点加算
    document.getElementById("score").textContent = score;
   console.log('+1');
    localStorage.setItem("score", score); // ← 保存
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
  }
  console.log("現在の得点:", score);
}

function goNext1() {
    const btn = document.querySelector('.btn11');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index3.html';
  }, 100);
}

//問2

function check2() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';
  const input = document.getElementById("toyo2").value;

  if (input === answer2) {
    score += 1; // 1点加算
    document.getElementById("score").textContent = score;
   console.log('+1');
    localStorage.setItem("score", score); // ← 保存
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
  }
  console.log("現在の得点:", score);
}


function goNext2() {
    const btn = document.querySelector('.btn22');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index4.html';
  }, 100);
}

//問3

function check3() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';
  const input = document.getElementById("toyo3").value;

  if (input === answer3) {
    score += 1; // 1点加算
    document.getElementById("score").textContent = score;
   console.log('+1');
    localStorage.setItem("score", score); // ← 保存
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
  }
  console.log("現在の得点:", score);
}


function goNext3() {
    const btn = document.querySelector('.btn33');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index5.html';
  }, 100);
}


//問4

function check4() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';
  const input = document.getElementById("toyo4").value;

  if (input === answer4) {
    score += 1; // 1点加算
    document.getElementById("score").textContent = score;
   console.log('+1');
    localStorage.setItem("score", score); // ← 保存
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
  }
  console.log("現在の得点:", score);
}


function goNext4() {
    const btn = document.querySelector('.btn44');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index6.html';
  }, 100);
}


//問5

function check5() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';
  const input = document.getElementById("toyo5").value;

  if (input === answer5) {
    score += 1; // 1点加算
    document.getElementById("score").textContent = score;
   console.log('+1');
    localStorage.setItem("score", score); // ← 保存
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
  }
  console.log("現在の得点:", score);
}


function goNext5() {
    const btn = document.querySelector('.btn55');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index7.html';
  }, 100);
}



//問６

function check6() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';
  const input = document.getElementById("toyo6").value;

  if (input === answer6) {
    score += 1; // 1点加算
    document.getElementById("score").textContent = score;
   console.log('+1');
    localStorage.setItem("score", score); // ← 保存
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
  }
  console.log("現在の得点:", score);
}


function goNext7() {
    const btn = document.querySelector('.btn66');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index8.html';
  }, 100);
}


//問7

function check7() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';
  const input = document.getElementById("toyo7").value;

  if (input === answer7) {
    score += 1; // 1点加算
    document.getElementById("score").textContent = score;
   console.log('+1');
    localStorage.setItem("score", score); // ← 保存
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
  }
  console.log("現在の得点:", score);
}


function goNext8() {
    const btn = document.querySelector('.btn77');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index9.html';
  }, 100);
}

//問8

function check8() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';
  const input = document.getElementById("toyo8").value;

  if (input === answer8) {
    score += 1; // 1点加算
    document.getElementById("score").textContent = score;
   console.log('+1');
    localStorage.setItem("score", score); // ← 保存
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
  }
  console.log("現在の得点:", score);
}


function goNext9() {
    const btn = document.querySelector('.btn88');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index10.html';
  }, 100);
}

//問9

function check9() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';
  const input = document.getElementById("toyo9").value;

  if (input === answer9) {
    score += 1; // 1点加算
    document.getElementById("score").textContent = score;
   console.log('+1');
    localStorage.setItem("score", score); // ← 保存
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
  }
  console.log("現在の得点:", score);
}


function goNext10() {
    const btn = document.querySelector('.btn99');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index11.html';
  }, 100);
}

//問10

function check10() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';
  const input = document.getElementById("toyo10").value;

  if (input === answer10) {
    score += 1; // 1点加算
    document.getElementById("score").textContent = score;
   console.log('+1');
    localStorage.setItem("score", score); // ← 保存
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
  }
  console.log("現在の得点:", score);
}


function goNext11() {
    const btn = document.querySelector('.btn1010');
btn.classList.add('move-out');
  setTimeout(() => {
    location.href = 'index12.html';
  }, 100);
}

function check11() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';

if (score >=0){
    if(score<=4){
     document.getElementById("yon").textContent = "君の得点は５点も取れていないみたい！そんな君はとよシロー検定８級不合格レベル！８級は英検５級レベルだから実質小卒並みの知能！もっと精進が必要だね！";
    }
}

if (score >=5){
    if(score<=9){
        document.getElementById('kyu').textContent = "君は得点５点以上を取れているからとよシロー検定３級レベル！とよシローの変化にいち早く気づいて行動できる優秀な人材でもあります！ひとまずおめでとう！";
    }
}

if (score == 10){
        document.getElementById('jyu').textContent = "答え覚えてたんやろカス";
}

}

document.getElementById("result").textContent =  score + "点";



const share_title = `とよシロークイズ...${score}点でした。`;
  const share_twitter = document.getElementById("js-share-twitter");
  share_twitter.setAttribute(
      "href",
      "https://twitter.com/share?url=" + "https://jundouxibei-web.github.io/tomisiropremium.-.104460/" + "&text=" + share_title + "&hashtags=とよシローなにシロークイズ"
  );
