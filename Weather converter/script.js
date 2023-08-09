let celsus = document.querySelector(".celsus"),
  fahrenheit = document.querySelector(".fahrenheit"),
  kelvin = document.querySelector(".kelvin"),
  form = document.querySelector("form");

form.addEventListener("input", convertWeather);

function convertWeather(e) {
  if (e.target.classList.contains("celsus")) {
    let x = e.target.value;
    fahrenheit.value = (((x /5) * 9)+32).toFixed(1);
    kelvin.value = (x +273.15).toFixed(1);
 
  }

  if (e.target.classList.contains("fahrenheit")) {
    let x = e.target.value;
    celsus.value =((x -32) * 5/9).toFixed(1);
    kelvin.value = ((x -32) * 5/9 + 273.15).toFixed(1);
  }

  if (e.target.classList.contains("kelvin")) {
    let x = e.target.value;
    celsus.value = (x -273.15).toFixed(2);
    fahrenheit.value = ((x -273.15) *9/5 +32).toFixed(2);
 
  }
}