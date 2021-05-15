export default interface CustomStoreOptions {
  state: {
    name: string | symbol | null | undefined;
  };
  mutations: any;
  actions: any;
  modules: any;
}
