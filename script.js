const toFadeIn = document.querySelectorAll('.fade-in')
const ToggleVisible= (entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('is-visible')
        }
        else{
            entry.target.classList.remove('is-visible')
        }
    });
}

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0.0, 0.75],
  };

const io = new IntersectionObserver(ToggleVisible, observerOptions);
toFadeIn.forEach((el) =>{
    io.observe(el);
})