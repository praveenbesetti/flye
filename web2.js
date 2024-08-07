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
            // Added 'mode' class for animation
            img.src = element;
            img.alt = "image not found";
            img.style.opacity = 0;

            // Append image to imgsContainer
            imgsContainer.appendChild(img);

            // Create webDiv element
            const webDiv = document.createElement('div');
            webDiv.classList.add('web');
            webDiv.style.display = 'none';
            imgsContainer.appendChild(webDiv);

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

            let anchorElement = document.createElement('a');
            anchorElement.href = 'https://www.fylehq.com/';
            anchorElement.style.textDecoration = "none";
            anchorElement.style.cursor = 'pointer';
            webDiv.appendChild(anchorElement);

            // Create a button element
            let buttonElement = document.createElement('button');
            buttonElement.classList.add('box');
            buttonElement.style.cursor = 'pointer';
            buttonElement
            anchorElement.appendChild(buttonElement);

            // Create a span element for "READ MORE"
            let spanElement = document.createElement('span');
            spanElement.classList.add('read');
            spanElement.textContent = 'READ MORE';

            // Create an icon element
            let iconElement = document.createElement('i');
            iconElement.classList.add('fa-solid', 'fa-arrow-right', 'fa-xl', 'icon2');

            // Append span and icon to the button
            buttonElement.appendChild(spanElement);
            buttonElement.appendChild(iconElement);


            // Variable to track whether webDiv is already shown
            let webDivShown = false;

            // Add mouseenter and touchstart event to show webDiv and activate dot
            img.addEventListener('touchstart', () => {
                // Disable mouse events during animation
                showWebDiv();
            });

            img.addEventListener('', () => {
                if (!animationsComplete) return;
                document.querySelectorAll('.web').forEach(div => {
                    div.style.display = 'none';
                });
                img.classList.remove('active2');
                img.style.opacity = 1;
                img.style.display = 'none';
                webDiv.style.display = 'block';
                webDiv.style.cursor = 'pointer';
                document.querySelectorAll('.dot').forEach(dot => {
                    dot.classList.remove('active');
                });
                dotes.children[index].classList.add('active1');
                dotes.children[index].querySelector('.dot').classList.add('active');

                webDivShown = true; // Disable mouse events during animation

            });

            function showWebDiv() {
                if (!webDivShown) {
                    // Hide all other webDivs and show current webDiv
                    document.querySelectorAll('.web').forEach(div => {
                        div.style.display = 'none';
                    });
                    img.classList.remove('active2');
                    img.style.opacity = 1;
                    img.style.display = 'none';
                    webDiv.style.display = 'block';
                    webDiv.style.cursor = 'pointer';
                    document.querySelectorAll('.dot').forEach(dot => {
                        dot.classList.remove('active');
                    });
                    dotes.children[index].classList.add('active1');
                    dotes.children[index].querySelector('.dot').classList.add('active');

                    webDivShown = true;
                }
            }
            img.addEventListener('mouseenter', () => {
                if (!animationsComplete) return; // Disable mouse events during animation
                showWebDiv();
            });
            // Add mouseleave and touchend event to hide webDiv and deactivate dot
            img.addEventListener('mouseleave', () => {
                if (!animationsComplete) return; // Disable mouse events during animation
                hideWebDiv();
            });

            img.addEventListener('touchend', () => {
                // Disable mouse events during animation
                hideWebDiv();
            });

            function hideWebDiv() {
                if (webDivShown) {
                    img.classList.remove('active2');
                    webDiv.style.display = 'none';
                    img.style.display = 'block';

                    // Remove active state from current dot
                    dotes.children[index].classList.remove('active1');
                    dotes.children[index].querySelector('.dot').classList.remove('active');

                    webDivShown = false;
                }
            }

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
    document.querySelector('.img').display = None;
});