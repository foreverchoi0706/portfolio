import axios, { AxiosInstance, AxiosResponse } from "axios";
//interface
import { BasicInfoParam, BasicInfoResult } from "@/interface/Childschoolinfo";

const baseURL = process.env.VUE_APP_API_URL;

const instance: AxiosInstance = axios.create({
  baseURL,
});

const api = {
  getBasicInfo: async (
    params: BasicInfoParam
  ): Promise<AxiosResponse<BasicInfoResult>> =>
    await instance.get("childschoolinfo/basicInfo", {
      params: {
        ...params,
      },
    }),
};

export default api;
