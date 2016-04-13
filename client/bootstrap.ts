//main entry point
import {bootstrap} from "angular2/platform/browser";
import {App} from "./src/app";
import {HTTP_PROVIDERS} from "angular2/http";
import {createAppStoreFactoryWithOptions, AppStore} from "angular2-redux/dist/index";
import {provide} from "angular2/core";
import filterGroupreducer from "./src/components/filterGroup/FilterGroupReducer";
import {FilterGroupActions} from "./src/components/filterGroup/FilterGroupActions";


const appStoreFactory = createAppStoreFactoryWithOptions({
    reducers: {filterGroupreducer},
    debug: true
});

bootstrap(App,
    [
        provide(AppStore, {useFactory: appStoreFactory}),
        HTTP_PROVIDERS,
        FilterGroupActions
    ]
).catch(err => console.error(err));
