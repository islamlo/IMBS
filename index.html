document
  .getElementById("installment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const amount = parseFloat(document.getElementById("amount").value); // Total amount
    const cashPayment = parseFloat(
      document.getElementById("cash-payment").value
    ); // Cash payment
    const months = parseInt(
      document.getElementById("installment-months").value
    ); // Installment months

    // Validate inputs
    if (isNaN(amount) || amount <= 0 || isNaN(cashPayment) || cashPayment < 0) {
      alert("Please enter valid amounts.");
      return;
    }

    // Calculate the remaining amount (total amount - cash payment)
    const remainingAmount = amount - cashPayment;

    // Calculate the benefit based on the number of months
    const percentage = installmentRates[months];
    const benefit = remainingAmount * percentage;

    // Calculate total amount with benefit
    const totalAmount = amount + benefit;

    // Calculate the monthly payment
    const monthlyPayment = remainingAmount / months;

    // Update the remaining amount field
    document.getElementById("remaining-amount").value = remainingAmount.toFixed(
      2
    );

    // Update result section
    document.getElementById(
      "total-amount"
    ).textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    document.getElementById(
      "cash-paid"
    ).textContent = `Cash Payment: $${cashPayment.toFixed(2)}`;
    document.getElementById(
      "remaining-amount-result"
    ).textContent = `Remaining Amount: $${remainingAmount.toFixed(2)}`;
    document.getElementById(
      "monthly-payment"
    ).textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById(
      "benefit"
    ).textContent = `Benefit: $${benefit.toFixed(2)}`;
  });
