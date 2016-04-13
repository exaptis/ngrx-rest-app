import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from "angular2/core";
import {List} from "immutable";

@Component({
    selector: 'filter-group',
    template: require('./FilterGroupTemplate.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterGroupComponent {
    @Input() placeholder: string;
    @Input() isSearchCollapsed: boolean;
    @Input() items: List;

    @Output() onToggle: EventEmitter<boolean> = new EventEmitter();
    @Output() onSearch: EventEmitter<any> = new EventEmitter();

    private searchTerm: string = '';

    handleToggleClick() {
        this.onToggle.emit(this.isSearchCollapsed);
    }

    handleSearchTermChange() {
        this.onSearch.emit({term: this.searchTerm});
    }
}
