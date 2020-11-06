import { AbstractFactory } from './abstract-factory'
import { Color, White, Brown, Black } from './colors'

export class ColorFactory implements AbstractFactory<Color> {
    create(colorType: string): Color {
        if (colorType === 'White') {
            return new White();
        } else if (colorType === 'Brown') {
            return new Brown();
        } else if (colorType === 'Black') {
            return new Black();
        }
        return null;
    }
}