// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let k = document.querySelector('span#kaisu');
k.textContent = kaisu;

// 予想を4回実行する

let kaitou = document.querySelector('button#print');
kaitou.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  
  kaisu = kaisu + 1;
  k.textContent = kaisu;

  let y = document.querySelector('input[name="yoso"]');
  let yoso = Number(y.value);

  let a = document.querySelector('span#answer');
  a.textContent.querySelector('p#result')

  if(kaisu >= 4){
    p.textContent = '答えは '+ kotae +' でした．すでにゲームは終わっています';
  }
  if (kotae == yoso){
    p.textContent = '正解です．おめでとう!';
  } else if(kaisu == 3 && kotae != yoso){
    p.textContent = 'まちがい．残念でした答えは'+ kotae +'です．';
  } else if (kotae <= yoso){
    p.textContent = 'まちがい．答えはもっと小さいですよ';
  } else if (kotae >= yoso){
    p.textContent = 'まちがい．答えはもっと大きいですよ';
  }
}