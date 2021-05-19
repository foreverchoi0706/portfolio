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

  getProfile: async (id: number) =>
    await instance.get(`user/`, {
      params: {
        id,
      },
    }),

  patchProfile: async (formData: FormData) =>
    await instance.patch("user/profile", formData,{

     
    }),
};

export default api;
