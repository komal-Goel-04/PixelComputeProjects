document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const copyButton = document.getElementById("copy-btn");
    const slider = document.getElementById("length-slider");
    const lengthDisplay = document.getElementById("length-value");
    const numbersCheckbox = document.getElementById("include-numbers");
    const lettersCheckbox = document.getElementById("include-letters");
    const mixedCheckbox = document.getElementById("include-mixed");
    const punctuationCheckbox = document.getElementById("include-punctuation");
    const generateButton = document.getElementById("generate-btn");
    const clipboardAlert = document.getElementById("clipboard-alert");
    const optionsAlert = document.getElementById("options-alert");
  
    const numbers = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const punctuation = "!@#$%^&*()_+[]{}|;:,.<>?/";
  
    // Update slider value display
    slider.addEventListener("input", () => {
      lengthDisplay.textContent = slider.value;
    });
  
    function showAlert(element) {
      element.classList.remove("hidden");
      setTimeout(() => {
        element.classList.add("hidden");
      }, 2500);
    }
  
    function generatePassword() {
      let charset = "";
      if (numbersCheckbox.checked) charset += numbers;
      if (lettersCheckbox.checked) charset += lowercase;
      if (mixedCheckbox.checked) charset += uppercase;
      if (punctuationCheckbox.checked) charset += punctuation;
  
      if (!charset) {
        passwordInput.value = "";
        showAlert(optionsAlert);
        return;
      }
  
      let password = "";
      const length = parseInt(slider.value, 10);
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
  
      passwordInput.value = password;
    }
  
    function copyPassword() {
      const password = passwordInput.value;
      if (!password) return;
      navigator.clipboard.writeText(password).then(() => {
        showAlert(clipboardAlert);
      });
    }
  
    generateButton.addEventListener("click", generatePassword);
    copyButton.addEventListener("click", copyPassword);
  });
  