import {IFacetModel} from "./FacetModel";

// export interface IFilterGroupModel {
//     isToggled: boolean;
//     items: List<IFacetModel>;
// }

export class FilterGroupModel { // implements IFilterGroupModel {
    isToggled: boolean = false;
    items: Array<IFacetModel>;
}