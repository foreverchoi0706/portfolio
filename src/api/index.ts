import axios, { AxiosInstance } from "axios";

const baseURL = "http://localhost:3000/";

const instance: AxiosInstance = axios.create({
  baseURL,
});

const api = {
  getBasicInfo: () =>
    instance.get("childschoolinfo/basicInfo", {
      params: {
        sidoCode: 27,
        sggCode: 27140,
      },
    }),
};

export default api;
