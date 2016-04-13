import {Injectable} from "angular2/core";
import {Actions, AppStore} from "angular2-redux/dist/index";
import {IFacetModel} from "../../models/FacetModel";
import List = Immutable.List;

export enum FilterGroupTypes {
    TOGGLE_FILTER_GROUP = 'TOGGLE_FILTER_GROUP',
    FILTER_FACETS = 'FILTER_FACETS'
}

export interface IFilterGroupAction {
    type: FilterGroupTypes,
    isToggled?: boolean,
    items?: List<IFacetModel>,
}

@Injectable()
export class FilterGroupActions extends Actions {

    constructor(appStore: AppStore) {
        super(appStore);
    }

    toggleFilterGroup(isToggled: boolean): IFilterGroupAction {
        return {type: FilterGroupTypes.TOGGLE_FILTER_GROUP, isToggled: !isToggled};
    };

    filterFactes(items: List<IFacetModel>): IFilterGroupAction {
        return {type: FilterGroupTypes.FILTER_FACETS, items}
    }
}
