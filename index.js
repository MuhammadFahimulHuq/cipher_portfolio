const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,  
})

  function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

let t1 = gsap.timeline({default: {ease:'power4.inOut',duration:2}});
t1.from('.logo',{y:500,scale:2,duration:1.2})
t1.from('nav',{opacity:0,y:-50,duration:1.2})
t1.from('.myname-container h1',{opacity:0,y:-50,duration:1.2},"-=2")
t1.from('.myname-container p',{opacity:0,x:-50,duration:1.2},"-=2")
t1.from('.myname-container h2',{opacity:0,x:50,duration:1.2},"-=2")
t1.from('.hire-me a',{opacity:0,y:50,duration:1.2})
t1.from('.social-container',{opacity:0,scale:0.2,duration:1.2},"-=1")

let sT1 = gsap.timeline({
scrollTrigger:{
    trigger:'.project-client-container',
    start:'center bottom',
    scrub:1
}
})
sT1.from('.card',{ opacity:0,x:-100})

gsap.registerPlugin(CSSRulePlugin);
let skillsTitle= CSSRulePlugin.getRule(".skills-container:after")

let sT2 = gsap.timeline({
scrollTrigger:{
    trigger:'#skills',
    start:'top bottom',
    end:'+=1300',
    scrub:1 ,
   
}
})
// sT2.from(skillsTitle,{x:100})
sT2.from('.card-1',{opacity:0, x: -100})   
sT2.from('.card-4',{opacity:0, x: 100})
sT2.from('.card-5',{opacity:0, x: -100})

let sT3 = gsap.timeline({
scrollTrigger:{
    trigger:'.work-container',
    start:'bottom bottom',
    scrub:1 ,
   
}
})
sT3.from('.work-container a',{opacity:0.1})