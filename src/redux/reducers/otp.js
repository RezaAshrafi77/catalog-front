const initialState = {
  otps: {
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  },
};

export default function otp(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "authentication/otp/set":
      return { ...state, otps: { ...state.otps, [data.name]: data.value } };
    case "authentication/otp/reset":
      return {
        ...state,
        otps: { otp1: "", otp2: "", otp3: "", otp4: "" },
      };
    default:
      return state;
  }
}
