// anime({
    // targets: ".slideFromLeft",
    // duration: 3000,
    // keyframes:[ 
    //     {width: '0'},
    //     {fontSize: '0'},
    //     {borderRadius:'50px'},
    // ],
    // // translateX:[-40, 7],
    // direction:'alternate',
    // // loop: true,
    // easing:   'easeOutBounce',
    // borderRadius: '50px'



// });
anime({
    targets: ".slideFromTop",
    translateY: ['-100%', '0%'],
    duration: 1500,
    easing: 'easeOutElastic'
  });
anime({
    targets: ".slideFromBottom",
    translateY: ['100%', '0%'],
    duration: 1500,
    easing: 'easeOutElastic'
  });
anime({
    targets: ".slideFromLeft",
    translateX: ['-100%', '0%'],
    duration: 1500,
    easing: 'easeOutElastic'
  });
anime({
    targets: ".slideFromRight",
    translateX: ['100%', '0%'],
    duration: 1500,
    easing: 'easeOutElastic'
  });

  anime({
    targets: '.basic-staggering-demo .el',
    translateX: 270,
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
  });