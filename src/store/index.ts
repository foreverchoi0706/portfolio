import { createStore } from "vuex";
//interface
import UriaiStoreOptions from "@/interface/UriaiStoreOptions";

const initialState: UriaiStoreOptions = {
  state: {
    name: "",
  },
  mutations: {},
  actions: {},
  modules: {},
};

export default createStore(initialState);
