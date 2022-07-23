window.onload = function() {

 console.log("Script funcionando");

}

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