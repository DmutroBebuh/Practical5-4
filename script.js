function calculate() {
  // Отримання значень меж зміни значень аргументу x та кроку зміни значень аргументу
  var start_x = parseFloat(document.getElementById("start_x").value);
  var end_x = parseFloat(document.getElementById("end_x").value);
  var step = parseFloat(document.getElementById("step").value);

  var resultContainer = document.getElementById("result");

  // Очищення контейнера результату
  resultContainer.innerHTML = "";

  // Обчислення та виведення результатів для кожного значення x
  for (var x = start_x; x <= end_x; x += step) {
    var result = 0;

    // Виконання розгалуженого обчислювального процесу згідно з новими формулами
    if (x < 4) {
      result =(x*x)+Math.E(x, 2);
    } else if (x === 4) {
      result = x+2;
    } else {
      result = Math.sqrt^2(x) + (Math.log(x));
    }

    // Додавання результату до контейнера
    var resultElement = document.createElement("p");
    resultElement.textContent = "f(" + x + ") = " + result.toFixed(2);
    resultContainer.appendChild(resultElement);
  }
}
