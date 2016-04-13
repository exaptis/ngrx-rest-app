import {FilterGroupTypes} from "./FilterGroupActions";

export default (state = [], action: any = {}) => {
    switch (action.type) {
        case FilterGroupTypes.TOGGLE_FILTER_GROUP:
            return {isToggled: action.isToggled};
        default:
            return state;
    }
};
