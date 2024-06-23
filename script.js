// function navAnimation() {
//   var nav = document.querySelector("nav");

//   nav.addEventListener("mouseenter", function () {
//     let tl = gsap.timeline();

//     tl.to("#nav-bottom", {
//       height: "21vh",
//       duration:0.5
//     });
//     tl.to(".nav-part2 h5", {
//       display: "block",
//       duration:0.1
//     });
//     tl.to(".nav-part2 h5 span", {
//       y: 0,
//       stagger: {
//         amount: 0.6,
//       },
//     });
//   });

//   nav.addEventListener("mouseleave", function () {
//     let tl = gsap.timeline();

//     tl.to(".nav-part2 h5 span", {
//       y: 25,
//       duration: 0.3,
//       stagger: {
//         amount: 0.2,
//       },
//     });
//     tl.to("nav-part2 h5", {
//       display: "none",
//       duration: 0.1,
//     });
//     tl.to("nav-bottom", {
//       height: 0,
//       duration: 0.2,
//     });
//   });
// }


// navAnimation();






function page2Animation(){
  var rightElems = document.querySelectorAll(".right-elem");

rightElems.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
      gsap.to(elem.childNodes[3],{
          opacity : 1,
          scale : 1
      })
  })
  elem.addEventListener("mouseleave",function(){
      gsap.to(elem.childNodes[3],{
          opacity : 0,
          scale :0
      })
  })
  elem.addEventListener("mousemove",function(dets){
      gsap.to(elem.childNodes[3],{
          x:dets.x - elem.getBoundingClientRect().x-150,
          y:dets.y - elem.getBoundingClientRect().y-210,
      })
  })
})
}
page2Animation();


function page3VideoAnimation(){
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video")

page3Center.addEventListener("click",function(){
  video.play()
  gsap.to(video,{
      transform:"scaleX(1) scale(1)",
      opacity:1,
      borderRadius:0
      
  })
})
video.addEventListener("click",function(){
  video.pause()
  gsap.to(video,{
      transform:"scaleX(0.7) scale(0)",
      opacity:0,
      borderRadius:"30px"
      
  })
})
}

page3VideoAnimation()


function page5AnimationVedio(){
    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function(elem){
      elem.addEventListener("mouseenter",function(){
       elem.childNodes[3].style.opacity = 1
       elem.childNodes[3].play()
      })
      elem.addEventListener("mouseleave",function(){
       elem.childNodes[3].style.opacity = 0
       elem.childNodes[3].load();
      })
    })
}
page5AnimationVedio()


function page7Animation(){

    gsap.from("#btm7-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm7-part2",
            scroller: "#body",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    
}
page7Animation()







