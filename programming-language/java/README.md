# Java - Guía de referencia rápida

[comment]: <> (<img align="right" src="https://camo.githubusercontent.com/cfcaf3a99103d61f387761e5fc445d9ba0203b01/68747470733a2f2f7472617669732d63692e6f72672f6477796c2f657374612e7376673f6272616e63683d6d6173746572">)

## ¿Que es Java?

Java es un lenguaje de programción con estas caracterísitcas:
* Orientado a objetos
* Plataforma independiente
* Sencillo
* Seguro
* Arquitectónicamente neutral
* Portátil
* Robusto
* Multiproceso
* Interpretado
* Alto rendimiento
* Repartido
* Dinámico

## Configuración del entorno

Java SE está disponible gratuitamente desde este enlace. Allí puedes descargar una versión basada en tu
sistema operativo. Puede consultar la guía de instalación para obtener detalles completos.

## Sintaxis básica

* **Objeto**: Los objetos tienen estados y comportamientos. Ejemplo: un perro tiene estados: color, nombre, raza; así como comportamientos: caminar, ladrar, comer. Un objeto es una instancia de una clase.
* **Clase**: Una clase se puede definir como una plantilla o proyecto que describe los comportamientos y estados
que el objeto soporta.
* **Métodos**: Un método es básicamente un comportamiento. Una clase puede contener muchos métodos. Es en los
métodos es donde se escriben las lógicas, se manipulan los datos y se ejecutan todas las acciones.
* **Variables**: Cada objeto tiene su conjunto único de variables. El estado de un objeto es creado por
los valores asignados a estas variables.

### Primer programa en Java

Veamos un código simple que imprimiría las palabras *Hello World*

```java
public class MyFirstJavaProgram {
    /* This is my first java program.
     * This will print 'Hello World' as the output
     */
    public static void main(String []args) {
        System.out.println("Hello World"); // prints Hello World
    }
}
```
Acerca de los programas Java, es muy importante tener en cuenta los siguientes puntos:
* **Sensibilidad de mayúsculas y minúsculas**: Java distingue entre mayúsculas y minúsculas, lo que significa identificador *Hola* y *hola* tendría un significado diferente.
* **Nombre de las clases**: Para todos los nombres de clases, la primera letra debe estar en mayúsculas. Si se utilizan varias palabras para formar un nombre de la clase, la primera letra de cada palabra interior debe estar en mayúsculas. Ejemplo *classMyFirstJavaClass*.
* **Nombre de los métodos**: Todos los nombres de métodos deben comenzar con una letra minúscula. Si se utilizan varias palabras para formar el nombre del método, entonces la primera letra de cada palabra interna debe estar en mayúsculas. Ejemplo *public void myMethodName()*
* **Nombre del archivo de programa**: El nombre del archivo del programa debe coincidir exactamente con el nombre de la clase. Al guardar el archivo, debe guardarlo usando el nombre de la clase (recuerde que java distingue entre mayúsculas y minúsculas) y agregar '.java' al final del nombre. (si el nombre del archivo y el nombre de la clase no coinciden con su programa, no se compilará). Ejemplo: suponga que "MyFirstJavaProgram" es el nombre de la clase. Entonces el archivo debe guardarse como "MyFirstJavaProgram.java"
* **public static void main(String args[])**: El procesamiento del programa Java comienza desde el
método *main()* que es una parte obligatoria de cada programa java.

### Identificadores

Todos los componentes de Java requieren nombres. Los nombres utilizados para clases, variables y métodos se denominan identificadores.

En Java hay varios puntos para recordar acerca de los identificadores. Son los siguientes:
* Todos los identificadores deben comenzar con una letra (de la *A* a la *Z* o de la *a* a la *z*), un carácter de moneda (*$*) o un guión bajo.
* Después del primer carácter, los identificadores pueden tener cualquier combinación de caracteres.
* No se puede utilizar una palabra clave como identificador.
* Lo más importante es que los identificadores distinguen entre mayúsculas y minúsculas.
  - Ejemplos de identificadores legales: *edad*, *$salario*, *_value*, *__1_value*.
  - Ejemplos de identificadores ilegales: *123abc*, *-salary*.

