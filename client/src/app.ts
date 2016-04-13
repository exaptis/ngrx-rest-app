import {Component, ChangeDetectionStrategy, OnDestroy} from "angular2/core";
import {FilterGroupComponent} from "./components/filterGroup/FilterGroupComponent";
import {List} from "immutable";
import {AppStore} from "angular2-redux/dist/index";
import {FilterGroupActions} from "./components/filterGroup/FilterGroupActions";

@Component({
    selector: 'my-app',
    providers: [],
    template: require('./App.html'),
    directives: [FilterGroupComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnDestroy {
    private items: List;
    private unsubscribeFromStore: Function;
    private toggleFilterGroup: Function;
    private isToggled: boolean;

    constructor(private _appStore: AppStore, filterGroupActions: FilterGroupActions) {
        this.items = List.of('New York', 'Vienna', 'California');

        this.toggleFilterGroup = filterGroupActions.createDispatcher(filterGroupActions.toggleFilterGroup);
        this.unsubscribeFromStore = _appStore.subscribe((state) => {
            this.isToggled = state.filterGroupreducer.isToggled;
        });
    }

    ngOnDestroy(): any {
        return this.unsubscribeFromStore();
    }
}


