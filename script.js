document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Clear previous error messages
      nameError.innerText = "";
      emailError.innerText = "";
      messageError.innerText = "";
      successMessage.style.display = "none";
      
      nameInput.classList.remove("input-error");
      emailInput.classList.remove("input-error");
      messageInput.classList.remove("input-error");

      let isValid = true;

      // Validate Name
      if (nameInput.value.trim() === "") {
        nameError.innerText = "Please enter your name";
        nameInput.classList.add("input-error");
        isValid = false;
      }

      // Validate Email
      const emailValue = emailInput.value.trim();
      if (emailValue === "") {
        emailError.innerText = "Please enter your email";
        emailInput.classList.add("input-error");
        isValid = false;
      } else if (!emailValue.includes("@")) {
        emailError.innerText = "Invalid email";
        emailInput.classList.add("input-error");
        isValid = false;
      }

      // Validate Message
      if (messageInput.value.trim() === "") {
        messageError.innerText = "Please enter a message";
        messageInput.classList.add("input-error");
        isValid = false;
      }

      // If all inputs are valid, show inline success message[cite: 2]
      if (isValid) {
        successMessage.innerText = "Message sent successfully!"; //[cite: 2]
        successMessage.style.display = "block";
        contactForm.reset();
      }
    });
  }
});