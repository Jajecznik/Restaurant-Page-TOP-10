export default function contactTab() {
    const contentContainer = document.getElementById('content');

    // tab header
    const header = document.createElement('h1');
    header.innerText = "Contact";
    contentContainer.appendChild(header);

    // contact container 
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('box');

    // e-mail
    const emailHeader = document.createElement('h2');
    emailHeader.innerText = "E-mail";
    contactContainer.appendChild(emailHeader);

    const emailText = document.createElement('p');
    emailText.classList.add('contact');
    emailText.innerText = "golden@taste.com";
    contactContainer.appendChild(emailText);

    // phone number 
    const phoneHeader = document.createElement('h2');
    phoneHeader.innerText = "Phone Number";
    contactContainer.appendChild(phoneHeader);

    const phoneText = document.createElement('p');
    phoneText.classList.add('contact');
    phoneText.innerText = "+1 416-868-6937";
    contactContainer.appendChild(phoneText);

    // address
    const addressHeader = document.createElement('h2');
    addressHeader.innerText = "Address";
    contactContainer.appendChild(addressHeader);

    const addressText = document.createElement('p');
    addressText.innerText = "290 Bremner Blvd, Toronto";
    contactContainer.appendChild(addressText);

    contentContainer.appendChild(contactContainer);
}
