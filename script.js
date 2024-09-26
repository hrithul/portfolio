function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



window.onload = function() {
  // Listen for the form submission
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent the form from being submitted automatically
    event.preventDefault();

    // Get the values of form inputs
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Regular expression for validating email
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    let namePattern = /^[a-zA-Z]+$/;

    // Validate name field (required, at least 3 characters)
    if (name === "" || name.length < 3 || !namePattern.test(name)) {
      alert("Please enter a valid name (at least 3 characters with no special characters and numbers).");
      return;
    }

    // Validate email field (required, proper email format)
    if (email === "" || !emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate message field (required, at least 10 characters)
    if (message === "" || message.length < 10) {
      alert("Please enter a message (at least 10 characters).");
      return;
    }

    // If all validations pass, proceed with sending the email
    alert("Validation successful! Now sending email...");

    // Initialize EmailJS with the correct public key
    emailjs.init("6W4m-x94QidWFEiAS");  // Replace with your actual EmailJS public key

    // Send the email using EmailJS
    emailjs.send("service_0xcw4ou", "template_gggy3og", {
      name: name,
      email: email,
      message: message
    })
    .then(function(response) {
      alert("Message sent successfully!", response.status, response.text);
      // Optionally, reset the form after a successful submission
      document.getElementById("contactForm").reset();
    }, function(error) {
      alert("Failed to send the message. Please try again.", error);
    });
  });
};

