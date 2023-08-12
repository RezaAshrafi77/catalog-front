import proxy from "../proxy";
const transport = {
  list:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("transport/list", data, { dispatch });
    },
  set:
    (data = {}, data2 = {}, data3 = {}) =>
    async (dispatch) => {
      await proxy.post("transport/setTransport", data, { dispatch });
      await proxy.get("userFactor/info", data2, { dispatch });
      await proxy.get("transport/list", data3, { dispatch });
    },
};

export default transport;
