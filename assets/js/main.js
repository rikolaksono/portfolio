// menu show
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav_toggle", "nav_menu");
// remove menu mobile
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
// scroll section active link
const section = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
// scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

// scroll home
sr.reveal('.home_title', {})
sr.reveal('.home_scroll', {
  delay: 200
})
sr.reveal('.home_img', {
  origin: 'right',
  delay: 400
})
// scroll about
sr.reveal('.about_img', {
  delay: 500
})
sr.reveal('.about_subtitle', {
  delay: 300
})
sr.reveal('.about_profesi', {
  delay: 400
})
sr.reveal('.about_text', {
  delay: 500
})
sr.reveal('.about_social-icon', {
  delay: 600,
  interval: 200
})

// scroll portfolio
sr.reveal('.portfolio_img', {
  interval: 200
})
// scroll contact
sr.reveal('.contact_subtitle', {})
sr.reveal('.contact_text', {
  interval: 200
})
sr.reveal('.contact_input', {
  delay: 400
})
sr.reveal('.contact_button', {
  delay: 600
})