function verificar() {
    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const divisor = parseInt(document.getElementById("divisor").value);
    let divisible = false;
    
    for (let i of lista) {
      if (i % divisor == 0) {
        divisible = true;
        break;
      }
    }
  
    if (divisible) {
      document.getElementById("res").innerHTML = `Sí hay números en la lista que son divisibles por: ${divisor}`;
    } else {
      document.getElementById("res").innerHTML = `No hay números en la lista que sean divisibles por: ${divisor}`;
    }
  }
  