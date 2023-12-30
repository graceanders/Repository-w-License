const animatedText = document.getElementById('animatedText');

// anime({
//   targets: animatedText,
//   translateX: 250,
//   easing: 'easeInOutQuad', // You can use different easing functions
//   duration: 2000 // Animation duration in milliseconds
// });

anime({
    targets: animatedText,
    translateX: 100,
    translateY: { value: 50, ease: 'easeOutExpo' },
    direction: 'alternate',
    easing: 'easeOutQuad',
    loop: true,
  });