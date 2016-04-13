import {Injectable} from "angular2/core";
import {Actions, AppStore} from "angular2-redux/dist/index";

export enum FilterGroupTypes {
    TOGGLE_FILTER_GROUP
}

@Injectable()
export class FilterGroupActions extends Actions {

    constructor(appStore: AppStore) {
        super(appStore);
    }

    toggleFilterGroup(isToggled) {
        return {type: FilterGroupTypes.TOGGLE_FILTER_GROUP, isToggled: !isToggled};
    };
}
