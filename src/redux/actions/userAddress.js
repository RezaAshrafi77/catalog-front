import proxy from "../proxy";

const userAddress = {
  list:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("userAddress/list", data, { dispatch });
    },
  info:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("userAddress/info", data, { dispatch });
    },
  update:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.put("userAddress/update", data, {dispatch});
      await proxy.get("userAddress/list", data2, { dispatch });
    },
  add:
    (data = {}, data2 = {}, data3 = {}) =>
    async (dispatch) => {
      await proxy.post("userAddress/add", data, { dispatch });
      await proxy.get("userAddress/list", data2, { dispatch });
    },
  del:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.delete("userAddress/delete", data, { dispatch });
      await proxy.get("userAddress/list", data2, { dispatch });
    },
};

export default userAddress;
