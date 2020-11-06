## Abstract Factory pattern

The *Abstract Factory* design pattern seeks to group a set of classes that have a common function, called families. Which are created through a *Factory*, this pattern is especially useful when we need to have certain families of classes to solve a problem, however, it may be necessary to create parallel implementations of these classes to solve the same problem but with a different implementation.

<img align="center" src="https://github.com/jorgekautz/reference-guide/blob/master/design-patterns/assets/diagram_abstract_factory.jpg?raw=true">

First, create an interface of the Animal class, as later it will be used in the abstract factory.

```typescript
export interface Animal {
    getAnimal(): string
    makeSound(): string
}
```

Then a concrete implementation, such as Duck.

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

Also, more concrete implementations of the Animal family (Dog, Cat, etc.) can be created in exactly this way.

The abstract factory deals with families of dependent objects. With that in mind, a color family will be presented as an interface, with some implementations (White, Brown, Black, etc.).

The actual code will be skipped for now, but it can be found [here](src/ts).

Now that you have multiple families, you can create an abstract interface for them.

```typescript
export interface AbstractFactory<T> {
    create(animalType: string): T
}
```

Next, a factory for *Animal* will be implemented using the [Factory Method](../factory-method/README-en.md) design pattern.

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

Similarly, a factory for the Color interface can be implemented using the same design pattern.

When all of this is set up, a *FactoryProvider* class is created that will provide an implementation of *AnimalFactory* or *ColorFactory* depending on the argument given to the *getFactory()* method.

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