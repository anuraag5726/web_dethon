const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const roomtype = document.getElementById('roomtype').value;
  const numberofguests = document.getElementById('numberofguests').value;
  
  // Code to store the booking information in a database or send it to a server
  
  alert(`Thank you for booking ${roomtype} room for ${numberofguests} guests. Your check-in date is ${checkin} and check-out date is ${checkout}. We will send a confirmation email to ${email}.`);
});
==================
const form = document.getElementById('register-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    
  }
  else{
    alert("Registered Sucessfully");
  }

  // Here, you can send the registration data to a server or do something else with it
  console.log('Registration data:', { username, email, password });
});