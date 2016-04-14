import {Component, OnDestroy} from "angular2/core";
import {FilterGroupComponent} from "./components/filterGroup/FilterGroupComponent";
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
    private items: Array<FacetModel>;
    private isToggled: boolean;

    private unsubscribeFromStore;
    private toggleFilterGroupDispatcher;
    private filterFacetsDispatcher;

    constructor(private _appStore: AppStore,
                private facetService: FacetService,
                filterGroupActions: FilterGroupActions) {

        this.toggleFilterGroupDispatcher = filterGroupActions.createDispatcher(filterGroupActions.toggleFilterGroup);
        this.filterFacetsDispatcher = filterGroupActions.createDispatcher(filterGroupActions.filterFactes);

        this.unsubscribeFromStore = _appStore.subscribe((state) => {
            this.isToggled = state.filterGroup.isToggled;
            this.items = state.filterGroup.items.map(item => new FacetModel(item));
        });
    }

    doFilterFactes(searchTerm: string) {
        this.facetService.search(searchTerm).subscribe(this.filterFacetsDispatcher);
    }

    ngOnDestroy(): any {
        return this.unsubscribeFromStore();
    }
}


