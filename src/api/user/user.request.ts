import { apiInstance } from "../apiInstance";
import { signInData, signUpData } from "./user.types";
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
    if (apiRes.data) {
      window.localStorage.setItem("Token", apiRes.data);
    }
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function welcomeUser() {
  const PATH = "/user/welcome";

  try {
    const res = await apiInstance.get(PATH, {
      headers: {
        Authorization: window.localStorage.getItem("Token"),
      },
    });
    const apiRes: ApiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}
