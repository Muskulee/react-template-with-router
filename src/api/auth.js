import client from "./client";
import { CONSTANTS } from "./constants";

const baseUrl = CONSTANTS.api_url;

export const logIn = async (formData) => {
  try {
    // const { data } = await client(`/post/posts?pageNo=${pageNo}&limit=${limit}`);
    const { data } = await client.post(`${baseUrl}/user/login`, formData);
    // console.log('client', data)
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }

    console.log("error.message(", error.message());
    return { error: error.message || error };
  }
};


