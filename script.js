const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountCurrencyTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
// const swap = doument.getElementById('swap');

function calculate() {
    // const codeKey = '90090eb878113fc17b55d8d7';
    const amountOneValue = currencyOne.value;
    const amountTwoValue = currencyTwo.value;
    // console.log(amountOne);
    fetch(`https://v6.exchangerate-api.com/v6/90090eb878113fc17b55d8d7/pair/${amountOneValue}/${amountTwoValue}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const conversionRates = data.conversion_rate;
                // console.log(conversionRates);
                rate.innerText = `1 ${amountOneValue} = ${conversionRates} ${amountTwoValue}`
                // const currencyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: amountTwoValue }).format((amountCurrencyOne.value * conversionRates).toFixed(2));
            // Updating DOM
                amountCurrencyTwo.value = (amountCurrencyOne.value * conversionRates).toFixed(2)
            })
}


swap.addEventListener('click', () => {
    // Save Value of Currency One Code to temp variable
    const temp = currencyOne.value;
    // Copy Currency Two Code to Currency One
    currencyOne.value = currencyTwo.value;
    // Copy Currency One Code from temp variable to Currency Two
    currencyTwo.value = temp;
    // Recalculate exchange rate after swap
    calculate();
})


currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountCurrencyOne.addEventListener('input', calculate)
amountCurrencyTwo.addEventListener('input', calculate)

calculate()