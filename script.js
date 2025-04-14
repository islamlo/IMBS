document.getElementById("installment-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const totalAmount = parseFloat(document.getElementById("amount").value);
    const cashPayment = parseFloat(document.getElementById("cash-payment").value);
    const remainingAmount = totalAmount - cashPayment;
    const months = parseInt(document.getElementById("installment-months").value);

    const installmentRates = {
        2: 0.08,
        3: 0.10,
        4: 0.15,
        5: 0.20,
        6: 0.25
    };

    const percentage = installmentRates[months];
    const benefit = remainingAmount * percentage;
    const totalAmountWithBenefit = remainingAmount + benefit;
    const monthlyPayment = totalAmountWithBenefit / months;

    document.getElementById("total-amount").innerText = `Total Amount: $${totalAmount.toFixed(2)}`;
    document.getElementById("cash-paid").innerText = `Cash Payment: $${cashPayment.toFixed(2)}`;
    document.getElementById("remaining-amount-result").innerText = `Remaining Amount: $${remainingAmount.toFixed(2)}`;
    document.getElementById("monthly-payment").innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById("benefit").innerText = `Benefit: $${benefit.toFixed(2)}`;
});
