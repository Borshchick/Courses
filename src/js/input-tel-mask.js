
 
const input = document.querySelector("#first-tel");
window.intlTelInput(input, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});

const input2 = document.querySelector("#second-tel");
window.intlTelInput(input2, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});