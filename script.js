const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();

  if (name && email) {
    alert(`Thanks ${name}, we will contact you on ${email} shortly.`);
    this.reset();
  } else {
    alert("Please fill in your name and email.");
  }
});
