const form = document.querySelector('form');
const status = document.getElementById('status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const time = document.getElementById('time').value;
  const numberofguests = document.getElementById('numberofguests').value;

  // Function to check if the table is available for the specified date and time
  function checkTableAvailability(date, time) {
    // In this example, we will hard-code the available dates and times for simplicity
    const availableTables = {
      '2023-02-20': ['18:00', '20:00'],
      '2023-02-21': ['19:00', '21:00'],
      '2023-02-22': ['17:00', '19:00', '21:00']
    };
    if (availableTables[time]) {
      if (availableTables[time].includes(time)) {
        return true;
      }
    }
    return false;
  }

  if (checkTableAvailability(time, time)) {
    // Table is available, so we can book it
    // In this example, we will simply display a message to the user
    status.innerHTML = `Thank you, ${name}! Your table for ${numberofguests} guests  at ${time} has been booked. A confirmation email has been sent to ${email}.`;
  } else {
    // Table is not available, so we cannot book it
    // In this example, we will simply display a message to the user
    status.innerHTML = `We're sorry, ${name}. The table for ${numberofguests} guests  at ${time} is not available. Please choose a different date or time.`;
  }
});

