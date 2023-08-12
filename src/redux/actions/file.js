import proxy from "~/redux/proxy";
const file = {
  setSignature:
    (data = {}) =>
    async (dispatch) =>
      await dispatch({ type: "file/setSignature", data }),
  upload:
    (data = {}) =>
    async (dispatch) => {
      var formData = new FormData();
      for (let key in data) formData.append(key, data[key]);
      return await proxy.post(
        "file/upload",
        formData,
        {
          dispatch,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
        data
      );
    },
  loading: (data) => (dispatch) => dispatch({ type: "file/loading", data }),
  groupList:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("file/group/list", data, { dispatch }),
};

export default file;
