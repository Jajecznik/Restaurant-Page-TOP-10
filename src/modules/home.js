export default function homeTab() {
    const contentContainer = document.getElementById('content');

    // tab header
    const header = document.createElement('h1');
    header.innerText = "Golden Taste";
    contentContainer.appendChild(header);

    // description container
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('box', 'info');

    // description text
    const infoText = document.createElement('p');
    infoText.innerText = "Welcome to Golden Taste, where culinary mastery meets elegance. Indulge in a symphony of flavors meticulously crafted by our acclaimed chefs, showcasing the finest ingredients sourced globally. Immerse yourself in a dining experience where each dish is a masterpiece, paired with exceptional service in an ambiance of luxury and sophistication. Discover the epitome of gastronomic excellence at Golden Taste.";
    infoContainer.appendChild(infoText);
    contentContainer.appendChild(infoContainer);

    // hours container
    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('box', 'hours');

    // hours header
    const hoursHeader = document.createElement('h2');
    hoursHeader.style.textAlign = "center";
    hoursHeader.innerText = "Hours";
    hoursContainer.appendChild(hoursHeader);

    // days and hours container
    const weekDaysContainer = document.createElement('div');
    weekDaysContainer.classList.add('week-days');

    const daysList = ['Monday:', 'Tuesday:', 'Wednesday:', 'Thursday:', 'Friday:', 'Saturday:', 'Sunday:'];
    const hoursList = ['8am - 10pm', '8am - 10pm', '8am - 10pm', '8am - 10pm', '8am - 10pm', '8am - 10pm', '8am - 10pm'];

    for (let i = 0; i < 7; i++) {
        const dayElement = document.createElement('p');
        const hourElement = document.createElement('p');

        if (i % 2 == 1) {
            dayElement.classList.add('colored');
            hourElement.classList.add('colored');
        }

        dayElement.innerText = daysList[i];
        hourElement.innerText = hoursList[i];

        weekDaysContainer.appendChild(dayElement);
        weekDaysContainer.appendChild(hourElement);
    }

    hoursContainer.appendChild(weekDaysContainer);
    contentContainer.appendChild(hoursContainer);
}


