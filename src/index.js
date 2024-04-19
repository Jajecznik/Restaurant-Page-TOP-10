import homeTab from './modules/home';
import menuTab from './modules/menu';
import contactTab from './modules/contact';

import './styles.css';
import Icon from './images/icon.png';

const header = document.querySelector('header');
const logo = document.getElementById('logo');

const imageElement = document.createElement('img');
imageElement.src = Icon;
imageElement.alt = "restauront logo";

imageElement.onload = function () {
    let logoPosition = (header.offsetHeight - logo.offsetHeight) / 2;
    logo.style.top = `${logoPosition}px`;
    logo.style.left = `${logoPosition}px`;
};

logo.appendChild(imageElement);

const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');

homeBtn.addEventListener('click', () => {
    clearContent();
    homeTab();
});

menuBtn.addEventListener('click', () => {
    clearContent();
    menuTab();
});

contactBtn.addEventListener('click', () => {
    clearContent();
    contactTab();
});

homeTab();

function clearContent() {
    const content = document.getElementById('content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}
