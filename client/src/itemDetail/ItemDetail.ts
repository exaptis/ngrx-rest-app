import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Item} from "../interfaces/ItemInterface";

@Component({
    selector: 'item-detail',
    template: require('./ItemDetail.html')
})
export class ItemDetail {
    originalName: string;
    selectedItem: Item;

    @Input('item')
    _item: Item;
    @Output()
    saved = new EventEmitter();
    @Output()
    cancelled = new EventEmitter();

    set _item(value: Item) {
        if (value) this.originalName = value.name;
        this.selectedItem = Object.assign({}, value);
    }
}
