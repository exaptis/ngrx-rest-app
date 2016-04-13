import {Component, OnDestroy} from "angular2/core";
import {FilterGroupComponent} from "./components/filterGroup/FilterGroupComponent";
import {List} from "immutable";
import {AppStore} from "angular2-redux/dist/index";
import {FilterGroupActions} from "./components/filterGroup/FilterGroupActions";
import {FacetService} from "./services/FacetService";
import FacetModel from "./models/FacetModel";

@Component({
    selector: 'my-app',
    providers: [],
    template: require('./App.html'),
    directives: [FilterGroupComponent],
})
export class App implements OnDestroy {
    private items: List<FacetModel>;
    private isToggled: boolean;

    private unsubscribeFromStore: Function;
    private toggleFilterGroup: Function;
    private filterFactes: Function;

    constructor(private _appStore: AppStore, private facetService: FacetService, filterGroupActions: FilterGroupActions) {
        this.toggleFilterGroup = filterGroupActions.createDispatcher(filterGroupActions.toggleFilterGroup);
        this.filterFactes = filterGroupActions.createDispatcher(filterGroupActions.filterFactes);

        this.unsubscribeFromStore = _appStore.subscribe((state) => {
            this.isToggled = state.filterGroup.isToggled;
            this.items = state.filterGroup.items.map(item => new FacetModel(item));
        });
    }

    doFilterFactes(searchTerm: string) {
        this.facetService.search(searchTerm).subscribe(this.filterFactes);
    }

    ngOnDestroy(): any {
        return this.unsubscribeFromStore();
    }
}


