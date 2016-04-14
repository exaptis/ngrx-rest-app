export interface IFacetModel {
    id: number;
    name: string;
}

export default class FacetModel implements IFacetModel {
    id: number;
    name: string;

    constructor(name: string) {
        this.id = Math.ceil(Math.random() * 100);
        this.name = name;
    }

    getReadableText(): string {
        return `${this.id} - ${this.name}`;
    }
}
