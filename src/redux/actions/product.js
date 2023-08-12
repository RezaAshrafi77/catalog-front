import proxy from "~/redux/proxy";
const product = {
  getSimilar:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("product/similar", data, { dispatch }),
  list:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("product/list", data, { dispatch });
    },
  getExcelData: (data) => async (dispatch) => {
    console.log(data);
    await proxy.get("product/list", { ...data, excelData: true }, { dispatch });
  },
  clearExcelData:
    (data = {}) =>
    async (dispatch) => {
      await dispatch({ type: "product/clearExcelData", data });
    },
  info:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("product/info", data, { dispatch });
    },
  add:
    (data = {}) =>
    async (dispatch) => {
      await proxy.post("product/add", data, { dispatch });
    },
  homePage:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("product/homePage", data, { dispatch });
    },
  delete:
    (data = {}) =>
    async (dispatch) => {
      await proxy.delete("product/delete", data, { dispatch });
    },
  update:
    (data = {}) =>
    async (dispatch) => {
      await proxy.put("product/update", data, { dispatch });
    },
};

export default product;
