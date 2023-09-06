document.addEventListener("DOMContentLoaded", function () {
  let quiz_arr = document.querySelectorAll(".quiz-submit");
  let quiz_blocks = document.querySelectorAll(".quiz-content");
  let quiz_radio = document.querySelectorAll('input[type="radio"]');
  let value;
  const fetchData = () => {
    console.log("fetchData")
    const inputs = document.querySelectorAll("input");
    const values = {};
    inputs.forEach((input, index) => {
      if (input.type !== "submit") {
        if (input.type === "radio") {
            // console.log(input, input.checked)
            // if(!values[input.name] && input.checked){
            //     values[input.name] = input.checked

            // }
            if(input.checked){
                values[input.name] = input.value ? +input.value % 2 !== 0 : false
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
      console.log(index);
      if (value != null && value != undefined) {
        let val_class = document.getElementById(`${value}`);
        console.log(val_class, value);
        quiz_blocks[index].classList.add("d-none");
        val_class.classList.remove("d-none");
        console.log(index, quiz_blocks.length);
        value = null;
        return;
      }
      quiz_blocks[index].classList.add("d-none");
      quiz_blocks[index + 1].classList.remove("d-none");
      if(index === quiz_arr.length-1){
        fetchData()
      }
    });
  });
});
