document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("responseMessage").textContent =
    "Thanks for reaching out, Nithish will get back to you soon!";
});