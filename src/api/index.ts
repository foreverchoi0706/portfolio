import axios, { AxiosInstance } from "axios";

const baseURL = process.env.VUE_APP_API_URL;

const instance: AxiosInstance = axios.create({
  baseURL,
});

const api = {
  getBasicInfo: (params: any = { sidoCode: 27, sggCode: 27140 }) =>
    instance.get("childschoolinfo/basicInfo", {
      ...params,
    }),
};

export default api;
