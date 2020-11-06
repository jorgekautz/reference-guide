import { AbstractFactory } from './abstract-factory'
import { Animal, Bear, Dog, Duck } from './animals'

export class AnimalFactory implements AbstractFactory<Animal> {
    create(animalType: string): Animal {
        if (animalType === 'Dog') {
            return new Dog();
        } else if (animalType === 'Duck') {
            return new Duck();
        } else if (animalType === 'Bear') {
            return new Bear();
        }
        return null;
    }
}