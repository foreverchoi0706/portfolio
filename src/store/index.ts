import { createStore } from "vuex";
//interface
import CustomStoreOptions from "@/interface/CustomStoreOptions";

const initialState: CustomStoreOptions = {
  state: {
    name: "",
  },
  mutations: {},
  actions: {},
  modules: {},
};

export default createStore(initialState);
