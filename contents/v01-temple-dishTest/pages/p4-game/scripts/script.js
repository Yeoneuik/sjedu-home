import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

var container = document.getElementById('container');
var state = 'play';
var state02 = 'play';
var dish01 = 'full';
var dish02 = 'full';

var animation = lottieWeb.loadAnimation({
  container: container,
  path: 'https://assets8.lottiefiles.com/packages/lf20_mpkkcjua.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "AnimationName",
});

var animation02 = lottieWeb.loadAnimation({
  container: container02,
  path: 'https://assets5.lottiefiles.com/packages/lf20_9lcf8q7f.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "AnimationName",
});

function toTheNext(){
    console.log('this is happening');
    if(dish01 == 'empty' && dish02 == 'empty'){
    console.log('to the next page');
    
}
}



animation.goToAndStop(10, true);

container.addEventListener('click', () => {
  if(state === 'play') {
   animation.playSegments([10, 19], true);
    state = 'pause1';
      console.log('dish01 한 입');
      
  } else if(state === 'pause1') {
    animation.playSegments([19, 24], true);
    state = 'pause2';
      console.log('dish01 두 입');
      
  } else if(state ==='pause2') {
    animation.playSegments([24, 34], true);
    state = 'pause3';
      console.log('dish01 세 입');
      dish01='empty';
      console.log(dish01);
      
      toTheNext();
      
      
  } else{
      console.log('dish01을 이미 다 먹었습니다');
      
  }
});

container02.addEventListener('click', () => {
  if(state02 === 'play') {
   animation02.playSegments([10, 19], true);
    state02 = 'pause1';
      console.log('dish02 한 입');
      
  } else if(state02 === 'pause1') {
    animation02.playSegments([19, 24], true);
    state02 = 'pause2';
      console.log('dish02 두 입');
      
  } else if(state02 ==='pause2') {
    animation02.playSegments([24, 34], true);
    state02 = 'pause3';
      console.log('dish02 세 입');
      dish02='empty';
      console.log(dish02);
      
      toTheNext();
      
  } else{
      console.log('dish02를 이미 다 먹었습니다');
  }
    
    
});

animation.addEventListener('DOMLoaded', () => {
  const p = document.createElement('p');
  p.textContent = 'The animation has just been loaded into the container. Thanks to the DOMLoaded event!';
  container.after(p);
});

var count = 0;

animation.addEventListener('complete', () => {
  count++;
  const p = document.createElement('p');
  let text = `You have played the animation ${count} `;
  let plural = (count === 1) ? 'time' : 'times';
  text += `${plural}. Thanks to the complete event!`
  
  p.textContent = text;
  
  if(count !== 1) {
    document.body.lastChild.textContent = text;
  } else document.body.appendChild(p);
})


