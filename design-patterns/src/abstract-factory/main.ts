import { FactoryProvider }  from './factory-provider'

const factory = new FactoryProvider()

const animal = factory.getFactory('Animal')
const color = factory.getFactory('Color')

console.log('El Gato es de color ' + color.create('Black').getColor() + ' y hace '
    + animal.create('Cat').makeSound())
console.log('El Perro es de color ' + color.create('Brown').getColor() + 'y hace '
    + animal.create('Dog').makeSound())
console.log('El Pato es de color ' + color.create('White').getColor() + 'y hace '
    +  animal.create('Duck').makeSound())