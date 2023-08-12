const initialState = {
  list: [
    {
      id: 0,
      title: "مدیریت محتوا",
      text: "پنل مدیریت محتوا ابزاری کامل برای مدیریت اطلاعات و محتوا های آموزشی ، مدیریت فیلم های آموزشی و بار کد های مربعی",
      fileIds: "/images/sitecore-1.jpg",
    },
    {
      id: 1,
      title: "مدیریت فروشگاه",
      text: "مدیریت محصولات و پشتبیانی فروش و گزارش های ویژه بازاریابی ",
      fileIds: "/images/sitecore-2.jpg",
    },
  ],
};

export default function catalog(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    default:
      return state;
  }
}
