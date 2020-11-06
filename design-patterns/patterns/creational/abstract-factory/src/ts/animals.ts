export interface Animal {
    getAnimal(): string
    makeSound(): string
}

export class Duck implements Animal {
    public getAnimal(): string {
        return 'duck'
    }
    public makeSound(): string {
        return 'squeks'
    }
}

export class Dog implements Animal {
    public getAnimal(): string {
        return 'dog'
    }
    public makeSound(): string {
        return 'guau'
    }
}

export class Cat implements Animal {
    public getAnimal(): string {
        return 'cat'
    }
    public makeSound(): string {
        return 'miau'
    }
}