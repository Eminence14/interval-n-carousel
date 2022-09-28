const slides = document.querySelectorAll('img')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
let length = slides.length
let token = 0; timer = null;

nextBtn.addEventListener('click', () => {
    token++;
    if (token === length) token = 0;
    showSlide();
})

prevBtn.addEventListener('click', () => {
    token--;
    if (token === -1) token = length - 1;
    showSlide();
})

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === token)
        slide.style.gridColumn = `1`
        else {
            slide.style.gridColumn = `2`
            slide.style.gridRow = `1`
        }
    })
}

// timer = setInterval(() => {
//     nextBtn.click()
// }, 5000)