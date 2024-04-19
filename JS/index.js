gsap.registerPlugin(ScrollTrigger)

gsap.from('.stylesheet', { 
    y: 400, 
    opacity: 0, 
    duration: 5, 
    ease: "power4.out", 
    stagger: .15,
    scrollTrigger: {
        trigger: ".container-flex",
        markers: true, 
        start: "top 80%",
        markers: true, 

    }

 });
 gsap.from('.bg-image',  {
    xPercent: -100,
    duration: 5,
    opacity: 5,
    ease: "power4.out",
 })
 gsap.from('.lunch-image',  {
    xPercent: -100,
    duration: 5,
    opacity: 5,
    ease: "power4.out",
 })
 