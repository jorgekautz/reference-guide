import { FactoryProvider }  from './factory-provider'

const factory = new FactoryProvider()

const animal = factory.getFactory('Animal')
const color = factory.getFactory('Color')

console.log('El oso es de color: ' + color.create('Brown').getColor() + 'hace: '
    + animal.create('Bear').makeSound())
console.log('El perro es de color: ' + color.create('Black').getColor() + 'hace: '
    + animal.create('Dog').makeSound())
console.log('El pato es de color: ' + color.create('White').getColor() + 'hace: '
    +  animal.create('Duck').makeSound())