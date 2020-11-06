export interface AbstractFactory<T> {
    create(animalType: string): T ;
}