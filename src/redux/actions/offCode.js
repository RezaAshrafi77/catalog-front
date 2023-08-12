

import proxy from "../proxy";
const offCode = {
  list:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("offCode/list", data, { dispatch }),
};

export default offCode;