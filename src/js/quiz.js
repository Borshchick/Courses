document.addEventListener("DOMContentLoaded", function () {
  const final = document.querySelector(".final");
  const checkFinal = document.querySelector(".check-final");
  const quiz_arr = document.querySelectorAll(".quiz-submit");
  const quiz_blocks = document.querySelectorAll(".quiz-content");
  const quiz_radio = document.querySelectorAll('input[type="radio"]');
  let value;
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
  };
  quiz_radio.forEach((i) => {
    i.addEventListener("click", function () {
      value = i.getAttribute("value");
    });
  });

  quiz_arr.forEach((item, index) => {
    item.addEventListener("click", function () {
      if (value != null && value != undefined) {
        const val_class = document.getElementById(`${value}`);
        quiz_blocks[index].classList.add("d-none");
        val_class.classList.remove("d-none");
        value = null;
        return;
      }
      quiz_blocks[index].classList.add("d-none");
      quiz_blocks[index + 1].classList.remove("d-none");
    });
  });

  final.addEventListener("click", () => {
    fetchData();
  });

  const questionRadios = [];

  quiz_radio.forEach((input) => {
    if (input.name === "isQuestions") {
      questionRadios.push(input);
    }
  });

  checkFinal.addEventListener("click", () => {
    questionRadios.forEach((input) => {
      if (input.checked) {
        const selectedInputValue = input.id.startsWith("Yes");
        if (!selectedInputValue) {
          fetchData();
        }
      }
    });
  });
});
