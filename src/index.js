import './styles.css';
import Icon from './images/icon.png';

const header = document.querySelector('header');
const logo = document.getElementById("logo");

const imageElement = document.createElement('img');
imageElement.src = Icon;
imageElement.alt = "restauront logo";

imageElement.onload = function () {
    let logoPosition = (header.offsetHeight - logo.offsetHeight) / 2;
    logo.style.top = `${logoPosition}px`;
    logo.style.left = `${logoPosition}px`;
};

logo.appendChild(imageElement);
