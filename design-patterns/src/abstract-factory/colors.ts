export interface Color {
    getColor(): string
}

export class White implements Color {
    getColor(): string {
        return 'white'
    }
}

export class Brown implements Color {
    getColor(): string {
        return 'brown'
    }
}

export class Black implements Color {
    getColor(): string {
        return 'black'
    }
}