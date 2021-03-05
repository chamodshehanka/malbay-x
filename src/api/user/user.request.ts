import { apiInstance } from "../apiInstance";
import { signUpData, signInData } from "./user.types";
import { ApiRes } from "./user.responses";

export async function signUpUser(requestData: signUpData) {
  const PATH = "/user/signup";

  try {
    const res = await apiInstance.post(PATH, requestData);
    const apiRes: ApiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function signInUser(requestData: signInData) {
  const PATH = "/user/signin";

  try {
    const res = await apiInstance.post(PATH, requestData);
    const apiRes: ApiRes = res.data;

    return apiRes;
  } catch (e) {
    console.error(e);
  }
}
