import proxy from "../proxy";
const userFactor = {
  list:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("userFactor/list", data, { dispatch }),
  getExcelData: (data) => async (dispatch) => {
    await proxy.get(
      "userFactor/list",
      { ...data, excelData: true },
      { dispatch }
    );
  },
  clearExcelData:
    (data = {}) =>
    async (dispatch) => {
      await dispatch({ type: "userFactor/clearExcelData", data });
    },
  orders:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("userFactor/orders", data, { dispatch }),
  info:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("userFactor/info", data, { dispatch }),
  AdminInfo:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("userFactor/admin/info", data, { dispatch }),
  update:
    (data = {}) =>
    async (dispatch) => {
      await proxy.put("userFactor/update", data, { dispatch });
    },
  delete:
    (data = {}) =>
    async (dispatch) => {
      await proxy.delete("userFactor/delete", data, { dispatch });
    },
  payment:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.post("userFactor/payment", data, { dispatch });
    },
  verify:
    (data = {}) =>
    async (dispatch) => {
      await proxy.post("userFactor/verify", data, { dispatch });
    },
  add:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.post("userFactor/add", data, { dispatch });
      await proxy.get("userFactor/list", data2, { dispatch });
    },
  del:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.delete("userFactor/delete", data, { dispatch });
      await proxy.get("userFactor/list", data2, { dispatch });
    },
  donate:
    (data = {}) =>
    async (dispatch) => {
      await proxy.post("userFactor/donate", data, { dispatch });
    },
  deleteUserOffCode:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.delete("userFactor/deleteUserOffCode", data, { dispatch });
      await proxy.get("userFactor/info", data2, { dispatch });
    },
  fullList:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("userFactor/fullList", data, { dispatch }),
};

export default userFactor;
