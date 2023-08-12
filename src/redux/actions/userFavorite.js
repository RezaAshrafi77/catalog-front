import proxy from "../proxy";

const userFavorite = {
  list:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("userFavorite/list", data, { dispatch });
    },
  update:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.put("userFavorite/update", data);
      await proxy.get("userFavorite/list", data2, { dispatch });
    },
  add:
    (data = {}, data2 = {}, data3 = {}) =>
    async (dispatch) => {
      await proxy.post("userFavorite/add", data, { dispatch });
    },
  del:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.delete("userFavorite/delete", data, { dispatch });
    },
};

export default userFavorite;
