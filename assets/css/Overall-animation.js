
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

// section1 animation 

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".section1");
    const powerButton = document.getElementById("powerButton");
    const dynamicText = document.getElementById("dynamicText");

    // Backgrounds & Corresponding Texts or Image Overlays (Appearing at Text Position)
    const backgroundData = [
        { image: "assets/images/sun-setting-silhouette-electricity-pylons.png", text: "Maximizing Efficiency, Enhancing Safety - Your Expert in Power Control", textColor: "text-light" },
        { image: "assets/images/eletrical-bg.jpg", text: "Reliable Power Solutions for a Brighter Tomorrow", textColor: "text-dark" },
        { image: "assets/images/eletrical-bg2.jpg", text: "Innovative Electrical Systems Designed for You", textColor: "text-light" },
        {
            image: "assets/images/eletrical-bg3.png",
            text: "",
            textColor: "",
            imageOverlays: [
                { src: "assets/images/sub-station-room.png" },
                { src: "assets/images/electrical-wires.png" },
                { src: "assets/images/fuese.png" }
            ] // Three images will appear where the text normally appears
        }
    ];

    let index = 0;
    let animationStarted = false;
    let imageIndex = 0;
    let imageInterval;

    // Set initial background manually (static before animation starts)
    section.style.backgroundImage = `url('${backgroundData[0].image}')`;
    dynamicText.innerHTML = backgroundData[0].text;
    dynamicText.className = `fade-text text-light active`;

    powerButton.addEventListener("click", function () {
        if (animationStarted) return; // Prevent multiple clicks
        animationStarted = true;

        powerButton.classList.add("hidden"); // Fade out button
        dynamicText.classList.add("hidden"); // Fade out text

        setTimeout(() => {
            section.classList.add("hidden"); // Fully hide Section 1 (background, text, button)
            setTimeout(startBackgroundAnimation, 1000); // Start animation after fade out
        }, 500);
    });

    function startBackgroundAnimation() {
        section.classList.remove("hidden"); // Bring section back for animation

        function updateBackground() {
            index = (index + 1) % backgroundData.length;

            // Fade out text before change
            dynamicText.classList.remove("active");

            setTimeout(() => {
                section.style.backgroundImage = `url('${backgroundData[index].image}')`; // Change background

                if (backgroundData[index].imageOverlays) {
                    showImageSlideshow(backgroundData[index].imageOverlays, () => {
                        setTimeout(updateBackground, 1000); // Move to the next background after images finish
                    });
                } else {
                    dynamicText.innerHTML = backgroundData[index].text; // Otherwise, show normal text
                    dynamicText.className = backgroundData[index].text ? `fade-text active ${backgroundData[index].textColor}` : `fade-text active`;

                    setTimeout(updateBackground, 4000); // Keep text for 4 seconds before changing
                }

            }, 1000); // Wait for fade-out
        }

        updateBackground(); // Start the animation loop
    }

    function showImageSlideshow(images, callback) {
        if (imageInterval) clearInterval(imageInterval); // Clear previous interval
        let imageCycleCount = 0;

        function showNextImage() {
            const imgData = images[imageIndex]; // Get current image details
            dynamicText.innerHTML = ` 
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
            <img src="${imgData.src}" alt="Display Image" style="
                width: auto; 
                height: 350px; 
                opacity: 0; 
                transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                display: block;
                transform: translateY(-2px);"> <!-- Moves image higher -->
        </div>
    `;
            setTimeout(() => { dynamicText.querySelector("img").style.opacity = 1; }, 100); // Fade in

            imageIndex = (imageIndex + 1) % images.length;
            imageCycleCount++;

            if (imageCycleCount >= images.length) {
                clearInterval(imageInterval); // Stop cycling images after all are displayed
                setTimeout(callback, 3000); // Wait before moving to the next background
            }
        }

        showNextImage(); // Show first image immediately

        // Cycle through images every 3 seconds
        imageInterval = setInterval(showNextImage, 3000);
    }
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
