// anime({
//     targets: "svg path",
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 1500,
//     delay: function(el, i) { return i * 250 }
// });

var timeline = anime.timeline({
    easing: 'easeInOutSine',
    duration: 1500,
});

timeline.add({
    targets: "div > svg > path",
    strokeDashoffset: [anime.setDashoffset, 0],
}).add({
    targets: "div > svg > line",
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 500
})

const letters = 'ABCDEFGHIJKLMNOPQRSTUBWXYZ1234567890';
let interval = null;
document.querySelectorAll('.heck').forEach(el => {
    el.onmouseover = event => {  
        let iteration = 0;
        
        clearInterval(interval);
        
        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if(index < iteration) {
                return event.target.dataset.value[index];
              }
            
              return letters[Math.floor(Math.random() * letters.length)]
            })
            .join("");
          
          if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
          }
          
          iteration += 1 / 3;
        }, 30);
    }
});