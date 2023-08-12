import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  list: [],
  searchResult: [],
  search: null,
};
export default function faq(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "faq/list":
      return { ...state, loading: false, list: data, error: null };
    case "faq/add":
      return { ...state, loading: false, error: null };
    case "faq/selectFaq":
      return {
        ...state,
        loading: false,
        error: null,
        list: !state.search
          ? state.list.map((item) =>
              item.id === data
                ? { ...item, active: !item.active }
                : { ...item, active: false }
            )
          : state.list,
        searchResult: state.search
          ? state.searchResult.map((item) =>
              item.id === data
                ? { ...item, active: !item.active }
                : { ...item, active: false }
            )
          : state.searchResult,
      };
    case "faq/search":
      return {
        ...state,
        loading: false,
        error: null,
        search: data,
        searchResult: state.list.filter(
          (item) =>
            item.title.indexOf(data) !== -1 ||
            item.description.indexOf(data) !== -1
        ),
      };
    case "faq/loading":
      return { ...state, loading: true };
    case "faq/error":
      toast.error(data.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}
