import proxy from "../proxy";
const userProduct = {
  list:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("userProduct/list", data, { dispatch });
    },
  getExcelData: (data) => async (dispatch) => {
    await proxy.get(
      "userProduct/list",
      { ...data, excelData: true },
      { dispatch }
    );
  },
  clearExcelData:
    (data = {}) =>
    async (dispatch) => {
      await dispatch({ type: "userProduct/clearExcelData", data });
    },
  myList:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("userProduct/myList", data, { dispatch });
    },
  info:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("userProduct/info", data, { dispatch }),
  update:
    (data = {}) =>
    async (dispatch) => {
      await proxy.put("userProduct/update", data, { dispatch });
    },
  delete:
    (data = {}) =>
    async (dispatch) => {
      await proxy.delete("userProduct/delete", data, { dispatch });
    },
  add:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.post("userProduct/add", data, { dispatch });
      if (localStorage.getItem("access")) {
        await proxy.get("userProduct/list", data2, { dispatch });
      }
      // await proxy.get("userFactor/info", data3, { dispatch });
    },
  addShow:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.post("userProduct/addShow", data, { dispatch });
      await proxy.get("userProduct/list", data2, { dispatch });
      // await proxy.get("userFactor/info", data3, { dispatch });
    },
  del:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.delete("userProduct/delete", data);
      await proxy.get("userProduct/list", data2, { dispatch });
    },
};

export default userProduct;
