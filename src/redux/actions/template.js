import axios from "axios";
import { toast } from "react-toastify";
import ApiConfig from "~/config";
const { baseUrl } = ApiConfig;

const template = {
  getTemplate:
    (data = {}) =>
    async (dispatch) => {
      await axios
        .get(`${baseUrl}/${data?.id}`)
        .then((res) => {
          dispatch({ type: "/template/loading" });
          switch (res?.status) {
            case 200:
              dispatch({ type: "/", data: res.data.data });
          }
        })
        .catch((error) => {
          dispatch({ type: "/template/error", data: error });
        });
    },
};

export default template;
