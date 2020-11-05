## Patrón Abstract Factory

<img align="center" src="https://github.com/jorgekautz/reference-guide/blob/master/design-patterns/assets/diagram_abstract_factory.jpg?raw=true">

Primero, crearemos una familia de la clase Animal, ya más adelante la usaremos en nuestro Abstract Factory.

```java
public interface Animal {
    String getAnimal();
    String makeSound();
}
```

Y una implementación concreta Duck:

```java
public class Duck implements Animal {
 
    @Override
    public String getAnimal() {
        return "Duck";
    }
 
    @Override
    public String makeSound() {
        return "Squeks";
    }
}
```

Además, podemos crear implementaciones más concretas de la interfaz Animal (como Dog, Bear, etc.) exactamente de esta manera.

Abstract Factory se ocupa de familias de objetos dependientes. Con eso en mente, vamos a presentar una familia de colores más como interfaz con algunas implementaciones ( blanco, marrón,… ).

Saltaremos el código real por ahora, pero se puede encontrar aquí.

Ahora que tenemos varias familias, podemos crear una interfaz AbstractFactory para ellas:

```java
public interface AbstractFactory<T> {
    T create(String animalType) ;
}
```

A continuación, implementaremos una AnimalFactory usando el patrón de diseño del método Factory que discutimos en la sección anterior:

```java
public class AnimalFactory implements AbstractFactory<Animal> {
 
    @Override
    public Animal create(String animalType) {
        if ("Dog".equalsIgnoreCase(animalType)) {
            return new Dog();
        } else if ("Duck".equalsIgnoreCase(animalType)) {
            return new Duck();
        }
 
        return null;
    }
}
```

Del mismo modo, podemos implementar una fábrica para la interfaz de color utilizando el mismo patrón de diseño.

Cuando todo esto esté configurado, crearemos una clase FactoryProvider que nos proporcionará una implementación de AnimalFactory o ColorFactory dependiendo del argumento que proporcionemos al método getFactory () :

```java
public class FactoryProvider {
    public static AbstractFactory getFactory(String choice){
        if("Animal".equalsIgnoreCase(choice)){
            return new AnimalFactory();
        }
        else if("Color".equalsIgnoreCase(choice)){
            return new ColorFactory();
        }
        return null;
    }
}
```