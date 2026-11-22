// =========================================================
// Portfolio interactions
// =========================================================

document.documentElement.classList.add("js");

const header = document.getElementById("header");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


// ---------------------------------------------------------
// Mobile menu
// ---------------------------------------------------------

function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuToggle.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        setMenu(!navLinks.classList.contains("open"));
    });

    // Close after choosing a link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenu(false));
    });

    // Close on outside click or Escape
    document.addEventListener("click", (e) => {
        if (!header.contains(e.target)) setMenu(false);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setMenu(false);
    });
}


// ---------------------------------------------------------
// Header border/shadow once the page is scrolled
// ---------------------------------------------------------

function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 10);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();


// ---------------------------------------------------------
// Highlight the nav link of the section in view
// ---------------------------------------------------------

const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sections = navAnchors
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = "#" + entry.target.id;
            navAnchors.forEach((a) =>
                a.classList.toggle("active", a.getAttribute("href") === id)
            );
        });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach((s) => sectionObserver.observe(s));
}


// ---------------------------------------------------------
// Fade-in on scroll
// ---------------------------------------------------------

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    // Small stagger for items that share a parent
    revealItems.forEach((el) => {
        const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
        el.style.transitionDelay = Math.min(siblings.indexOf(el) * 80, 320) + "ms";
        revealObserver.observe(el);
    });

} else {
    revealItems.forEach((el) => el.classList.add("visible"));
}


// ---------------------------------------------------------
// Footer year
// ---------------------------------------------------------

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
