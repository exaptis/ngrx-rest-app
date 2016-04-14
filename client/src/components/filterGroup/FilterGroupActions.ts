import {Injectable} from "angular2/core";
import {Actions, AppStore} from "angular2-redux/dist/index";
import {IFacetModel} from "../../models/FacetModel";


export enum FilterGroupTypes {
    TOGGLE_FILTER_GROUP = <any>"TOGGLE_FILTER_GROUP",
    FILTER_FACETS = <any>"FILTER_FACETS"
}

export interface IFilterGroupAction {
    type: FilterGroupTypes,
    isToggled?: boolean,
    items?: Array<IFacetModel>
}

@Injectable()
export class FilterGroupActions extends Actions {

    constructor(appStore: AppStore) {
        super(appStore);
    }

    toggleFilterGroup(isToggled: boolean): IFilterGroupAction {
        return {type: FilterGroupTypes.TOGGLE_FILTER_GROUP, isToggled: !isToggled};
    };

    filterFactes(items: Array<IFacetModel>): IFilterGroupAction {
        return {type: FilterGroupTypes.FILTER_FACETS, items}
    }
}
