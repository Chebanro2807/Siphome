function createScrollAnimation() {
    const anchors = document.querySelectorAll("a[href^='#']")
    for (let anchor of anchors) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            let goto = document.querySelector("section[id=" + anchor.getAttribute("href").slice(1) +"]");
            goto.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }
}

createScrollAnimation();