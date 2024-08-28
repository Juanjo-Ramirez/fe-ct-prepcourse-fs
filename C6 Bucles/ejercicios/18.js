function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let inicio = Math.min (a, b);
  let fin = Math.max (a, b);

  let producto = 1;

  for (let i = inicio; i <= fin; i++){
    producto *= i;
    if (producto === -0){
      return 0
    }
  }
  return producto;
  
}
console.log(productoEntreNúmeros(1, 9))
console.log(productoEntreNúmeros(-5, 5))

module.exports = productoEntreNúmeros;