// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            e.preventDefault(); // Prevent form from submitting
            alert('Please fill in all fields before submitting the form.');
        } else {
            alert('Thank you for reaching out!');
        }
    });
});

// Add to script.js (below form code)
const topBtn = document.getElementById('topBtn');

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
};

topBtn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
