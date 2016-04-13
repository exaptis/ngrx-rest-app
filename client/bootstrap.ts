//main entry point
import {bootstrap} from "angular2/platform/browser";
import {App} from "./src/app";
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from "angular2/http";
import {createAppStoreFactoryWithOptions, AppStore} from "angular2-redux/dist/index";
import {provide} from "angular2/core";
import filterGroup from "./src/components/filterGroup/FilterGroupReducer";
import {FilterGroupActions} from "./src/components/filterGroup/FilterGroupActions";
import {FacetService} from "./src/services/FacetService";
import {FORM_PROVIDERS, CORE_DIRECTIVES} from "angular2/common";


const appStoreFactory = createAppStoreFactoryWithOptions({
    reducers: {filterGroup},
    debug: true
});

bootstrap(App,
    [
        provide(AppStore, {useFactory: appStoreFactory}),
        CORE_DIRECTIVES, HTTP_PROVIDERS, JSONP_PROVIDERS, FORM_PROVIDERS,
        FilterGroupActions, FacetService
    ]
).catch(err => console.error(err));
