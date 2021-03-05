import { apiInstance } from "../apiInstance";
import { ApiRes, signUpData, signInData } from "./user.types";

export async function signUpUser(requestData: signUpData) {
  const PATH = "/user/signup";

  try {
    const res = await apiInstance.post(PATH, requestData);
    const apiRes:ApiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function signInUser(requestData: signInData) {
  const PATH = "/user/signin";

  try {
    const res = await apiInstance.post(PATH, requestData);
    const apiRes:ApiRes = res.data;

    return apiRes;
  } catch (e) {
    console.error(e);
  }
}
