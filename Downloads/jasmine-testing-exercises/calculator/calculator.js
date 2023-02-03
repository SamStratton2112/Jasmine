window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}



// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 60000, years: 10, rate: 2.5};
  const amntInput = document.getElementById('loan-amount');
  amntInput.value = values.amount;
  const yrsInput = document.getElementById('loan-years');
  yrsInput.value = values.years;
  const rateInput = document.getElementById('loan-rate');
  rateInput.value = values.rate; 
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let activeInputs = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(activeInputs))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let n = Math.floor(values.years * 12);
  let i = (values.rate/100)/12;
  return ((i*p)/(1-Math.pow((1+i),-n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const mnthlyPymnt = document.getElementById("monthly-payment");
  mnthlyPymnt.innerText= "$" + monthly;
}
