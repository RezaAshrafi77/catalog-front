import axios from "axios";
import { toast } from "react-toastify";
import ApiConfig from "~/config";
const { baseUrl } = ApiConfig;

const files = {
  getFile:
    (data = {}) =>
    async (dispatch) => {
      await axios
        .get(`${baseUrl}/files/${data?.id}`)
        .then((res) => {
          dispatch({ type: "/files/loading" });
          switch (res?.status) {
            case 200:
              dispatch({ type: "/files/getFile", data: res.data.data });
          }
        })
        .catch((error) => {
          dispatch({ type: "/files/error", data: error });
        });
    },
};

export default files;
