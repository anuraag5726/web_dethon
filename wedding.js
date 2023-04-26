const form = document.getElementById('booking-form');
const status = document.getElementById('status');

const availableDates = [
  {
    date: '2023-02-28',
    times: ['10:00', '12:00', '14:00', '16:00', '18:00']
  },
  {
    date: '2023-03-01',
    times: ['11:00', '13:00', '15:00', '17:00', '19:00']
  },
  {
    date: '2023-03-02',
    times: ['12:00', '14:00', '16:00', '18:00', '20:00']
  }
];

// Function to check if the requested date and time are available
function isAvailable(date, time) {
  const availableDate = availableDates.find(d => d.date === date);
  if (availableDate && availableDate.times.includes(time)) {
    return true;
  }
  return false;
}

// Function to submit the booking form
function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  if (!isAvailable(date, time)) {
    status.innerHTML = 'Sorry, the requested date and time are not available.';
    return;
  }

  // Here you can add code to submit the form data to a server or database
  // For this example, we will simply display a confirmation message
  status.innerHTML = `Thank you, ${name}! Your booking for ${guests} guests on ${date} at ${time} has been confirmed.`;
  form.reset();
}

form.addEventListener('submit', submitForm);
