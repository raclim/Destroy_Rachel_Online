
window.addEventListener('DOMContentLoaded', (event) => {
  console.log("DOM fully loaded");
});

//particles
let particleOpts = [
  { //normal
    duration: 500,
    easing: 'easeOutQuad',
    speed: .1,
    particlesAmountCoefficient: 10,
    oscillationCoefficient: 80
  },
  { //slow triangle
    type: 'triangle',
    easing: 'easeOutQuart',
    size: 6,
    particlesAmountCoefficient: 4,
    oscillationCoefficient: 2
  },
  { //slower triangle
    type: 'triangle',
    style: 'stroke',
    direction: 'top',
    size: 5,
    duration: 1400,
    speed: 0.1,
    oscillationCoefficient: 15,
    direction: 'right'
  },
  {
    type: 'triangle',
    easing: 'easeOutSine',
    color: 'gray',
    size: 3,
    duration: 800,
    particlesAmountCoefficient: 7,
    speed: 3,
    oscillationCoefficient: 1
  }, {
    duration: 500,
    easing: 'easeOutQuad',
    speed: .1,
    particlesAmountCoefficient: 10,
    oscillationCoefficient: 80,
    color: 'lightblue'
  }
]
// Audio
let snd;
let soundArray = ['fart.mp3', 'knock.wav'];
let pickSound = () => {
  let randSound = soundArray[Math.floor(Math.random()*soundArray.length)];
   snd = new Audio(randSound);
   snd.play();
}

let progressCount = 0;
//effects
const titleBoom = (inTitle) => {
  let particles = new Particles(`#${inTitle}`, particleOpts[0]);
  particles.disintegrate();
  const animation = anime({
    targets: `#${inTitle}`,
    duration: 300,
    easing: 'easeOutQuint',
    opacity: 0,
    scale: 0
  });
  progressCount += 1;
  let newSeg = document.createElement("div");
  newSeg.className = "segment";
  document.getElementById("battery").appendChild(newSeg);
  console.log('progressCount: ', progressCount);
  let batteryLabel = document.getElementById('batteryLabel');
  batteryLabel.innerHTML = `${progressCount}`;
  const battery = anime({
  targets: '.segment',
  width: 20,
  duration: 300,
  easing: 'linear'
  })
  pickSound();
}

const boom = (inTitle, index) => {
  let particles = new Particles(`#${inTitle}`, particleOpts[index]);
  particles.disintegrate();
  const animation = anime({
    targets: `#${inTitle}`,
    duration: 300,
    easing: 'easeOutQuint',
    opacity: 0,
    scale: 0
  });
  progressCount += 1;
  let newSeg = document.createElement("div");
  newSeg.className = "segment";
  document.getElementById("battery").appendChild(newSeg);
  console.log('progressCount: ', progressCount);
  let batteryLabel = document.getElementById('batteryLabel');
  batteryLabel.innerHTML = `${progressCount}`;
  const battery = anime({
  targets: '.segment',
  width: 20,
  duration: 300,
  easing: 'linear',
  delay: function(el, i, l) {
    return i * 500;
  },
  endDelay: 500
  })
  pickSound();
}

const disappear = (inTitle) => {
  const animation = anime({
    targets: `#${inTitle}`,
    duration: 3000,
    easing: 'easeOutQuint',
    opacity: 0,
    scale: 0
  });
  pickSound();
}

//text creators
const createCatDiv = (text, elementID) => {
  let newDiv = document.createElement("div");
  newDiv.className = "body-element";
  let newContent = document.createTextNode(text);
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById(elementID);
  document.body.insertBefore(newDiv, currentDiv);
  const animation = anime({
    targets: newDiv,
    duration: 30000,
    easing: 'easeOutQuint',
    opacity: 0,
    scale: 0
  });
}

const createWorkDiv = (text, elementID) => {
  let newDiv = document.createElement("div");
  newDiv.className = "resume-text";
  let newContent = document.createTextNode(text);
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById(elementID);
  document.body.insertBefore(newDiv, currentDiv);
  // document.body.insertBefore(newDiv, document.body.childNodes[2]);
  const animation = anime({
    targets: newDiv,
    duration: 30000,
    easing: 'easeOutQuint',
    opacity: 0
  });
}

const createSocialDiv = (text, elementID) => {
  let newDiv = document.createElement("div");
  newDiv.className = "social-text";
  let newContent = document.createTextNode(text);
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById(elementID);
  document.body.insertBefore(newDiv, currentDiv);
  const animation = anime({
    targets: newDiv,
    duration: 30000,
    easing: 'easeOutQuint',
    scale: 0.5,
    opacity: 0
  });
}

//animation movements
const zoomRight = (inTitle) => {
  console.log('zoom');
  const animation = anime({
    targets: `#${inTitle}`,
    translateX: 200,
    duration: 3000
  });
}

const zoomLeft = (inTitle) => {
  console.log('zoom left');
  const animation = anime({
    targets: `#${inTitle}`,
    translateX: -50,
    duration: 3000
  });
}
const zoomDown = (inTitle) => {
  console.log('zoom');
  const animation = anime({
    targets: `#${inTitle}`,
    translateY: 50,
    duration: 3000
  });
}

const zoomUp = (inTitle, multiplier) => {
  console.log('zoom');
  const animation = anime({
    targets: `#${inTitle}`,
    translateY: -330 * multiplier,
    duration: 3000
  });
}

const zoomUpNav = () => {
  const navAnimation = anime({
    targets: `#nav-box`,
    translateY: -200,
    duration: 3000
  });
}
