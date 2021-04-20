"use strict";

window.addEventListener("DOMContentLoaded",()=>{


const cookiesBtn = document.querySelector(".cookies__button"),
cookies = document.querySelector(".cookies");



cookiesBtn.addEventListener('click', () =>{
  fade(cookies);
});

function fade(element) {
  let op = 1;  
  let timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 50);
}
function unfade(element) {
  let op = 0.1;  
  element.style.display = 'block';
  let timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
}


setTimeout(()=>unfade(cookies),3000);

});