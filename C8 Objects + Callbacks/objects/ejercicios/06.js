const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let cantidadDeVariables = 0

  for (var prop in objeto){
    cantidadDeVariables += 1
  }
  return cantidadDeVariables
};

module.exports = contarPropiedades;
