const inputBoxData = document.querySelector(".input-box");
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.querySelector("#equal");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const btnData = button.dataset.btn;//dataset api
        // const btnData = button.getAttribute("data-btn"); we can also use this instead of dataset api
        if (btnData === 'AC') {
            inputBoxData.value = '';
        }
        else if (btnData === 'DEL') {
            inputBoxData.value = inputBoxData.value.slice(0, -1);
        }
        else if (btnData === '%') {
            inputBoxData.value += '/100';
        }
        else {
            inputBoxData.value += btnData;
        }
    });
});
equalBtn.addEventListener('click', () => {
    try {
        const result = math.evaluate(inputBoxData.value);//math.evaluate() from math.js cdn link
        inputBoxData.value = math.format(result, { precision: 17 });//math.format() from math.js cdn link
    } catch (error) {
        inputBoxData.value = "Error!";
    }
});
