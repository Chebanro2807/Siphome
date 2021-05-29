function createScrollAnimation() {
    const anchors = document.querySelectorAll("a[href^='#']")
    for (let anchor of anchors) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            console.log(window.innerWidth)
            if (window.innerWidth < 1024) {
                var topOfElement = document.querySelector("section[id=" + anchor.getAttribute("href").slice(1) +"]").offsetTop - 110;
                window.scroll({ top: topOfElement, behavior: "smooth" });
            } else {
                let goto = document.querySelector("section[id=" + anchor.getAttribute("href").slice(1) +"]");
                    goto.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    }
}

createScrollAnimation();