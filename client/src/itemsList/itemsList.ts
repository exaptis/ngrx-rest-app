import {Output, Input, Component, EventEmitter} from "angular2/core";
import {Item} from "../interfaces/ItemInterface";

@Component({
    selector: 'items-list',
    templateUrl: require('./ItemsList.html')
})
export class ItemList {
    @Input() items: Item[];
    @Output() selected = new EventEmitter();
    @Output() deleted = new EventEmitter();
}
