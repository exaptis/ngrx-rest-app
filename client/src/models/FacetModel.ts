import {FacetModelInterface} from "./FacetModelInterface";

export default class FacetModel implements FacetModelInterface {
    id: number;
    name: string;

    constructor(name: string) {
        this.id = Math.ceil(Math.random() * 100);
        this.name = name;
    }
}