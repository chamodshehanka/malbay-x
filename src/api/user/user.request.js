import { apiInstance } from "../apiInstance";
//TODO need to define type of apiRes

export async function signUpUser(requestData) {
  const PATH = "/user/signup";

  try {
    const res = await apiInstance.post(PATH, requestData);
    const apiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function signInUser(requestData) {
  const PATH = "/user/signin";

  try {
    const res = await apiInstance.post(PATH, requestData);
    const apiRes = res.data;

    return apiRes;
  } catch (e) {
    console.error(e);
  }
}
