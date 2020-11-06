import { AbstractFactory } from './abstract-factory'
import { Animal, Cat, Dog, Duck } from './animals'

export class AnimalFactory implements AbstractFactory<Animal> {
    public create(animalType: string): Animal {
        if (animalType === 'Dog') {
            return new Dog()
        } else if (animalType === 'Duck') {
            return new Duck()
        } else if (animalType === 'Cat') {
            return new Cat()
        }
        return null
    }
}