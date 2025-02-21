document.addEventListener('DOMContentLoaded', () => {
  const rangeInput = document.querySelector('.rangeInput');
  const textSample = document.querySelector('.sampleText');
  const fontSelect = document.querySelector('.fontSelector');

  rangeInput.addEventListener('input', (e) => {
    textSample.style.fontSize = `${e.target.value}px`;
  });

  fontSelect.addEventListener('change', (e) => {
    textSample.style.fontFamily = e.target.value;
  });
});
