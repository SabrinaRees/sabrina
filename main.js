$(document).ready(function() {
  $('.hamburger-wrapper').click(function() {
      $('.mobile-menu').fadeToggle(300);
      $('.hamburger-menu').toggleClass('active');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const handleSubmit = (event) => {
      event.preventDefault();

      const myForm = event.target;
      const formData = new FormData(myForm);

      fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
      })
          .then(() => {
        
              alert("Vielen Dank für Ihre Nachricht.");

          })
          .catch((error) => alert(error));
  };

  const form = document.querySelector("form[name='contact']");
  form.addEventListener("submit", handleSubmit);
});