document.getElementById('convert-btn').addEventListener('click', () => {
  const numberInput = document.getElementById('number').value.trim();
  const outPutE = document.getElementById('output');

  if (numberInput === '' || Number.isNaN(numberInput)) {
    outPutE.textContent = 'Please enter a valid number.';
    return;
  }

  const number = parseInt(numberInput, 10);

  if (number < 1) {
    outPutE.textContent ='Please enter a number greater than or equal to 1.';
    return;
  }

  if (number > 3999) {
    outPutE.textContent ='Please enter a number less than or equal to 3999.';
    return;
  }

  const romanNumeral = convertToRoman(number);
  outPutE.textContent = romanNumeral;
});

function convertToRoman(num) {
  let romanNumeral = '';
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  for (let i = 0; i < romanNumerals.length; i += 1) {
    while (num >= romanNumerals[i].value) {
      romanNumeral += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }

  return romanNumeral;
}
