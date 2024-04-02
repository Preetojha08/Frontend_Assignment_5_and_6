function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const currency = document.getElementById("currency").value;
    const conversionResult = document.getElementById("conversionResult");

    // Validate amount
    if (isNaN(amount) || amount < 0) {
        conversionResult.innerHTML = "<p>Please enter a valid amount.</p>";
        conversionResult.style.display = "none"; // Hide the result
        return;
    }

    let convertedAmount;
    let convertedCurrency;

    // Perform currency conversion based on selected currency
    if (currency === "CAD") {
        // Convert CAD to USD
        convertedAmount = amount * 1.354;
        convertedCurrency = "USD";
    } else {
        // Convert USD to CAD
        convertedAmount = amount * 0.7386;
        convertedCurrency = "CAD";
    }

    // Display conversion result
    const resultText = `${amount.toFixed(2)} ${currency} = ${convertedAmount.toFixed(2)} ${convertedCurrency}`;
    conversionResult.innerHTML = `<p>${resultText}</p>`;
    conversionResult.style.display = "block"; // Show the result
}
