document.addEventListener('DOMContentLoaded', () => {
    const interval = 5000; // Interval in milliseconds

    // Select all elements with class 'valuesDisplay'
    const valuesDisplayElements = document.querySelectorAll('.valuesDisplay');

    // Intersection Observer options
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    };

    // Callback function for the Intersection Observer
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let valuesDisplay = entry.target;
                let startValue = 0;
                let endValue = parseInt(valuesDisplay.getAttribute('data-val'));
                let duration = Math.floor(interval / endValue); // Calculate duration for smooth animation
                let plus = '+';

                let counter = setInterval(function() {
                    startValue += 1;
                    valuesDisplay.style.fontSize = '55px';
                    valuesDisplay.textContent = startValue.toLocaleString() + plus; // Display with comma separators
                    if (startValue === endValue) {
                        clearInterval(counter); // Stop the interval when target value is reached
                    }
                }, duration);

                // Unobserve the element once the animation starts
                observer.unobserve(valuesDisplay);
            }
        });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Attach the observer to each .valuesDisplay element
    valuesDisplayElements.forEach(valuesDisplay => {
        observer.observe(valuesDisplay);
    });
});