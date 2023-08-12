import proxy from "../proxy";
const report = {
  product_dashboard:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("report/product/dashboard", data, { dispatch }),
  content_dashboard:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("report/content/dashboard", data, { dispatch }),
  productType_sold_count:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("report/productType/sold/count", data, { dispatch }),
  getClinets:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("report/clients", data, { dispatch }),
  grade_sold_count:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("report/grade/sold/count", data, { dispatch }),
  book_sold_count:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("report/book/sold/count", data, { dispatch }),
  product_total_sold:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("report/product/total/sold", data, { dispatch }),
  code_total_sold:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("report/code/total/sold", data, { dispatch }),
};

export default report;
