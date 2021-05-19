import { createStore } from "vuex";
//interface
import UriaiStoreOptions from "@/interface/UriaiStoreOptions";

const initialState: UriaiStoreOptions = {
  state: {
    name: "",
    user: {
      id: 0,
      name: "",
      addr: "",
      createDate: "",
      updateDate: "",
      profilePath: "",
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};

export default createStore(initialState);
