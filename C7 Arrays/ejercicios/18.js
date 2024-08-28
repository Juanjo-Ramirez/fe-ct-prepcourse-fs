function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sumaTotal = resultadosTest.reduce((acumulador, elemento) => acumulador + elemento, 0 / resultadosTest.length)
  return sumaTotal / resultadosTest.length
  
}

module.exports = promedioResultadosTest;
