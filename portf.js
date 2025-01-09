document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Message Sent! Thank you, ${name}. We'll get back to you soon.`);
    } else {
      alert('Please fill in all fields.');
    }
  });
  