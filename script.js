const display = document.getElementById("display");
      const answer = document.getElementById("answer");

      function appendToDisplay(value) {
        display.value += value;
      }
      function clearDisplay() {
        display.value = "";
        answer.value = "";
      }
      function calculateResult() {
        try {
          const result = eval(display.value);
          answer.value = result;
        } catch (error) {
          answer.value = "error";
        }
      }