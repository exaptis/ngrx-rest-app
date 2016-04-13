import {List} from "immutable";
import {IFacetModel} from "./FacetModel";
import Record = Immutable.Record;


// export interface IFilterGroupModel {
//     isToggled: boolean;
//     items: List<IFacetModel>;
// }

export class FilterGroupModel { // implements IFilterGroupModel {
    isToggled: boolean = false;
    items: List<IFacetModel>;
}