gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.h2-meet',
        start:'top 70%',
        end:'bottom 30%',
        scrub: 2,
        stagger: 0.5,
    }
})

tl.to('.h2-meet', {wordSpacing: '10rem', duration:2})
.to('.h2-meet-1', {x:'10rem', ease: "slow(0.7, 0.7, false)", duration:1,},  '<0.5')
.to('.h2-meet-2', {x:'-7rem', ease: "slow(0.7, 0.7, false)", duration:1,},  '<0.1')




gsap.from(".split", {
    yPercent: 200,
    letterSpacing: 100,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
});


const ttl = gsap.timeline({
    scrollTrigger:{
        trigger: '.meet-container',
        start:'top 70%',
        end:'bottom 30%',
        scrub: 2,
        stagger: 0.5,
    }
})

ttl.to('.sl1', {x: '200rem', duration:1, ease: 'sine.in'})
ttl.to('.sl2', {x: '-200rem', duration:1, ease: 'sine.in'}, '<')



const tt = gsap.timeline({
    scrollTrigger:{
        trigger:'.roadmap_container',
        start:'top 80%',

}    
})

tt.from('.road_head_text', {
    x: '-500', 
    duration: 1,
    stagger: 0.2,

 })
 .from('.roadmap_div', {
    x: "100%",
    duration: 1,
    stagger: { 
        each: 0.1,
        from: "top",
        ease: "power2.inOut",
      },
 }, '<0.5')


const t = gsap.timeline({
    scrollTrigger:{
        trigger:'.bg-fixed',
        start:'top 80%',
}    
})

t.from('.intro_container', {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, 
    duration: 3,

 })
 .from('.card', {
    transform: 'translate(0px, 0px)',
    rotate:0,
    duration: 1,
    scrollTrigger:{
        trigger:'.intro_image',
        start:'top 80%',
        scrub:0.002
} 
 }, '<1')
 .from('.introduction', {
    paddingBottom: '50rem',
    scrollTrigger:{
        trigger:'.intro_image',
        start:'bottom 80%',
        scrub:2
} 
 }) 


//  translate(0px, 0px) rotate(0deg);


//  translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(4deg) skew(0deg, 0deg);