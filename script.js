const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

let test = new Letterize({
    targets: ".animate-me"
});

let animation = anime.timeline({
    targets: test.listAll(),
    delay: anime.stagger(100, {
        grid: [test.list()[0].length, test.list().length],
        from: "center"
    }),
    loop: true
});

animation
    .add({
        scale: 0.5
    })
    .add({
        letterSpacing: "10px"
    })
    .add({
        scale: 1
    })
    .add({
        letterSpacing: "6px"
    });