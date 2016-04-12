//main entry point
import {bootstrap} from "angular2/platform/browser";
import {App} from "./src/app";
import {provideStore} from "@ngrx/store";
import {HTTP_PROVIDERS} from "angular2/http";
import {ItemsService} from "./src/services/ItemService";
import {items} from "./src/stores/ItemsStore";
import {selectedItem} from "./src/stores/SelectedItemStore";

bootstrap(App, [
    ItemsService,
    HTTP_PROVIDERS,
    provideStore({items, selectedItem})
]).catch(err => console.error(err));
