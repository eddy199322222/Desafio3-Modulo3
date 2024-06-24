// Función pintar que recibe el elemento al que se le hace clic
function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
  }
  
  const ele = document.getElementById("ele1");
  



  
  // Agregar evento de clic al elemento
  ele.addEventListener("click", function() {
    pintar(ele, 'yellow'); // Cambia a amarillo al hacer el clic
  });
  