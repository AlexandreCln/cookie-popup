// Nav Toggle
const menuButton = document.querySelector('.nav-button')
const nav = document.querySelector('nav')
const navTitle = document.querySelector('.nav-title')

menuButton.addEventListener('click', () => {
  nav.classList.toggle('nav-slide')
  navTitle.classList.toggle('fade')
})

// all the animations created from a timeline are executed one by one
const tl = gsap.timeline({defaults: {duration: 1.1, ease: Elastic.easeOut.config( 1, 0.4)}})

// Popup Cookie appearance
tl.fromTo('.cookie-container', {scale: .2}, {scale: 1, ease: Power1.easeOut, duration: .5})
// give '<70%' argument to executes this animation at 70% of the previous one
tl.fromTo('.cookie', {opacity: 0, x: -50, rotation: '-45deg'}, {opacity: 1, x: 0, rotation: '0deg'})
// give '<' argument to executes this animation at the same time as the previous one
tl.fromTo('.text', {opacity: 0, x: 50}, {opacity: 1, x: 0}, '<')

// Cookie jump
tl.fromTo('.cookie', {y: 0, rotation: '0deg'}, {y: -20, rotation: '-20deg', yoyo: true, repeat: -1, duration: .55, ease: Power1.easeOut}, '<50%')
tl.fromTo('#crumbs', {y: 0, rotation: '0deg'}, {y: -5, rotation: '-20deg', yoyo: true, repeat: -1, duration: .55, ease: Power1.easeOut}, '<')

// Popup Cookie Dismiss
const cookieButton = document.querySelector('.cookie-button')
cookieButton.addEventListener('click', () => {
  gsap.to('.cookie-container', {duration: .6, display: 'none', opacity: 0, y: -100, ease: Power1.easeOut})
})