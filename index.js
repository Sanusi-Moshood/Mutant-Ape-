// let slider = document.querySelector('.slider')
// let innerSlider = document.querySelector('.slider-inner')


// let pressed = false
// let startX


// slider.addEventListener('mousedown', (e) => {
//     pressed = true
//     startX = e.offsetX - innerSlider.offsetLeft
//     slider.style.cursor = 'grabbing'
//     scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseenter', () => {
//     slider.style.cursor = 'grab'
// });
// // slider.addEventListener('mouseleave', () => {
// //     slider.style.cursor = 'default'
// // });

// slider.addEventListener('mouseup', () => {
//     slider.style.cursor = 'grab'
// });

// window.addEventListener('mouseup', () => {
//    pressed = false
// });

// slider.addEventListener('mousemove', (e) => {
//     if(!pressed) return;
//     e.preventDefault();

//   const x = e.pageX - slider.offsetLeft
//     const walk = (x - startX) * 2
//     console.log(walk)
//     slider.scrollLeft = scrollLeft - walk
// });



var acc = document.getElementsByClassName ('rdh');
var i;
 for (i = 0; i< acc.length; i++) {
    acc[i].addEventListener('click',
     function () {
        this.parentElement.classList.toggle('road_active')

        var road_description = this.nextElementSibling;

        if (road_description.style.maxHeight) {
            road_description.style.maxHeight = null
            road_description.style.marginBottom = '0px'
        }else {
            road_description.style.maxHeight = road_description.scrollHeight + 'px'
            road_description.style.marginBottom = '10px'
        }
        
     })
 }




// var acc = document.getElementsByClassName ('road_toggle');
// var i;
//  for (i = 0; i< acc.length; i++) {
//     acc[i].addEventListener('click',
//      function () {
//         this.classList.toggle('road_active')

//         var road_description = this.nextElementSibling;

//         if (road_description.style.maxHeight) {
//             road_description.style.maxHeight = null
//         }else {
//             road_description.style.maxHeight = 'px'
//         }
//      })
//  }
