document.addEventListener("DOMContentLoaded", () => {
    const imgsContainer = document.querySelector('.imgs');
    const dotes = document.querySelector('.dots');
    const animationState = new Map();
    let animationsComplete = false;

    function addImages() {
        const arr = ['/img/page2-img1.png', '/img/page2.img1.png', '/img/page2-img3.png'];

        arr.forEach((element, index) => {
            // Create img element
            const img = document.createElement('img');
            img.className = 'mode';
            img.style.zIndex = '1px'; // Added 'mode' class for animation
            img.src = element;
            img.alt = "image not found";

            // Append image to imgsContainer
            imgsContainer.appendChild(img);

            // Create webDiv element
            const webDiv = document.createElement('div');
            webDiv.classList.add('web');
            webDiv.style.display = 'none';
            webDiv.style.cursor = 'pointer';

            // Create and append the <i> element with FontAwesome icon
            const icon = document.createElement('i');
            icon.classList.add('fa-solid', 'fa-laptop-code', 'fa-2xl', 'aws');
            icon.style.color = '#ffffff';
            webDiv.appendChild(icon);

            // Create and append the first <p> element
            const heading = document.createElement('p');
            heading.textContent = 'WEB DEVELOPMENT';
            heading.classList.add('txt');
            webDiv.appendChild(heading);

            // Create and append the second <p> element
            const paragraph = document.createElement('p');
            paragraph.textContent = 'Morbi sed lacus nec rise finibus fougiat et fermentum ribh. Pellentesque';
            paragraph.classList.add('content2');
            webDiv.appendChild(paragraph);

            // Create and append the <a> element for 'READ MORE'
            const readMoreDiv = document.createElement('div');
            readMoreDiv.classList.add('box');
            readMoreDiv.style.cursor = 'pointer';
            // Create the anchor tag for the link
            const link = document.createElement('a');
            link.href = 'https://www.fylehq.com/';
            link.classList.add('box');
            link.style.textDecoration = 'none'; // Optional: Remove underline
            readMoreDiv.appendChild(link);

            // Create and append the <p> element for 'READ MORE' inside the anchor tag
            const read = document.createElement('p');
            read.textContent = 'READ MORE';
            read.classList.add('read');
            link.appendChild(read);

            // Create and append the <i> element for 'icon' inside the anchor tag
            const icon2 = document.createElement('i');
            icon2.classList.add('fa-solid', 'fa-arrow-right', 'fa-xl', 'icon2');
            icon2.style.color = '#fb095e';
            link.appendChild(icon2);

            webDiv.appendChild(readMoreDiv);

            // Append webDiv after the img
            imgsContainer.appendChild(webDiv);

            // Variable to track whether webDiv is already shown
            let webDivShown = false;

            // Add mouseenter event to show webDiv and activate dot
            img.addEventListener('mouseenter', () => {
                if (!animationsComplete) return; // Disable mouse events during animation

                if (!webDivShown) {
                    // Hide all other webDivs and show current webDiv
                    document.querySelectorAll('.web').forEach(div => {
                        div.style.display = 'none';
                    });
                    img.classList.remove('active2');
                    img.style.display = 'none';
                    webDiv.style.display = 'block';

                    document.querySelectorAll('.dot').forEach(dot => {
                        dot.classList.remove('active');
                    });
                    dotes.children[index].classList.add('active1');
                    dotes.children[index].querySelector('.dot').classList.add('active');

                    webDivShown = true;
                }
            });

            // Add mouseleave event to hide webDiv and deactivate dot
            img.addEventListener('mouseleave', () => {
                if (!animationsComplete) return; // Disable mouse events during animation

                if (webDivShown) {
                    webDiv.style.display = 'none';
                    img.style.display = 'block';

                    // Remove active state from current dot
                    dotes.children[index].classList.remove('active1');
                    dotes.children[index].querySelector('.dot').classList.remove('active');

                    webDivShown = false;
                }
            });

            // Create dot for each image
            const swap = document.createElement('span');
            swap.classList.add('swap');
            const dot = document.createElement('span');
            dot.classList.add('dot');
            swap.appendChild(dot);
            dotes.appendChild(swap);
        });

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5 // Adjusted threshold for better triggering
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animationState.get(entry.target)) {
                    // Add animation class to the image
                    entry.target.classList.add("active2");
                    animationState.set(entry.target, true);
                }
            });
        }, observerOptions);

        const imgElements = imgsContainer.querySelectorAll('img');
        imgElements.forEach(element => {
            observer.observe(element);
            animationState.set(element, false);
        });

        // Listen for animationend event on the last image to enable mouse events
        imgElements[imgElements.length - 1].addEventListener('animationend', () => {
            animationsComplete = true;
        });
    }

    addImages();
});