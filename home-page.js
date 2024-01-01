var mainContain = document.querySelector(".main-container");
var childContain = document.querySelectorAll(".diver");


var currentIndex = 0;
var intervalId;

document.getElementById("arrow-left").addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + childContain.length) % childContain.length;
  transformationScroll();
  scrollStopped();
  setTimeout(() => {
    scrollStarted();
  },2000)
});

document.getElementById("arrow-right").addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % childContain.length;
  transformationScroll();
  scrollStopped();
  setTimeout(() => {
    scrollStarted();
  },2000)

})

function updateTransform() {
  currentIndex = (currentIndex+1)% childContain.length;
  transformationScroll();
  if (currentIndex === 0) {
    mainContain.style.transition = 'none'; 
    setTimeout(() => {
      mainContain.style.transform = 'translateX(0)';
      mainContain.style.transition = 'transform 1s ease-in-out'; 
    }, 1000); 
  }
}

function transformationScroll() {
  const transValue = -currentIndex*100;
  mainContain.style.transform =  `translateX(${transValue}vw)`;
}

function startScrollInterval() {
  intervalId = setInterval(updateTransform, 2000);
}

startScrollInterval(); 

function scrollStopped() {
  clearInterval(intervalId);
}

function scrollStarted() {
  startScrollInterval();
}

function stopScroll(element) {
  clearInterval(intervalId);
}

function startScroll(element) {
  startScrollInterval();
}

