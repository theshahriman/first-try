const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  alert("Thanks! Your message was submitted successfully.");
  form.reset();
});
