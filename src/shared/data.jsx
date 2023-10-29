import {
  MdInfoOutline,
  MdOutlinePrivacyTip,
  MdOutlineMenuBook,
  MdOutlineLocationOn,
} from "react-icons/md";
import { TbBrandInstagram, TbPhoneCall } from "react-icons/tb";

export const navPages = [
  {
    title: "درباره ما",
    icon: <MdInfoOutline size="10vw" color="white" />,
  },
  {
    title: "قوانین و مقررات",
    icon: <MdOutlinePrivacyTip size="10vw" color="white" />,
  },
];

// Categories
export const categoriesData = ["pitza", "fruit", "shake", "coffee"];

// shop info
export const shopInfoData = {
  name: "کافه رستوران ونهان",
  homeNavs: [
    {
      title: "مشاهده منو",
      icon: <MdOutlineMenuBook size="7vw" color="white" />,
      link: "/menu",
    },
    {
      title: "درباره ما",
      icon: <MdInfoOutline size="7vw" color="white" />,
      link: "/information",
    },
  ],
  galley: [
    "https://api.qbar.ir/static/media/restaurant/1677826982.png",
    "https://api.qbar.ir/static/media/restaurant/1677826895.png",
  ],
  cellNumber: "09123456789",
  instagramID: "#",
  open: true,
  openTime: "از ساعت ۱۱:۰۰ الی ۲۳:۰۰",
  address: "کرج-گوهردشت-خ داریوش-نرسیده به قائم ۳",
};

// social link
export const socialLinks = [
  {
    icon: <TbBrandInstagram size="60%" color="white" />,
    title: "لینک اینستاگرام",
  },
  {
    icon: <MdOutlineLocationOn size="60%" color="white" />,
    title: "آدرس",
  },
  {
    icon: <TbPhoneCall size="60%" color="white" />,
    title: "شماره تماس",
  },
];

export const parts = [
  {
    categoryId: "pitza",
    name: "pitza 1",
  },
  {
    categoryId: "pitza",
    name: "pitza 2",
  },
  {
    categoryId: "pitza",
    name: "pitza 3",
  },
  {
    categoryId: "pitza",
    name: "pitza 4",
  },
  {
    categoryId: "pitza",
    name: "pitza 5",
  },
  {
    categoryId: "pitza",
    name: "pitza 6",
  },
  {
    categoryId: "pitza",
    name: "pitza 7",
  },
  {
    categoryId: "fruit",
    name: "fruit 1",
  },
  {
    categoryId: "fruit",
    name: "fruit 2",
  },
  {
    categoryId: "fruit",
    name: "fruit 3",
  },
  {
    categoryId: "fruit",
    name: "fruit 4",
  },
  {
    categoryId: "fruit",
    name: "fruit 5",
  },
  {
    categoryId: "shake",
    name: "shake 1",
  },
  {
    categoryId: "shake",
    name: "shake 2",
  },
  {
    categoryId: "shake",
    name: "shake 3",
  },
  {
    categoryId: "shake",
    name: "shake 4",
  },
  {
    categoryId: "shake",
    name: "shake 5",
  },
  {
    categoryId: "shake",
    name: "shake 1",
  },
  {
    categoryId: "shake",
    name: "shake 2",
  },
  {
    categoryId: "shake",
    name: "shake 3",
  },
  {
    categoryId: "shake",
    name: "shake 4",
  },
  {
    categoryId: "shake",
    name: "shake 5",
  },
  {
    categoryId: "coffee",
    name: "coffee 1",
  },
  {
    categoryId: "coffee",
    name: "coffee 2",
  },
  {
    categoryId: "coffee",
    name: "coffee 3",
  },
  {
    categoryId: "coffee",
    name: "coffee 4",
  },
  {
    categoryId: "coffee",
    name: "coffee 5",
  },
];
