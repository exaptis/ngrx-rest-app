import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from "angular2/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import FacetModel from "../../models/FacetModel";
import {Control} from "angular2/common";

@Component({
    selector: 'filter-group',
    template: require('./FilterGroupTemplate.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterGroupComponent {
    @Input() placeholder: string;
    @Input() isSearchCollapsed: boolean;
    @Input() items: Array<FacetModel>;

    @Output() onToggle: EventEmitter<boolean> = new EventEmitter();
    @Output() onSearch: EventEmitter<string> = new EventEmitter();

    public searchTerm: Control = new Control();

    constructor() {
        this.searchTerm
            .valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe((searchTerm: string) => {
                this.onSearch.emit(searchTerm);
            });
    }

    handleToggleClick() {
        this.onToggle.emit(this.isSearchCollapsed);
    }
}
