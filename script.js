// active hamburger menu
let menuIcon =document.querySelector(".menu-icon");
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active")
});

// profile text 
let text =document.querySelector(".text p");

text.innerHTML = text.innerText.split("").map((char,i)=>
`<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");

// switch between about buttons
const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");

buttons.forEach((button, index)=>{
    button.addEventListener("click",()=>{
        contents.forEach(content => content.style.display ="none");
        contents[index].style.display ="block";
        buttons.forEach(btn => btn.classList.remove("active"));
        botton.classList.add("active");
    });
});

// portfolio fillter
var mixer = mixitup('.portfolio-gallery',{
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});


// Initialize Swiper

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay: 3000,
        disableOnInteraction:false,
    },
    breakpoints:{
        576:{
            sliderperView:2,
            spaceBetween:10,
        },
        1200:{
            sliderperView:3,
            spaceBetween:20,
        },
    }
  });


//   skill Progress bar

// const first_skill =document.querySelector(".skill:first-child");
// const sk_counters = document.querySelectorAll(".counter span");
// const progress_bars = document.querySelectorAll(".skills svg circle");
// window.addEventListener("scroll",()=>{
//       skillsCounter();
// })

// function hasReached(el){
//     let topPosition = el.getBoundingClientRect().top;
//     if(window.innerHeight >= topPosition + el.offsetHeight)return true;
//     return false;

// }
//  function skillsCounter(){
//     if(!hasReached(first_skill))return;
//     progress_bars.forEach(p => p.computedStyleMap.animation = "progress 2s ease-in-out forwards");
//  }

const first_skill =document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");
window.addEventListener("scroll",()=>{
      skillsCounter();
})

function hasReached(el){
    let topPosition = el.getBoundingClient().top;
    if(window.innerHeight >= topPosition + el.offsetHeight){
        console.log("target");
    }
}

function skillsCounter(){
    hasReached(first_skill)
}











