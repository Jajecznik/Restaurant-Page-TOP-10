export default function menuTab() {
    const drinks = [
        {
            name: "Martini",
            description: "A timeless classic made with gin or vodka, vermouth, and garnished with an olive or lemon twist.",
            price: "$15"
        },
        {
            name: "Old Fashioned",
            description: "Bourbon or rye whiskey muddled with sugar, bitters, and a twist of orange peel.",
            price: "$18"
        },
        {
            name: "Negroni",
            description: "A sophisticated blend of gin, Campari, and sweet vermouth, served with an orange slice.",
            price: "$16"
        },
        {
            name: "Margarita",
            description: "Tequila, triple sec, lime juice, and simple syrup, served with a salted rim.",
            price: "$14"
        }
    ];

    const contentContainer = document.getElementById('content');

    // tab header
    const header = document.createElement('h1');
    header.innerText = "Menu";
    contentContainer.appendChild(header);

    // drink container 
    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('box');

    drinks.forEach(drink => {
        // drink header
        const drinkHeader = document.createElement('h2');
        drinkHeader.innerText = drink.name;
        drinkContainer.appendChild(drinkHeader);

        // drink description
        const drinkDescription = document.createElement('p');
        drinkDescription.innerText = drink.description;
        drinkContainer.appendChild(drinkDescription);

        // drink price
        const drinkPrice = document.createElement('p');
        drinkPrice.classList.add('price');
        drinkPrice.innerText = drink.price;
        drinkContainer.appendChild(drinkPrice);
    });

    contentContainer.appendChild(drinkContainer);
}