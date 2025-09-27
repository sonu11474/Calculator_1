const btnsEle = document.querySelectorAll("button");
const inputEle = document.querySelector("#result");

for (let i = 0; i < btnsEle.length; i++) {
    btnsEle[i].addEventListener("click", () => {
        const btnValue = btnsEle[i].textContent.trim(); // remove spaces

        if (btnValue === "C") {
            clearResult();
        } else if (btnValue === "=") {
            calculateResult();
        } else {
            appendValue(btnValue);
        }
    });
}

function clearResult() {
    inputEle.value = "";
}

function calculateResult() {
    try {
        inputEle.value = eval(inputEle.value); 
    } catch {
        inputEle.value = "Error";
    }
}

function appendValue(btnValue) {
    inputEle.value += btnValue;
}
