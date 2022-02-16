
function getInputValue(inputId) {
    const input = document.getElementById(inputId)
    const amountText = input.value
    const amount = parseFloat(amountText)
    input.value = ""
    return amount
}

function updateTotalField(totalFieldId, amount) {
    const total = document.getElementById(totalFieldId)
    const previousTotal = total.innerText
    const currentTotal = parseFloat(amount) + parseFloat(previousTotal)
    total.innerText = currentTotal
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = balanceTotal.innerText;
    if (isAdd == true) {
        balanceTotal.innerText = parseFloat(previousBalanceTotal) + parseFloat(amount)
    }
    else {
        balanceTotal.innerText = parseFloat(previousBalanceTotal) - parseFloat(amount)
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input')
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

})

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input')
    if (withdrawAmount > 0) {
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false)
    }

})