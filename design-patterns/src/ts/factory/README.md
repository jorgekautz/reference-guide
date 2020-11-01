# Patrón Factory

Para entender mejor la utilidad de este patrón creo que es mejor que nos encontremos con el problema, así que vamos a hacer un pequeño ejercicio y vamos a ponernos a desarrollar una parte de un videojuego.

Cómo en todo videojuego los enemigos son una de las partes más importantes. Tener variedades diferentes de enemigos le da gracia al juego y permite sorprender al jugador. O incluso ir aumentando la dificultad del juego, añadiendo enemigos cada vez más difíciles a medida que se va avanzando en los niveles. Por lo tanto en nuestro videojuego acabamos teniendo un conjunto de clases, cada clase vendría a ser un tipo de enemigo.

Por poner ejemplos, tenemos la clase 'Goomba', la clase 'Koopa' y la clase 'Boo'. Todas estas clases como son enemigos, es decir entidades lógicas del juego. Entidades que hacen algo, que se mueven, que interaccionan con el jugador, que interaccionan con el mapa, heredarían de la misma clase, supongamos la clase 'Entity'. La clase entidad sería una clase que define cualquier cosa que tenga lógica o que tenga cierta interacción con el juego. Esto lo que nos permite es aplicar polimorfismo, por lo tanto cada vez que tengammos que actualizar el estado del juego podemos tratar a todas las entidades por igual.

Siguiendo con el desarrollo del videojuego y para hacerlo ahún más interesante, queremos evitar que el jugador se memorice la ubicación de cada tipo de enemigo. Queremos sorprenderlo, que nunca sepa qué enemigo se va a encontrar a continuación. Por lo tanto de alguna forma tenemos que ir generando enemigos de forma aleatoria. Esto significa que en algún punto de nuestro código, en alguna función tendríamos algún tipo de lógica para crear nuestros enemigos.

Pero, ¿cómo construimos nuestros enemigos? ¿Usamos new Goomba(), new Goomba()? No podemos instanciar una entidad porque no es ninguna clase concreta, es una clase abtracta. Bien, que de alguna forma tenemos que escoger a nuestros enemigos, tenemos que decidir qué enemigo usar. En este caso y cómo queremos sorprender al jugador, hemos decidido hacerlo de forma aleatoria. Por lo que introducimos una función con cierta lógica, con números aleatorios para seleccionar nuestro contructor


[comment]: <> (https://www.youtube.com/watch?v=lLvYAzXO7Ek&list=PLJkcleqxxobUJlz1Cm8WYd-F_kckkDvc8&index=2 | min 2:50)
