# Patrones de diseño

[comment]: <> (<img align="right" src="https://camo.githubusercontent.com/cfcaf3a99103d61f387761e5fc445d9ba0203b01/68747470733a2f2f7472617669732d63692e6f72672f6477796c2f657374612e7376673f6272616e63683d6d6173746572">)

*Lea esto en otros idiomas:* [English](README-en.md)

## ¿Qué son los patrones de diseño?

Hay una cosa que está clara, por muy específico que sea un problema al que se esté enfrentando un desarrollor de software, hay un 99% de posibilidades de que alguien ya se haya enfrentado a un problema similar en el pasado, que se pueda modelar de la misma manera.

Modelado se refirie a que la estructura de las clases que conforma la solución del problema que puede estar ya inventada, porque estás resolviendo un problema común que otra gente ya ha solucionado antes. Si la forma de solucionar ese problema se puede extraer, explicar y reutilizar en múltiples ámbitos, entonces nos encontramos ante un patrón de diseño de software.

## ¿Por qué son útiles los patrones de diseño?

Puede parecer una tontería, pero si no se encuentra utilidad a las cosas se acaban por no usarse. Los patrones de diseño son muy útiles por los siguientes motivos:

### 1. Te hacen ahorrar tiempo

A cualquiera le encantaría encontrar una solución ingeniosa a un problema cuando está modelando sistema informático, es normal, a mí también me pasa. El desarrollo de software es un proceso casi artístico, y el reto mental que supone revierte en una enorme satisfacción personal una vez que se consigue un buen resultado.

Pero hay que ser sinceros: buscar siempre una nueva solución a los mismos problemas reduce la eficacia de cualquier desarrollador, porque está perdiendo mucho tiempo en el proceso. No hay que olvidar que el desarrollo de software también es una ingeniería, y por tanto en muchas ocasiones habrá reglas comunes para solucionar problemas comunes.

Los patrones de diseño atajan ese punto. Una vez se conozcan, podran contar con un conjunto de reglas y herramientas muy probadas, que permitirán la solución de la mayor parte de problemas de forma directa, sin tener que pensar en cómo de válidas son, o si puede haber una alternativa mejor.

### 2. Te ayudan a estar seguro de la validez del código

Un poco relacionado con lo anterior, siempre que se crea algo nuevo surge la duda de si realmente se está dando con la solución correcta, o si realmente habrá una respuesta mejor. Y esto es una duda muy razonable y que en muchos casos la respuesta no es la deseada: sí que existe una solución más óptima, y se ha perdido tiempo valioso en implementar algo que, aunque funciona, podría haberse modelado mejor.

Los patrones de diseño son estructuras probadas por millones de desarrolladores a lo largo de muchos años, por lo que si se elige el patrón adecuado para modelar el problema, se puede estar seguro de que va a ser una de las soluciones más válidas (si no la que más) que se pueda encontrar.

### 3. Establecen un lenguaje común

Todas las demás razones palidecen ante esta. Modelar un código mediante patrones ayuda a explicarle a otras personas, más allá de que conozcan el código o no, a entender cómo se ha atajado un problema. Además ayuda a otros desarrolladores a comprender lo que se ha implementado, cómo y por qué, y además a descubrir rápidamente si esa era la mejor solución o no.

Pero también sirve para sentarte con otros compañeros a pensar sobre cómo solucionar algo, y ponerse de acuerdo mucho más rápido, explicar de forma más sencilla cuáles son sus ideas y que el resto lo comprenda sin ningún problema. Los patrones de diseño te ayudarán a ti y a tu equipo, en definitiva, a avanzar mucho más rápido, con un código más fácil de entender para todos y mucho más robusto.

## ¿Cómo identificar qué patrón encaja con un problema?

Desafortunadamente, hay malas noticias… Este es el punto más complicado, y la respuesta más evidente, que es también la que menos nos gusta, es que se aprende practicando. La experiencia es la única forma válida de ser más hábil detectando dónde pueden ayudar los patrones de diseño.

Por supuesto, hay situaciones conocidas en las que un patrón u otro puede ayudar, y se irán comentando a lo largo de los artículos. Además se recomienda que leas el libro de Head First [Design Patterns](https://drive.google.com/file/d/1HyBSWiaL4Treg7ggJ8ZhRh4eXUsFJokl/view?usp=sharing), en el que además de explicar los patrones de forma muy amena, explica muy bien cómo usarlos en la vida real.

## Listado de patrones de diseño

Este es el listado de los patrones de diseño más conocidos. Éstos se dividen en distintos grupos según el tipo de problema que resuelven:

### Patrones creacionales

Son los que facilitan la tarea de creación de nuevos objetos, de tal forma que el proceso de creación pueda ser desacoplado de la implementación del resto del sistema.

Los patrones creacionales están basados en dos conceptos: Encapsular el conocimiento acerca de los tipos concretos que el sistema utiliza. Estos patrones normalmente trabajan con interfaces, por lo que la implementación concreta que se utilice queda aislada. Y ocultar cómo las implementaciones concretas necesitan ser creadas y cómo se combinan entre sí.

Los patrones creacionales más conocidos son:
* [Abstract Factory](patterns/creational/abstract-factory.md): Provee una interfaz que delega la creación de un conjunto de objetos relacionados sin necesidad de especificar en ningún momento cuáles son las implementaciones concretas.
* [Factory Method](patterns/creational/factory-method.md): Expone un método de creación, delegando en las subclases la implementación de este método.
* [Builder](patterns/creational/builder.md): Separa la creación de un objeto complejo de su estructura, de tal forma que el mismo proceso de construcción puede servir para crear distintas representaciones.
* [Singleton](patterns/creational/singleton.md): Limita a uno el número de instancias posibles de una clase en el programa, y proporciona un acceso global al mismo.
* [Prototype](patterns/creational/prototype.md): Permite la creación de objetos basados en “plantillas”. Un nuevo objeto se crea a partir de la clonación de otro objeto.

### Patrones estructurales

Son patrones que facilitan la modelización del software especificando la forma en la que unas clases se relacionan con otras.

Los patrones estructurales más conocidos son:
* [Adapter](patterns/structural/adapter.md): Permite a dos clases con diferentes interfaces trabajar entre ellas, a través de un objeto intermedio con el que se comunican e interactúan.
* [Bridge](patterns/structural/bridge.md): Desacopla una abstracción de su implementación, para que las dos puedan evolucionar de forma independiente.
* [Composite](patterns/structural/composite.md): Facilita la creación de estructuras de objetos en árbol, donde todos los elementos emplean una misma interfaz. Cada uno de ellos puede a su vez contener un listado de esos objetos, o ser el último de esa rama.
* [Decorator](patterns/structural/decorator.md): Permite añadir funcionalidad extra a un objeto (de forma dinámica o estática) sin modificar el comportamiento del resto de objetos del mismo tipo.
* [Facade](patterns/structural/facade.md): Una fachada es un objeto que crea una interfaz simplificada para tratar con otra parte del código más compleja, de tal forma que simplifica y aísla su uso. Un ejemplo podría ser crear una fachada para tratar con una clase de una librería externa.
* [Flyweight](patterns/structural/flyweight.md): Una gran cantidad de objetos comparte un mismo objeto con propiedades comunes con el fin de ahorrar memoria.
* [Proxy](patterns/structural/proxy.md): Es una clase que funciona como interfaz hacia cualquier otra cosa: una conexión a Internet, un archivo en disco o cualquier otro recurso que sea costoso o imposible de duplicar.