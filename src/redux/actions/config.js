const config = {
  setDialog:
    (data = {}) =>
    async (dispatch) => {
      console.log("setDialog");
      await dispatch({ type: "config/setDialog", data });
    },
  setBottomSheet:
    (data = {}) =>
    async (dispatch) =>
      await dispatch({ type: "config/setBottomSheet", data }),
  setMenu:
    (data = {}) =>
    async (dispatch) =>
      await dispatch({ type: "config/setMenu", data }),
  setHeader:
    (data = {}) =>
    async (dispatch) =>
      await dispatch({ type: "config/setHeader", data }),

  setDark: (data) => async (dispatch) =>
    await dispatch({ type: "config/setDark", data }),
  setDevice: (data) => async (dispatch) =>
    await dispatch({ type: "config/setDevice", data }),
};

export default config;
