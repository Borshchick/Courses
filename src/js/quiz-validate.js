const phoneInput = document.querySelector("#first-tel");
phoneInput.addEventListener("input", function () {
  const sanitizedValue = phoneInput.value.replace(/\D/g, "");
  phoneInput.value = sanitizedValue;
  console.log(phoneInput.value);
});

const emailInput = document.querySelector("#first-email");
const emailInput2 = document.querySelector("#second-email")
emailInput.addEventListener("input", onInput);
emailInput2.addEventListener("input", onInput)

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
function onInput(e) {
    const input = e.target
  if (isEmailValid(input.value)) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
  }
}
