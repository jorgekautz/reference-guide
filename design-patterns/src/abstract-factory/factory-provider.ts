import { AbstractFactory } from './abstract-factory'
import { AnimalFactory } from './animal-factory'
import { ColorFactory } from './color-factory'

export class FactoryProvider {
    getFactory(choice: string): AbstractFactory<any> {
        if(choice === 'Animal'){
            return new AnimalFactory();
        } else if(choice === 'Color'){
            return new ColorFactory();
        }
        return null;
    }
}