export interface Animal {
    getAnimal(): string
    makeSound(): string
}

export class Duck implements Animal {
    getAnimal(): string {
        return 'duck'
    }
    makeSound(): string {
        return 'squeks'
    }
}

export class Dog implements Animal {
    getAnimal(): string {
        return 'dog'
    }
    makeSound(): string {
        return 'guau'
    }
}

export class Cat implements Animal {
    getAnimal(): string {
        return 'cat'
    }
    makeSound(): string {
        return 'miau'
    }
}