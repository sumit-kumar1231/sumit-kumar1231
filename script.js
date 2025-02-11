var tl = gsap.timeline();
tl.from('.my-name span',{
    x: '100vw',
    duration: .5,
    stagger: .2,
})
tl.to('#blackB',{
    height: 0,
    duration: 1,
    delay: 1,
});
tl.to('#greenB',{
    height: 0,
    duration: 1,
    delay: -.75,
})
tl.from('header', {
    opacity: 0,
    delay: .25,
    transform: 'translateX(-100%)',
});
tl.from('header h1, header a', {
    y: -75,
    stagger: .15,
});
tl.from('.banner-text h1, .banner-text h2, .banner-text h3, .banner-text p', {
    x: -75,
    opacity: 0,
    stagger: .25,
});
tl.from('.social-icons a', {
    rotation: 180,
    opacity: 0,
    stagger: .25,
});
tl.from('.banner-btn', {
    x: -75,
    opacity: 0,
    stagger: .25,
});
tl.from('.banner-img', {
    x: 100,
    opacity: 0,
    stagger: .25,
});