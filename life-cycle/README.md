# LifeCycle

Ejercicio para entender los ciclos de vida de un componente de Angular.

# Ejercicio propuesto

Después de entender el código, se propone el siguiente ejercicio:

- Añadir un Input al componente counter que reciba un array de números del 1 al 10 desde el componente app. Al inicializar el componente hay que eliminar los cinco primeros elementos del array y luego sacar el array resultante por consola de manera secuencial (es decir, utilizando un bucle, no sacando el array).

- Renderizar la secuencia de números en pantalla. Se recomiendo utilizar ng-for para ello. Se debe sacar esta secuencia una vez se hayan eliminado los cinco primeros elementos del array

- Crear una función llamada renderName que reciba tres parámetros, name, firstSurname and secondSurname. Con esos tres argumentos, debe formarse un nombre y luego renderizarlo en el template utilizando la función durante la inicialización del componente counter. Estos tres argumentos los debe recibir el componente counter a través de un input (uno para cada uno de los argumentos.)
