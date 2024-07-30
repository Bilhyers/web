function muestra_oculta(id) {
    let div = document.getElementById(id);
    if (div.style.display == ""){
        div.style.display = "none";
    }
    else{
        div.style.display = "";
    }
} 

document.addEventListener('DOMContentLoaded', function() {
    const divs = document.querySelectorAll('.content div');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const run = () => {
        divs.forEach(div => {
            if (isInViewport(div)) {
                div.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', run);
    window.addEventListener('resize', run);
    run(); // Run once on load to check initial position
});
