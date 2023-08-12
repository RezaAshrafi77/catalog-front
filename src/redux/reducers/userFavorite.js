import {toast} from 'react-toastify';
const initialState = {
  loading: false,
  error: null,
  list: [],
};
export default function userFavorite(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "userFavorite/list":
      return {
        ...state,
        loading: false,
        list: data,
        error: null,
      };
    case "userFavorite/update":
      return { ...state, loading: false, error: null };
    case "userFavorite/add":
      return {
        ...state,
        list: data.userFavorites,
        loading: false,
        error: null,
      };
    case "userFavorite/delete":
      return { ...state, list : data.userFavorites, loading: false, error: null };
    case "userFavorite/loading":
      return { ...state, loading: true };
    case "userFavorite/error":
      toast.error(data.message)
        
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

