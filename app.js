const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");


//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

var height = 1080;
//var dur = ((1+(10/60))*59.97*height);
var dur = (71*height);
//Scenes
let scene = new ScrollMagic.Scene({
  duration: dur,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 0 }, { opacity: 1 });
const textAnim2 = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 150,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
    duration: 150,
    triggerElement: intro,
    triggerHook: 0
  })
    .offset(200)
    .setTween(textAnim2)
    .addTo(controller);

//Video Animation
let accelamount = 0.4; //key variable for delay
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 59.97); //frame rate

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
});
