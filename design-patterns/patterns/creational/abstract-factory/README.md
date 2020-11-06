## Patrón Abstract Factory

El patrón de diseño *Abstract Factory* busca agrupar un conjunto de clases que tiene un funcionamiento en común, llamadas familias. Las cuales son creadas mediante un *Factory*, este patrón es especialmente útil cuando requerimos tener ciertas familias de clases para resolver un problema, sin embargo, puede que se requieran crear implementaciones paralelas de estas clases para resolver el mismo problema pero con una implementación distinta.

<img align="center" src="https://github.com/jorgekautz/reference-guide/blob/master/design-patterns/assets/diagram_abstract_factory.jpg?raw=true">

Primero, crear una interfaz de la clase Animal, ya que más adelante se usará en la fábrica abstracta.

```typescript
export interface Animal {
    getAnimal(): string
    makeSound(): string
}
```

Luego una implementación concreta, cómo por ejemplo Duck.

```typescript
export class Duck implements Animal {
    public getAnimal(): string {
        return 'duck'
    }
    public makeSound(): string {
        return 'squeks'
    }
}
```

Además, se pueden crear implementaciones más concretas de la familia Animal (Dog, Cat, etc.) exactamente de esta manera.

La fábrica abstracta se ocupa de familias de objetos dependientes. Con eso en mente, se va a presentar una familia de colores como interfaz, con algunas implementaciones (White, Brown, Black, etc.).

El código real se salteará de momento, pero se puede encontrar [aquí](src/ts).

Ahora que se tienen varias familias, se puede crear una interfaz abstracta para ellas.

```typescript
export interface AbstractFactory<T> {
    create(animalType: string): T
}
```

A continuación, se implementará una fábrica para *Animal* usando el patrón de diseño [Factory Method](../factory-method/README.md).

```typescript
export class AnimalFactory implements AbstractFactory<Animal> {
    public create(animalType: string): Animal {
        if (animalType === 'Dog') {
            return new Dog();
        } else if (animalType === 'Duck') {
            return new Duck()
        } else if (animalType === 'Cat') {
            return new Cat()
        }
        return null
    }
}
```

Del mismo modo, se puede implementar una fábrica para la interfaz Color utilizando el mismo patrón de diseño.

Cuando todo esto está configurado, se crea una clase *FactoryProvider* que proporcionará una implementación de *AnimalFactory* o *ColorFactory* dependiendo del argumento que se le proporcione al método *getFactory()*.

```typescript
export class FactoryProvider {
    public getFactory(choice: string): AbstractFactory<any> {
        if (choice === 'Animal') {
            return new AnimalFactory()
        } else if (choice === 'Color') {
            return new ColorFactory()
        }
        return null
    }
}
```