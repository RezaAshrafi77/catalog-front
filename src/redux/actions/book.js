import proxy from "../proxy";
const book = {
  list:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("book/list", data, { dispatch }),
  info:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("book/info", data, { dispatch }),
  update:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.put("book/update", data);
      await proxy.get("book/list", data2, { dispatch });
    },
  add:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.post("book/add", data);
      await proxy.get("book/list", data2, { dispatch });
    },
  del:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.delete("book/delete", data);
      await proxy.get("book/list", data2, { dispatch });
    },
  searchBook: (data) => async (dispatch) => {
    dispatch({ type: "book/search", data: data });
  },
  filterBook: (data) => async (dispatch) => {
    dispatch({ type: "book/filter", data: data });
  },
};

export default book;
