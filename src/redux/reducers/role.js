const initialState = {
  roles: [
    {
      id: 0,
      title: "مدیریت محتوای وبلاگ",
      subTitle: "مرکز - کارشناس مسئول مدیریت محتوا",
    },
    // {
    //   id: 1,
    //   title: "مدیریت محتوای چند رسانه ای",
    //   subTitle: "مرکز - کارشناس مسئول مدیریت محتوا",
    // },
  ],
  activeRole: 0,
};

export default function role(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "authentication/role/set":
      return { ...state, activeRole: data };
    default:
      return state;
  }
}
