// Linking Elements from the HTML
const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// Input
convertBtn.addEventListener("click", convertToRoman);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
  convertToRoman();
  }
  });
// Convert to Roman Numerals
function convertToRoman() {
    const inputValue = input.value.trim(); // Get input and remove whitespace
    const inputInt = parseInt(inputValue);

    if (inputValue === "") {
        output.textContent = "Please enter a valid number";
    } else if (isNaN(inputInt) || inputInt < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (inputInt > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        const romanValues = [
            { value: 1000, numeral: "M" },
            { value: 900, numeral: "CM" },
            { value: 500, numeral: "D" },
            { value: 400, numeral: "CD" },
            { value: 100, numeral: "C" },
            { value: 90, numeral: "XC" },
            { value: 50, numeral: "L" },
            { value: 40, numeral: "XL" },
            { value: 10, numeral: "X" },
            { value: 9, numeral: "IX" },
            { value: 5, numeral: "V" },
            { value: 4, numeral: "IV" },
            { value: 1, numeral: "I" }
        ];

        let result = "";
        let num = inputInt;

        for (let i = 0; i < romanValues.length; i++) {
            while (num >= romanValues[i].value) {
                result += romanValues[i].numeral;
                num -= romanValues[i].value;
            }
        }
        output.textContent = result; // Set textContent instead of innerText
    }
}