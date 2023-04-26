const form = document.querySelector('form');
const status = document.getElementById('status');

form.addEventListener('submit', (event) => {
  //event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const time = document.getElementById('time').value;
  const numberofguests = document.getElementById('numberofguests').value;

  // Function to check if the table is available for the specified date and time
      // In this example, we will hard-code the available dates and times for simplicity
    let availableTables = ['18:00','20:00'];
    if (availableTables.includes(time)) {
      alert(`Thank you, ${name}! Your table for ${numberofguests} guests  at ${time} has been booked. A confirmation email has been sent to ${email}.`);
    
    }
    else{
      alert(`We're sorry, ${name}. The table for ${numberofguests} guests  at ${time} is not available. Please choose a different date or time.`);
    }
  

 
});

