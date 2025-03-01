
// landing page about section
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in heading and paragraph with slight upward movement
    gsap.fromTo(".heading-align h2, .heading-align p",
        { opacity: 0, y: 30 },
        {
            opacity: 1, y: 0, duration: 1.8, stagger: 0.3, ease: "power3.out",
            scrollTrigger: {
                trigger: ".heading-align",
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            }
        }
    );

    // Animate icons with staggered bounce effect
    gsap.fromTo(".icons-aling div",
        { opacity: 0, y: 50, scale: 0.8 },
        {
            opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.2, ease: "back.out(1.5)",
            scrollTrigger: {
                trigger: ".icons-aling",
                start: "top 90%",
                toggleActions: "play none none none",
                once: true
            }
        }
    );
});


// character limit
document.addEventListener("DOMContentLoaded", function () {
    const messageField = document.getElementById("message");
    const charCountDisplay = document.getElementById("charCount");
    const maxLength = messageField.maxLength;

    messageField.addEventListener("input", function () {
        let currentLength = messageField.value.length;
        charCountDisplay.textContent = `${currentLength} / ${maxLength} characters`;
    });
});

// products section
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in heading & description
    gsap.fromTo(".heading-align h2, .section-description",
        { opacity: 0, y: 30 },
        {
            opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out",
            scrollTrigger: {
                trigger: ".heading-align",
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            }
        }
    );

    // Staggered fade-in for product cards
    gsap.fromTo(".product-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
            opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, ease: "power3.out",
            scrollTrigger: {
                trigger: ".products-container",
                start: "top 90%",
                toggleActions: "play none none none",
                once: true
            }
        }
    );

    // Fade in "View All" button after products appear
    gsap.to(".view-btn", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".view-btn",
            start: "top 90%",
            toggleActions: "play none none none",
            once: true
        }
    });

    // Product card hover effect (subtle bounce)
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.07, duration: 0.3, ease: "power2.out" });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
    });
});

// contact section
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in heading & subtitle
    gsap.fromTo(".section-title, .about-para",
        { opacity: 0, y: 30 },
        {
            opacity: 1, y: 0, duration: 1, stagger: 0.4, ease: "power3.out",
            scrollTrigger: {
                trigger: ".heading-align",
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            }
        }
    );

    // Staggered fade-in for form fields
    gsap.fromTo(".form-group",
        { opacity: 0, y: 50 },
        {
            opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out",
            scrollTrigger: {
                trigger: ".contact-form",
                start: "top 90%",
                toggleActions: "play none none none",
                once: true
            }
        }
    );

    // Fade in submit button after fields
    gsap.to(".contact-btn-sub", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact-btn-sub",
            start: "top 90%",
            toggleActions: "play none none none",
            once: true
        }
    });

    // Button hover animation (subtle scale)
    document.querySelector(".contact-btn-sub").addEventListener("mouseenter", () => {
        gsap.to(".contact-btn-sub", { scale: 1.07, duration: 0.3, ease: "power2.out" });
    });

    document.querySelector(".contact-btn-sub").addEventListener("mouseleave", () => {
        gsap.to(".contact-btn-sub", { scale: 1, duration: 0.3, ease: "power2.out" });
    });
});

// *** about page *** 
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".about-img-class",
        { opacity: 0, x: -100 },
        {
            opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-img-class",
                start: "top 80%",
                toggleActions: "play none none none",
                once: true  // Animation runs only once
            }
        }
    );

    gsap.fromTo(".about-head-main, .about-head-para",
        { opacity: 0, y: 50 },
        {
            opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-head-main",
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            }
        }
    );

    // gsap.fromTo(".about-card",
    //     { opacity: 0, y: 50 },
    //     {
    //         opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out",
    //         scrollTrigger: {
    //             trigger: ".belowabout-card",
    //             start: "top 90%",
    //             toggleActions: "play none none none",
    //             once: true
    //         }
    //     }
    // );
});
// section4

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Image Slide-in from Left
    gsap.fromTo(".section3-image img",
        { opacity: 0, x: -100 },
        {
            opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
            scrollTrigger: {
                trigger: ".section3-image img",
                start: "top 80%",
                toggleActions: "play none none none",
                once: true
            }
        }
    );

    // Text Slide-in from Right
    gsap.fromTo(".section3-text h1, .section3-text .subheading",
        { opacity: 0, x: 100 },
        {
            opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "power3.out",
            scrollTrigger: {
                trigger: ".section3-text",
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            }
        }
    );

    // Highlight Boxes (Staggered Entrance)
    gsap.fromTo(".highlight-left, .highlight-right",
        { opacity: 0, y: 50 },
        {
            opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: "power3.out",
            scrollTrigger: {
                trigger: ".highlight-boxes",
                start: "top 90%",
                toggleActions: "play none none none",
                once: true
            }
        }
    );

    // Progress Bar Animation
    gsap.to(".progress-fill", {
        width: "75%", // Adjust to your progress value
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".progress-bar",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        }
    });
});

// section4
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Help Box Slide-in Animation
    gsap.to(".help-box", {
        opacity: 1,
        x: 0,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".help-box",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        }
    });

    // Staggered Animation for Text & Buttons
    gsap.to(".help-box h2, .help-box p, .buttons button", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".help-box",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        }
    });

    // Button Hover Effect (Scaling)
    document.querySelectorAll(".call-btn, .estimate-btn").forEach(button => {
        button.addEventListener("mouseenter", () => {
            gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power2.out" });
        });

        button.addEventListener("mouseleave", () => {
            gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
    });
});

// numbers timer
function animateCounter(elementId, start, end, duration) {
    let obj = document.getElementById(elementId);
    if (!obj) return; // Ensure the element exists

    let range = end - start;
    let current = start;
    let increment = range / (duration / 10); // Smooth increment
    let stepTime = 10; // Update every 10ms

    function updateCounter() {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            obj.textContent = end + "+";
            return;
        }
        obj.textContent = Math.round(current) + "+";
        requestAnimationFrame(updateCounter);
    }

    requestAnimationFrame(updateCounter);
}

document.addEventListener("DOMContentLoaded", function () {
    animateCounter("experience-count", 0, 5, 2000);
    animateCounter("projects-count", 0, 100, 2000);
    animateCounter("customers-count", 0, 200, 3000);
});
