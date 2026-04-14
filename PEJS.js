function calculate() {
    let hours = parseFloat(document.getElementById('workHours').value);
    let staff = document.getElementById('staff').value;

    if (!hours || hours <= 0) {
        alert('Enter valid hours');
        return;
    }

    let rate = 100;
    let gross = hours * rate;

    let taxRate = 0;
    if (gross <= 5000) taxRate = 0.1;
    else if (gross <= 10000) taxRate = 0.15;
    else taxRate = 0.2;

    let tax = gross * taxRate;
    let net = gross - tax;

    document.getElementById('hours').textContent = hours;
    document.getElementById('tax').textContent = tax.toFixed(2);

    document.getElementById('emp').textContent = staff;
    document.getElementById('ps-hours').textContent = hours;
    document.getElementById('gross').textContent = gross.toFixed(2);
    document.getElementById('ps-tax').textContent = tax.toFixed(2);
    document.getElementById('net').textContent = net.toFixed(2);
}

function exportData() {
    alert('Payslip exported successfully!');
}