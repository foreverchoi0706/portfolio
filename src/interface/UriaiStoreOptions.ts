import { StoreOptions } from "vuex";

export default interface UriaiStoreOptions extends StoreOptions<any> {
  state: {
    name: string | symbol | null | undefined;
  };
  mutations: any;
  actions: any;
  modules: any;
}
