import axios from "axios";
import _ from "lodash";
import ApiConfig from "~/config";
const { baseUrl } = ApiConfig;

let Axios;
let progressDespatch;
const reAxios = () => {
  const access = localStorage.getItem("access_token");
  Axios = axios.create({
    onUploadProgress: (progressEvent) => {
      if (progressDespatch)
        progressDespatch(
          Math.round((progressEvent.loaded / progressEvent.total) * 100)
        );
    },
    withCredentials: true,
    validateStatus: null,
    baseURL: baseUrl,
    headers: access ? { Authorization: `Bearer ${access}`, Token: access } : {},
  });
  window.Axios = Axios;
};
reAxios();
class Proxy {
  get = async (url, params, opt, data) =>
    await this.check(
      url,
      opt,
      async () => await Axios.get(url, { params, ...opt }),
      data || params
    );
  post = async (url, params, opt, data) =>
    await this.check(
      url,
      opt,
      async () => await Axios.post(url, params, opt),
      data || params
    );
  put = async (url, params, opt, data) =>
    await this.check(
      url,
      opt,
      async () => await Axios.put(url, params, opt),
      data || params
    );
  delete = async (url, params, opt, data) => {
    await this.check(
      url,
      opt,
      async () => await Axios.delete(url, { ...opt, data: params }),
      data || params
    );
  };

  check = async (url, { dispatch }, fetch, params) => {
    dispatch = dispatch || (() => {});

    dispatch({ type: url.split("/")[0] + "/loading" });
    progressDespatch = (p) =>
      dispatch({ type: url.split("/")[0] + "/progress", data: p });
    const response = await fetch();
    switch (response.status) {
      case 200:
        dispatch({
          type: url,
          data: response.data.data,
          message: response.data.message,
          params,
        });
        return response.data.data;
      case 401:
        if (await this.refresh()) {
          let response = await fetch();
          dispatch({ type: url, data: response.data.data });
          return response.data.data;
        }
        break;
      case 403:
        console.log(response);
      default:
        dispatch({ type: url.split("/")[0] + "/error", data: response.data });
    }
    return false;
  };

  refresh = async () => {
    const refresh = localStorage.getItem("refresh_token");
    // if (!refresh) window.location.href = "/";
    const login = await this.login(
      {},
      { headers: { Authorization: `Bearer ${refresh}` } }
    );
    return login ? true : false;
  };

  login = async (url, params, { dispatch }) => {
    this.post(url, params, {
      dispatch: async (obj) => {
        let login = obj.data;
        if (!login || !login.refreshToken) return dispatch(obj);

        localStorage.removeItem("userData");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        await new Promise((r) => setTimeout(r, 100));
        localStorage.setItem("refresh_token", login.refreshToken);
        localStorage.setItem("access_token", login.accessToken);
        delete login.refreshToken;
        delete login.accessToken;
        localStorage.setItem("userData", JSON.stringify(login));
        reAxios();
        dispatch(obj);
      },
    });
  };

  logout = async (url, params, { dispatch }) => {
    dispatch({ type: url.split("/")[0] + "/loading" });
    this.post(url, params, {
      dispatch: (obj) => {
        localStorage.clear();
        dispatch(obj);
      },
    });
  };
  status = () => {
    const refresh = localStorage.getItem("refresh_token");
    const userData = localStorage.getItem("userData");
    if (!refresh) return false;
    if (refresh == "undefined") {
      localStorage.clear();
      return false;
    }
    return JSON.parse(userData);
  };
}
const _proxy = new Proxy();

export default _proxy;
