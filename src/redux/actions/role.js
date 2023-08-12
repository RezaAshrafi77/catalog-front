const role = {
  set: (data) => async (dispatch) =>
    await dispatch({ type: "authentication/role/set", data }),
};

export default role;
