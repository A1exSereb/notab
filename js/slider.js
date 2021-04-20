const prev = document.querySelector("#btn-prev"),
      next = document.querySelector("#btn-next"),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0

function unfade(element) {
  let op = 0.1;  
  element.style.opacity = 0;
  next.classList.remove('active-btn');
  prev.classList.remove('active-btn');
  let timer = setInterval( () => {
      element.style.opacity = op;
      op += 0.1;
      if (element.style.opacity == 1){
        clearInterval(timer);
        addActive();
    }
  }, 100);
  
}

const activeSlide = n =>{
  for(slide of slides){
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
  unfade(slides[n]);
};
const activeDot = n =>{
  for(dot of dots){
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
};

const currentSlide = index =>{
  activeSlide(index);
  activeDot(index);
}

const nextSlide = () =>{
  if(index == slides.length -1){
    index = 0;
    currentSlide(index);
  }else{
    index++;
    currentSlide(index);
  }
};

const prevSlide = () =>{
  if(index == 0){
    index = slides.length - 1;
    currentSlide(index);
  }else{
    index--;
    currentSlide(index);
  }
};

dots.forEach((dot, ind) =>{
 dot.addEventListener('click',() =>{
  if(index != ind){
    currentSlide(ind);
  index = ind;
  }
 });
});

next.addEventListener('click',() =>{
  if(next.classList.contains('active-btn')){
    nextSlide();
  }
});
prev.addEventListener('click',() =>{
  if(next.classList.contains('active-btn')){
    prevSlide();
  }
});

const addActive = () =>{
  next.classList.add('active-btn');
  prev.classList.add('active-btn');
}



