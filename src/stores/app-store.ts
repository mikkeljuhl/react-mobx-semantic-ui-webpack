import {observable} from "mobx";

class AppStore {
    @observable public counter = 0;
}
export const appStore = new AppStore();