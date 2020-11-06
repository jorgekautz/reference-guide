export interface Color {
    getColor(): string;
}

export class White implements Color {
    getColor(): string {
        return "White";
    }
}

export class Brown implements Color {
    getColor(): string {
        return "Brown";
    }
}

export class Black implements Color {
    getColor(): string {
        return "Black";
    }
}