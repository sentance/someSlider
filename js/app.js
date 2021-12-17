const sliders = document.querySelectorAll('.slide');

for (const slide of sliders) {
    slide.addEventListener('click', ()=>{
        clearActiveClass()
        slide.classList.add('active')
    })
}

const clearActiveClass = () => {
    for (const slide of sliders) {
        slide.classList.remove('active')
    }
}