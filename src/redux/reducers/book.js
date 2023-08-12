import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  list: [],
  info: null,
  searchResult: [],
  filterResult: [],
  subjects: [],
  levels: [],
  sortFilters: ["مرتب سازی", "محبوب ترین", "جدیدترین"],
};

const grades = [
  "پیش دبستان",
  "اول",
  "دوم",
  "سوم",
  "چهارم",
  "پنجم",
  "ششم",
  "هفتم",
  "هشتم",
  "نهم",
  "دهم",
  "یازدهم",
  "دوازدهم",
];
export default function book(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "book/list":
      let itemsSubject = (Array.isArray(data) ? data : []).map(
        (item, index) => item.name
      );
      if (window.innerWidth < 1000) {
        itemsSubject.unshift("نام کتاب");
      }
      let itemsLevel = (Array.isArray(data) ? data : [])
        .map((item) => item.gradeId * 1)
        .sort((a, b) => a - b)
        .map((e) => grades[e]);
      if (window.innerWidth < 1000) {
        itemsLevel.unshift("پایه تحصیلی");
      }
      return {
        ...state,
        loading: false,
        list: data,
        subjects: [...new Set(itemsSubject)],
        levels: [...new Set(itemsLevel)],
        filterResult: data,
        error: null,
      };
    case "book/info":
      return { ...state, loading: false, info: data, error: null };
    case "book/update":
      return { ...state, loading: false, error: null };
    case "book/add":
      return { ...state, loading: false, error: null };
    case "book/delete":
      return { ...state, loading: false, error: null };
    case "book/search":
      return { ...state };
    case "book/filter":
      const realList = state.list;
      const level = data.level;
      const subject = data.subject;
      const sort = data.sort;
      const search = data.search;
      if (level.length > 0 || subject.length > 0 || sort || search) {
        localStorage.setItem("filter", "ON");
      }
      let finalSort;
      let byLevelFilter = [];
      if (level.length > 0) {
        level.forEach((item1) => {
          for (let i = 0; i < realList.length; i++) {
            if (grades[realList[i].gradeId] === item1) {
              byLevelFilter.push(realList[i]);
            }
          }
        });
      } else {
        byLevelFilter = realList;
      }

      let bySubjectFilter = [];
      if (subject.length > 0) {
        subject.forEach((item1) => {
          for (let i = 0; i < byLevelFilter.length; i++) {
            if (byLevelFilter[i].name === item1) {
              bySubjectFilter.push(byLevelFilter[i]);
            }
          }
        });
      } else {
        bySubjectFilter = byLevelFilter;
      }

      const bySearchFilter = search
        ? bySubjectFilter.filter((item1) => item1.name.indexOf(search) !== -1)
        : bySubjectFilter;

      if (sort === "گران ترین") {
        finalSort = bySearchFilter.sort((item1, item2) => {
          return item1.product[0].price - item2.product[0].price;
        });
      } else {
        finalSort = bySearchFilter;
      }
      return {
        ...state,
        loading: false,
        error: null,
        filterResult: finalSort,
      };
    case "book/loading":
      return { ...state, loading: true };
    case "book/error":
      toast.error(data.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}
