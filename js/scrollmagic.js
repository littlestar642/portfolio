var controller = new ScrollMagic.Controller();
var tween1=new ScrollMagic.Scene({
    triggerElement:"#smallIntro",
    triggerHook:.5,
    reverse:false
})
.setClassToggle(".change1","fadein") // pins the element for the the scene's duration
.addTo(controller);

var tween2=new ScrollMagic.Scene({
    triggerElement:"#workExpirience",
    triggerHook:1,
    reverse:false
})
.setClassToggle(".change2","fadein") // pins the element for the the scene's duration
.addTo(controller);

var tween3=new ScrollMagic.Scene({
    triggerElement:"#workExpirience",
    triggerHook:0,
    reverse:false
})
.setClassToggle(".change3","fadein") // pins the element for the the scene's duration
.addTo(controller);

var tween4=new ScrollMagic.Scene({
    triggerElement:"#fouthSlide",
    triggerHook:.5,
    reverse:false
})
.setClassToggle(".change4","fadein") // pins the element for the the scene's duration
.addTo(controller);