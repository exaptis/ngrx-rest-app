import {Item} from "./ItemInterface";

export interface AppStore {
    items: Item[];
    selectedItem: Item;
}
;