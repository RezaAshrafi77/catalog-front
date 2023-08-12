const otp = {
  set: (data) => async (dispatch) =>
    await dispatch({ type: "authentication/otp/set", data: data }),
  reset:  (data) => async (dispatch) =>
  await dispatch({ type: "authentication/otp/reset" }),
};

export default otp;
