(function () {
    // Elements
    var amountInput = document.querySelector('#amount');
    var paydayInput = document.querySelector('#payday');
    var budget = document.querySelector('span#budget');

    // Values
    var today = new Date();

    // Methods
    var calculateDailyBudget = function (event) {
        var payday = new Date(paydayInput.value);
        var daysLeft = daydiff(payday-today);
        budget.innerHTML = Math.floor(amountInput.value / daysLeft);
    };
    var daydiff = function (diff) {
        return Math.floor((diff / (1000*60*60*24)));
    };

    amountInput.addEventListener('keyup', calculateDailyBudget);
    amountInput.addEventListener('mouseup', calculateDailyBudget);
    paydayInput.addEventListener('keyup', calculateDailyBudget);
    paydayInput.addEventListener('mouseup', calculateDailyBudget);
    paydayInput.addEventListener('change', calculateDailyBudget);
})();