import proxy from "../proxy";
const craft = {
  add:
    (data = {}) =>
    async (dispatch) =>
      await proxy.post("layout/add", data, { dispatch }),
  get:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("layout/info", data, { dispatch }),
  update:
    (data = {}) =>
    async (dispatch) =>
      await proxy.put("layout/update", data, { dispatch }),
};

export default craft;
