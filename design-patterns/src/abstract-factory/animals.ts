export interface Animal {
    getAnimal(): string;
    makeSound(): string;
}

export class Duck implements Animal {
    getAnimal(): string {
        return "Duck";
    }
    makeSound(): string {
        return "Squeks";
    }
}

export class Dog implements Animal {
    getAnimal(): string {
        return "Dog";
    }
    makeSound(): string {
        return "Guau";
    }
}

export class Bear implements Animal {
    getAnimal(): string {
        return "Bear";
    }
    makeSound(): string {
        return "Gruu";
    }
}