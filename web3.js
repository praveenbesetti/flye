const contentElement = document.querySelector('.page3-content');
const imageContainer = document.querySelector(' .images');

function generateContent() {
    const contents = [{
            title: 'Genderless Kei - Japan\'s Hot',
            text: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017. It\'s offering lots of...'
        },
        {
            title: 'Better Strategy & Quality',
            text: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017. It\'s offering lots of...'
        },
        {
            title: 'Genderless Kei - Japan\'s Hot',
            text: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017. It\'s offering lots of...'
        },
    ];
    const imgUrls = ['/img/page3-img1.jpg', '/img/page3-img2.jpg', '/img/page3-img3.jpg'];

    contents.forEach((item, index) => {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('contentDiv');

        const title = document.createElement('p');
        title.textContent = item.title;
        title.classList.add('page3-title');
        contentDiv.append(title);

        const text = document.createElement('p');
        text.textContent = item.text;
        text.classList.add('content3');
        contentDiv.append(text);

        contentElement.append(contentDiv);

        contentDiv.addEventListener('mouseenter', () => {
            contentDiv.classList.add('contentDiv2');
            imageContainer.src = imgUrls[index];
            text.style.color = 'white';
        });

        contentDiv.addEventListener('mouseleave', () => {
            contentDiv.classList.remove('contentDiv2');
            text.style.color = 'black';
        });
    });
}

generateContent();