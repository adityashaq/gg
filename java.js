document.getElementById('detailsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Display pop-up with a random chocolate number
    showPopup(name);
});

function showPopup(name) {
    const randomChocolate = Math.floor(Math.random() * 9) + 1;
    const chocolateMessage = `CONGRATULATIONS! You get ${randomChocolate} CHOCOLATE`;
    document.getElementById('chocolateMessage').innerText = chocolateMessage;

    // Show the popup
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
