/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// emial js integrate
  // Initialize EmailJS with your user ID
  emailjs.init('xJczW25BwYvEu6S51');

  // Handle form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);


    // Send the email using EmailJS
    emailjs.send("service_sp6m68x", "template_uo2qcla", {
      from_name: formData.get('from_name'),
      to_name: "freekyajmal@gmail.com",
      username: formData.get('username'),
      mobilenumber: formData.get('mobilenumber'),
      message: formData.get('message'),
    }).then(function(response) {
      console.log('Email sent:', response);
      // Optionally, display a success message or redirect to a thank you page
      alert('Email sent successfully! We will Contact You Soon!');
    }, function(error) {
      console.error('Email failed to send:', error);
      // Optionally, display an error message to the user
      alert('Email failed to send. Please try again later.');
    });
  });