export default function menuTab() {
    const contentContainer = document.getElementById('content');

    const test = document.createElement('p');
    test.innerText = "MENU";
    contentContainer.appendChild(test);
}