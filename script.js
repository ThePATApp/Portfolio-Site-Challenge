const contactForm = document.querySelector('.contact_form');
const submitButton = contactForm.querySelector('button');

contactForm.addEventListener('submit', function(event) {

  event.preventDefault();

  submitButton.textContent = "MESSAGE RECEIVED! THANK YOU!";

  contactForm.reset();

  setTimeout(function() {
 submitButton.textContent = "SEND MESSAGE";
  }, 3000);
});
// Time-of-Day Greeting
const greetingElement = document.getElementById('greeting');
const currentHour = new Date().getHours(); // Returns 0 - 23 based on the visitor's clock

if (currentHour < 12) {
  greetingElement.textContent = "Good morning, welcome!";
} else if (currentHour < 18) {
  greetingElement.textContent = "Good afternoon, welcome!";
} else {
  greetingElement.textContent = "Good evening, welcome!";
}