### Modificadores

Como otros lenguajes, es posible modificar clases, métodos, etc., usando modificadores. Hay dos categorías de
modificadores.
* **Modificadores de acceso**: *default*, *public*, *protected*, *private*.
* **Modificadores sin acceso**: *final*, *abstract*, *strictfp*.

### Variables

En Java verémos los siguientes tipos de variables:
* Variables locales.
* Variables de clase (variables estáticas).
* Variables de instancia (variables no estáticas).

### Matrices

Las matrices son objetos que almacenan varias variables del mismo tipo. Sin embargo, una matriz en sí misma es un
objeto en el montón. Veremos cómo declarar, construir e inicializar en los próximos capítulos.

### Enums

Las enumeraciones restringen una variable para tener uno de los pocos valores predefinidos. Los valores de esta lista enumerada se denominan enumeraciones.

Con el uso de enumeraciones es posible reducir la cantidad de errores en su código.

Por ejemplo, si consideramos una solicitud para una tienda de jugos frescos, sería posible restringir el tamaño
del vaso a pequeño, mediano y grande. Esto aseguraría que no permitiría a nadie pedir ningún tamaño que no
sea pequeño, mediano o grande.

```java
class FreshJuice {
    enum FreshJuiceSize { SMALL, MEDIUM, LARGE }
    FreshJuiceSize size;
}
public class FreshJuiceTest {
    public static void main(String args[]) {
        FreshJuice juice = new FreshJuice();
        juice.size = FreshJuice. FreshJuiceSize.MEDIUM ;
        System.out.println("Size :" + juice.size);
    }
}
```

**Nota:** Las enumeraciones pueden declararse como propias o dentro de una clase. Los métodos, variables y constructores también se pueden definir dentro de enumeraciones.

### Palabras clave de Java

La siguiente lista muestra las palabras reservadas en Java. Estas palabras reservadas no se pueden utilizar como constantes o variables o cualquier otro nombre de identificador: 

*abstract*, *assert*, *boolean*, *break*, *byte*, *case*, *catch*, *char*, *class*, *const*, *continue*, *default*, *do*, *double*, *else*, *enum*, *extends*, *final*, *finally*, *float*, *for*, *goto*, *if*, *implements*, *import*, *instanceof*, *int*, *interface*, *long*, *native*, *new*, *package*, *private*, *private*, *public*, *return*, *short*, *static*, *strictfp*, *super*, *switch*, *synchronized*, *this*, *throw*, *throws*, *transient*, *try*, *void*, *volatile*, *while*.

### Comentarios

Java admite comentarios de una sola línea y de varias líneas muy similares a *C* y *C++*. Todos los caracteres disponibles dentro de cualquier comentario son ignorados por el compilador de Java.

```java
public class MyFirstJavaProgram {
    /* This is my first java program.
     * This will print 'Hello World' as the output
     * This is an example of multi-line comments.
     */
    public static void main(String []args) {
        // This is an example of single line comment
        /* This is also an example of single line comment. */
        System.out.println("Hello World");
    }
}
```

### Tipos de datos

Hay dos tipos de datos disponibles en Java:
* Tipos de datos primitivos
* Tipos de datos de referencia o de objeto

#### Tipos de datos primitivos

Hay ocho tipos de datos primitivos compatibles con Java. Los tipos de datos primitivos están predefinidos por el idioma y nombrados por una palabra clave. Veamos ahora en detalle acerca de los ocho tipos de datos primitivos:
* byte
* short
* int
* long
* float
* double
* boolean
* char

#### Tipos de datos de referencia

* Las variables de referencia se crean utilizando constructores definidos de las clases. Se utilizan para
acceder a objetos. Estas variables se declaran de un tipo específico que no se puede cambiar. Por ejemplo, empleado, cachorro, etc.
* Los objetos de clase y varios tipos de variables de matriz se incluyen en el tipo de datos de referencia.
* El valor predeterminado de cualquier variable de referencia es nulo.
* Una variable de referencia se puede utilizar para hacer referencia a cualquier objeto del tipo declarado o cualquier tipo compatible.

Ejemplo:
```java
Animal animal = new Animal ("jirafa");
```