export interface Color {
    getColor(): string
}

export class White implements Color {
    public getColor(): string {
        return 'white'
    }
}

export class Brown implements Color {
    public getColor(): string {
        return 'brown'
    }
}

export class Black implements Color {
    public getColor(): string {
        return 'black'
    }
}