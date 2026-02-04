/* ================= SCROLL REVEAL ANIMATION ================= */

const revealSections = document.querySelectorAll(".section-hidden");

const revealOnScroll = () => {
    const triggerPoint = window.innerHeight - 100;

    revealSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add("section-show");
        }
    });
};

/* ================= NAVIGATION ACTIVE LINK ================= */

const navLinks = document.querySelectorAll(".nav-links a");
const allSections = document.querySelectorAll("section");

const highlightNavOnScroll = () => {
    let currentSectionId = "";

    allSections.forEach(section => {
        const sectionTop = section.offsetTop - 130;
        if (window.scrollY >= sectionTop) {
            currentSectionId = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
};

/* ================= SCROLL EVENT ================= */

window.addEventListener("scroll", () => {
    revealOnScroll();
    highlightNavOnScroll();
});

/* ================= INITIAL LOAD ================= */

revealOnScroll();
highlightNavOnScroll();