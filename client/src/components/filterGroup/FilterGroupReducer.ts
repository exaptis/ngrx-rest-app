import {FilterGroupTypes, IFilterGroupAction} from "./FilterGroupActions";
import {IFacetModel} from "../../models/FacetModel";

class FilterGroupState {
    isToggled: boolean = false;
    items: Array<IFacetModel> = Array<IFacetModel>();
}

export default (state: FilterGroupState, action: IFilterGroupAction) => {
    switch (action.type) {
        case FilterGroupTypes.TOGGLE_FILTER_GROUP:
            return Object.assign({}, state, {isToggled: action.isToggled});
        case FilterGroupTypes.FILTER_FACETS:
            return Object.assign({}, state, {items: action.items});
        default:
            return new FilterGroupState;
    }
};
