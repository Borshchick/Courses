// Очікуємо завантаження сторінки
document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо посилання на елементи DOM
  const final = document.querySelector(".final");
  // const textInputs = document.querySelectorAll(".input-text");
  const checkFinal = document.querySelector(".check-final");
  const quiz_arr = document.querySelectorAll(".quiz-submit");
  const quiz_blocks = document.querySelectorAll(".quiz-content");
  const quiz_radio = document.querySelectorAll('input[type="radio"]');
  const quizErrors = document.querySelectorAll('.quiz-error')
  const emailInput = document.querySelector("#first-email");
  const emailInput2 = document.querySelector("#second-email")
  const emailError = document.querySelector(".quiz-email-error")
  let value; // Змінна для збереження значення обраної радіокнопки
  // Функція для відправлення даних на сервер
  const fetchData = () => {
    const inputs = document.querySelectorAll("input");
    const values = {};
    inputs.forEach((input) => {
      if (input.type !== "submit") {
        if (input.type === "radio") {
          if (input.checked) {
            values[input.name] = input.id.startsWith("Yes");
          }
        } else {
          values[input.name] = input.value;
        }
      }
    });

    console.log(values);

    fetch("./posts.php", {
      method: "POST",
      body: values,
    });
  };
  // Додаємо обробник події для радіокнопок
  quiz_radio.forEach((i) => {
    i.addEventListener("click", function () {
      value = i.getAttribute("value");
    });
  });
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  // Додаємо обробник події для кнопок "Submit" у кожному блоку вікна опитування
  quiz_arr.forEach((item, index) => {
    item.addEventListener("click", function () {
      const textInputsInBlock =
        quiz_blocks[index].querySelectorAll(".input-text");
      const buttons = quiz_blocks[index].querySelectorAll("input[type='radio']");

      const areTextInputsFilled =
        textInputsInBlock.length !== 0 &&
        Array.from(textInputsInBlock).every(
          (input) => input.value.trim() !== ""
        );

      let isRadioChecked = false;

      if (!areTextInputsFilled) {
        buttons.forEach((btn) => {
          if (btn.checked && !isRadioChecked) {
            isRadioChecked = true;
          }
        });
      }

      // console.log(areTextInputsFilled, isRadioChecked);

      if (
        areTextInputsFilled ||
        (!textInputsInBlock.length && !buttons.length) ||
        isRadioChecked
      ) {
        if (value != null && value != undefined) {
          const val_class = document.getElementById(`${value}`);
          quiz_blocks[index].classList.add("d-none");
          val_class.classList.remove("d-none");
          value = null;
          return;
        }
        quiz_blocks[index].classList.add("d-none");
        quiz_blocks[index + 1].classList.remove("d-none");
        quizErrors.forEach((error) => {
          error.style.display = 'none'
        })
      } else {
        textInputsInBlock.forEach((input) => {
          input.classList.add("error");
          if(input.type === "email"){
            const emailValue = emailInput.value.trim();
            const emailValue2 = emailInput2.value.trim()
            if (!validateEmail(emailValue || emailValue2) && emailValue !== "" || emailValue2 !== "") {
              emailError.innerHTML = 'Invalid email'
              return;
            }
          }
        });
        quizErrors.forEach((error) => {
          error.style.display = 'block'
        })
      }
    });
  });

  // Додаємо обробник події для кнопки "Final"
  final.addEventListener("click", () => {
    fetchData(); // Викликаємо функцію для відправки даних на сервер
  });

  // Створюємо масив радіокнопок для перевірки питань
  const questionRadios = [];
  quiz_radio.forEach((input) => {
    if (input.name === "isQuestions") {
      questionRadios.push(input);
    }
  });

  // Додаємо обробник події для кнопки "Check Final"
  checkFinal.addEventListener("click", () => {
    questionRadios.forEach((input) => {
      if (input.checked) {
        const selectedInputValue = input.id.startsWith("Yes");
        if (!selectedInputValue) {
          fetchData(); // Викликаємо функцію для відправки даних на сервер, якщо відповідь "No"
        }
      }
    });
  });
});
