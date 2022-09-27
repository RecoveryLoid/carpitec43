var uno = anime({
  targets: '.layer',
  translateY: 5,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  autoplay: true
});

function loop(t) {
  animation.tick(t);
  customRAF = requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

var slowAnimation = anime({
  targets: '.layer-2',
  translateY: 8,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  autoplay: true
});

var rotar = anime ({
  targets: '.rotate-2',
  origin: 'center',
  rotate: 2,
  direction: 'alternate',
  duration: 2000,
  loop: true,
  elasticity: 2000,
  easing: 'easeInOutQuad'

});

var rotarFort = anime ({
  targets: '.rotateFort',
  origin: 'center',
  rotate: 5,
  direction: 'alternate',
  duration: 2000,
  loop: true,
  elasticity: 2000,
  easing: 'easeInOutQuad'

});

function replaceContentAnimation(selector) {
  const elementToSelect = document.querySelector(selector);
  elementToSelect.innerHTML = elementToSelect.textContent.replace(/\S/g, "<span>$&</span>");

  anime.timeline({
    loop: false
  })
  
  .add({
    targets: [selector,'span'],
    translateY: [-600, 0],
    scale: [5,1],
    endDelay: 1000,
    easing: "easeOutExpo",
    duration: 1500
  })
}

replaceContentAnimation(".text");
replaceContentAnimation(".text2");
