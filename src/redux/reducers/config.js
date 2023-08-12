const initialState = {
  isDark: false,
  menu: true,
  header: true,
  bottomSheet: {
    children: null,
    open: null,
  },
  dialog: {
    text: null,
    type: null,
    accept: null,
    open: null,
  },
  device: "mobile",
};

export default function config(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "config/setMenu":
      return {
        ...state,
        menu: data,
      };
    case "config/setHeader":
      return {
        ...state,
        header: data,
      };
    case "config/setDialog":
      return {
        ...state,
        dialog: data,
      };
    case "config/setBottomSheet":
      return {
        ...state,
        bottomSheet: data,
      };
    case "config/setDark":
      return {
        ...state,
        isDark: !state.isDark,
      };
    case "config/setDevice":
      return {
        ...state,
        device: data,
      };
    default:
      return state;
  }
}
