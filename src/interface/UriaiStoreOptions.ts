import { StoreOptions } from "vuex";

export default interface UriaiStoreOptions extends StoreOptions<any> {
  state: {
    name: string | symbol | null | undefined;
    user: {
      id: number;
      name: string;
      addr: string;
      createDate: string;
      updateDate: string;
      profilePath: string;
    };
  };
  mutations: any;
  actions: any;
  modules: any;
}
