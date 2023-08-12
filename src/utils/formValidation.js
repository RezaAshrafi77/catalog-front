export const validator = (text, field) => {
  const fields = {
    email: {
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      name: "ایمیل",
      rolls: [
        {
          regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          error: "ایمیل وارد شده معتبر نمی‌باشد.",
        },
      ],
    },
    password: {
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      name: "رمز عبور",
      rolls: [
        {
          regex: /^(?=.*[a-z])/,
          error: "رمز عبور می‌بایست دارای حداقل یک حروف کوچک باشد.",
        },
        {
          regex: /^(?=.*[A-Z])/,
          error: "رمز عبور می‌بایست دارای حداقل یک حروف بزرگ باشد.",
        },
        {
          regex: /^(?=.*[0-9])/,
          error: "رمز عبور می‌بایست دارای حداقل یک عدد باشد.",
        },
        {
          regex: /^(?=.*[!@#\$%\^&\*])/,
          error: "رمز عبور می‌بایست دارای حداقل یک کاراکتر خاص باشد.",
        },
        {
          regex: /^(?=.{8,})/,
          error: "رمز عبور می‌بایست دارای حداقل ۸ کاراکتر باشد.",
        },
      ],
    },

    username: {
      regex: /^(?=.{5,})[a-zA-Z0-9]+$/,
      name: "نام کاربری",
      rolls: [
        {
          regex: /^[a-zA-Z0-9]+$/,
          error:
            "نام کاربری می‌بایست شامل حروف و اعداد باشد و شروع آن با حروف باشد.",
        },
        {
          regex: /^(?=.{5,})/,
          error: "رمز عبور می‌بایست دارای حداقل 5 کاراکتر باشد.",
        },
      ],
    },
    cellphone: {
      regex: /^(\+989|9|09)\d{9}/,
      name: "شماره موبایل",
      rolls: [
        {
          regex: /^(\+989|9|09)\d{9}/,
          error: "شماره موبایل وارد شده معتبر نمی‌باشد.",
        },
      ],
    },
    telephone: {
      regex: /^0[0-9]{2,}[0-9]{7,}$/,
      name: "شماره تلفن",
      rolls: [
        {
          regex: /^0[0-9]{2,}[0-9]{7,}$/,
          error: "شماره تلفن وارد شده معتبر نمی‌باشد.",
        },
      ],
    },
    postalCode: {
      regex: /^[0-9]{11}$/,
      name: "کد پستی",
      rolls: [
        {
          regex: /^[0-9]{11}$/,
          error: "کد پستی وارد شده معتبر نمی‌باشد.",
        },
      ],
    },
  };

  let errors = [];
  if (fields[field]?.regex?.test(text)) {
    return true;
  } else {
    fields[field]?.rolls?.forEach((roll) => {
      if (!roll?.regex?.test(text)) {
        errors.push(roll?.error);
      }
    });
    return errors;
  }
};

export default null;
