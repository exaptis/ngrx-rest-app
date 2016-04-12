import {Component, ChangeDetectionStrategy} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {Item} from "./interfaces/ItemInterface";
import {ItemsService} from "./services/ItemService";
import {ItemDetail} from "./itemDetail/ItemDetail";
import {ItemList} from "./itemsList/ItemsList";
import {AppStore} from "./interfaces/AppStoreInterface";

@Component({
    selector: 'my-app',
    providers: [],
    template: require('./App.html'),
    directives: [ItemList, ItemDetail],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
    items: Observable<Array<Item>>;
    selectedItem: Observable<Item>;

    constructor(private itemsService: ItemsService, private store: Store<AppStore>) {
        this.items = itemsService.items;
        this.selectedItem = store.select('selectedItem');
        this.selectedItem.subscribe(v => console.log(v));

        itemsService.loadItems();
    }

    resetItem() {
        let emptyItem: Item = {id: null, name: '', description: ''};
        this.store.dispatch({type: 'SELECT_ITEM', payload: emptyItem});
    }

    selectItem(item: Item) {
        this.store.dispatch({type: 'SELECT_ITEM', payload: item});
    }

    saveItem(item: Item) {
        this.itemsService.saveItem(item);

        // Generally, we would want to wait for the result of `itemsService.saveItem`
        // before resetting the current item.
        this.resetItem();
    }

    deleteItem(item: Item) {
        this.itemsService.deleteItem(item);

        // Generally, we would want to wait for the result of `itemsService.deleteItem`
        // before resetting the current item.
        this.resetItem();
    }
}
