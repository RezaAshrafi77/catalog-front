import proxy from "~/redux/proxy";
const prefix = "admin/";
const admin = {
  list:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get(
        prefix + data._service + "/",
        { ...data, schema: true },
        { dispatch }
      );
    },
  info:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get(prefix + data._service + "/" + data.id, data, {
        dispatch,
      });
    },
  add:
    (data = {}) =>
    async (dispatch) => {
      await proxy.post(prefix + data._service + "/add", data, { dispatch });
    },
  delete:
    (data = {}) =>
    async (dispatch) => {
      console.log(data);
      await proxy.delete(prefix + data._service + "/delete/" + data.id, data, {
        dispatch,
      });
    },
  update:
    (data = {}) =>
    async (dispatch) => {
      await proxy.put(prefix + data._service + "/update/" + data.id, data, {
        dispatch,
      });
    },
  getExcelData: (data) => async (dispatch) => {
    console.log(data);
    await proxy.get(
      prefix + data._service + "/list",
      { ...data, excelData: true },
      { dispatch }
    );
  },
  clearExcelData:
    (data = {}) =>
    async (dispatch) => {
      await dispatch({
        type: prefix + data._service + "/clearExcelData",
        data,
      });
    },
  timeReport:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get(prefix + data._service + "/timeReport", data, {
        dispatch,
      });
    },
};

export default admin;
