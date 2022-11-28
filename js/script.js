
const nextGaleria = document.getElementById("NextGaleria");
const buttonSeeMore = document.getElementById("ButtonSeeMore");

buttonSeeMore.addEventListener("click", function() {
  nextGaleria.className = 'container pt-2 pb-5';
  nextGaleria.innerHTML = `
    <div class="row pb-4 justify-content-start justify-content-sm-center">
      <div class="col-lg-6 col-12 pe-lg-5 pe-3 ps-lg-0 ps-3 pb-3 pb-0">
        <img
          class="galery-img-1 border-gelery-img object-fit-cover"
          src="../img/galeria/geleria-9.jpeg" alt="galeria-1"
        >
      </div>
      <div class="col-lg-6 col-12 row pe-md-3 ps-md-1 pe-lg-4 pe-0 ps-lg-2 ps-3 pb-3 pb-0">
        <div class="col-6 pe-2">
          <img
            class="galery-img-2 border-gelery-img object-fit-cover"
            src="../img/galeria/galeria-10.jpeg" alt="galeria-1"
          >
        </div>
        <div class="col-6 pe-lg-2 pe-0">
          <img
            class="galery-img-2 border-gelery-img object-fit-cover"
            src="../img/galeria/galeria-11.jpeg" alt="galeria-1"
          >
        </div>
        <div class="col-12 pt-3 pe-lg-1 pe-0">
          <img
            class="galery-img-3 border-gelery-img object-fit-cover"
            src="../img/galeria/galeria-12.jpeg" alt="galeria-1"
          >
        </div>
      </div>
    </div>
  `;
  buttonSeeMore.className = 'd-none';
});

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
    translateY: [-600, 6],
    scale: [5,1],
    endDelay: 1000,
    easing: "easeOutExpo",
    duration: 1500
  })
}

replaceContentAnimation(".text");
replaceContentAnimation(".text2");
