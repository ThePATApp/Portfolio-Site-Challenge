// 1. Select the form and the submit button
const contactForm = document.querySelector('.contact_form');
const submitButton = contactForm.querySelector('button');

// 2. Listen for the form submission
contactForm.addEventListener('submit', function(event) {
  // Prevent the page from refreshing
  event.preventDefault();

  // 3. Change the button text
  submitButton.textContent = "MESSAGE RECEIVED! THANK YOU!";

  // 4. Clear the input fields
  contactForm.reset();

  // 5. Reset the button back after 3 seconds
  setTimeout(function() {
    submitButton.textContent = "SEND MESSAGE";
  }, 3000);
});

// Dynamic Time-of-Day Greeting
const greetingElement = document.getElementById('greeting');
const currentHour = new Date().getHours(); // Returns 0 - 23 based on the visitor's clock

if (currentHour < 12) {
  greetingElement.textContent = "Good morning, welcome!";
} else if (currentHour < 18) {
  greetingElement.textContent = "Good afternoon, welcome!";
} else {
  greetingElement.textContent = "Good evening, welcome!";
}
