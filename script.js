document.addEventListener("DOMContentLoaded", function () {
  // Get the elements
  const fullNameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const progressText = document.querySelector(".progress-text");
  const progressCircle = document.querySelector(".progress-circle .progress");
  const errorMessage = document.querySelector(".error-message");
  const updateButton = document.querySelector(".update-button");

  // Form validation
  function validateForm() {
    let isValid = true;

    // Full Name validation (non-empty)
    if (fullNameInput.value.trim() === "") {
      isValid = false;
      fullNameInput.classList.add("is-invalid");
    } else {
      fullNameInput.classList.remove("is-invalid");
    }

    // Email validation (basic format check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      isValid = false;
      emailInput.classList.add("is-invalid");
      errorMessage.style.display = "block"; // Show error message
    } else {
      emailInput.classList.remove("is-invalid");
      errorMessage.style.display = "none"; // Hide error message
    }

    // Password validation (minimum 6 characters)
    if (passwordInput.value.trim().length < 6) {
      isValid = false;
      passwordInput.classList.add("is-invalid");
    } else {
      passwordInput.classList.remove("is-invalid");
    }

    // Confirm Password validation (must match password)
    if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
      isValid = false;
      confirmPasswordInput.classList.add("is-invalid");
    } else {
      confirmPasswordInput.classList.remove("is-invalid");
    }

    return isValid;
  }

  // Progress bar update based on form completion
  function updateProgress() {
    let progress = 0;
    if (fullNameInput.value.trim() !== "") progress += 20;
    if (emailInput.value.trim() !== "") progress += 20;
    if (passwordInput.value.trim().length >= 6) progress += 20;
    if (confirmPasswordInput.value.trim() === passwordInput.value.trim())
      progress += 20;

    progressText.textContent = `${progress}%`;
    progressCircle.style.strokeDashoffset = 251.2 - (251.2 * progress) / 100;
  }

  // Event listeners for input changes
  fullNameInput.addEventListener("input", updateProgress);
  emailInput.addEventListener("input", updateProgress);
  passwordInput.addEventListener("input", updateProgress);
  confirmPasswordInput.addEventListener("input", updateProgress);

  // Handle form submission
  updateButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (validateForm()) {
      alert("Profile updated successfully!");
      // You can proceed with form submission (e.g., using AJAX or a regular form submit)
    } else {
      alert("Please fill out the form correctly.");
    }
  });
});
