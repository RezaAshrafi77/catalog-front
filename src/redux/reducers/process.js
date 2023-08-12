const initialState = {
  loading: false,
  error: null,
  list: [],
  info: null,
};

export default function process(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "process/list":
      return { ...state, loading: false, error: null, list: data };
    case "process/info":
      return { ...state, loading: false, error: null, info: data };
    case "process/add":
      return { ...state, loading: false, error: null, list: data.list };
    case "process/copy":
      return { ...state, loading: false, error: null, list: data.list };
    case "process/delete":
      return { ...state, loading: false, error: null, list: data.list };
    case "process/update":
      return { ...state, loading: false, error: null, list: data.list };
    case "process/loading":
      return { ...state, loading: true };
    case "process/error":
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}
