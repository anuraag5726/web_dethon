const form = document.querySelector('#feedback-form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  
  // TODO: validate the inputs
  
  // TODO: send the feedback to the server
  
  alert('Thank you for your feedback!');
  
  form.reset();
}