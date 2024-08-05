document.addEventListener('DOMContentLoaded', (event) => {
    // Create a button element
    const button = document.createElement('button');
    button.innerText = 'Click Me';
    button.id = 'alertButton';

    // Append the button to the body
    document.body.appendChild(button);

    // Add event listener to the button
    button.addEventListener('click', () => {
        alert('Hello! This is an alert message.');
    });
});
