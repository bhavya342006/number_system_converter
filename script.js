document.getElementById('convertBtn').addEventListener('click', convertNumber);

function convertNumber(){
  const num = document.getElementById('num').value.trim();
  const base = parseInt(document.getElementById('base').value, 10);

  if(num === ''){
    alert('Please enter a number.');
    return;
  }

  const decimalValue = parseInt(num, base);
  if(Number.isNaN(decimalValue)){
    alert('Invalid number for the selected base. Check input.');
    return;
  }

  document.getElementById('binary').textContent = decimalValue.toString(2);
  document.getElementById('octal').textContent = decimalValue.toString(8);
  document.getElementById('decimal').textContent = decimalValue.toString(10);
  document.getElementById('hex').textContent = decimalValue.toString(16).toUpperCase();
}
