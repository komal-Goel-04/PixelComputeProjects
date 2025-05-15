document.addEventListener("DOMContentLoaded", () => {
    const convert = document.getElementById("convert-btn");

    const calculate = (e) => {
        e.preventDefault();

        const amountInput = document.getElementById("amount");
        const amount = parseInt(amountInput.value.trim());
        const from = document.getElementById("from-currency").value;
        const to = document.getElementById("to-currency").value;
        const result = document.getElementById("result");

        console.log(amount);

        if(!from || !to )
        {
            setTimeout(() => alert("Please enter all fields"));
            return;
        }
        if(amount === 0 || isNaN(amount))
        {
            setTimeout(() => alert("Please enter a valid amount"));
            return;
        }
        if(from === "USD" && to === "INR") {
            const ans = amount * 86;
            result.textContent = `${amount} USD = ${ans} INR`;
        }
        else if(from === "INR" && to === "USD") {
            const ans = amount / 86;
            result.textContent = `${amount} INR = ${ans.toFixed(2)} USD`;
        }
    }

    convert.addEventListener("click", calculate);

})