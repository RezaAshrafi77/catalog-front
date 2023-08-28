import React from "react";

function Input({ classNames, events, data, ...props }) {
  const inputs = {
    checkbox: <input type="checkbox" name={props?.name} value={props?.value} />, // label
    radio: <input type="radio" name={props?.name} value={props?.value} />, // label
    select: (
      <div className={`${props?.containerClassNames} relative flex my-3`}>
        {props?.leftIcon || ""}
        <select name={props?.name} className={classNames}>
          {props?.options}
        </select>
      </div>
    ), // label, icon
    password: (
      <div className={"w-full flex flex-col"}>
        <label
          className={`${props?.labelClassNames} flex items-center text-base font-medium`}
          htmlFor={props?.name}
        >
          {props?.label}
        </label>
        <div
          className={`${props?.containerClassNames} flex items-center w-full my-3 bg-background overflow-hidden rounded-md`}
        >
          {props?.rightIcon}
          <input
            ref={props?.refs}
            type="password"
            required={props?.required}
            name={props?.name || ""}
            value={props?.value || ""}
            className={`${classNames} w-full h-full font-medium flex-1 text-base placeholder:text-base placeholder:font-normal font-sm outline-none bg-[transparent] lg:py-3 lg:text-xl `}
            placeholder={props?.placeholder || "جستجو ..."}
            autoComplete="off"
            onChange={(e) =>
              events ? events["onChange"](e.target.name, e.target.value) : {}
            }
            onFocus={(e) => (events["onFocus"] ? events["onFocus"](e) : {})}
            onBlur={(e) => (events["onBlur"] ? events["onBlur"](e) : {})}
          />
          {props?.leftIcon}
        </div>
      </div>
    ), // label, icon
    text: (
      <div className={"w-full flex flex-col"}>
        <label
          className={`${props?.labelClassNames} flex items-center text-base font-medium`}
          htmlFor={props?.name}
        >
          {props?.label}
        </label>
        <div
          className={`${props?.containerClassNames} flex items-center w-full my-3 bg-background overflow-hidden rounded-md`}
        >
          {props?.rightIcon}
          <input
            ref={props?.refs}
            required={props?.required}
            type="text"
            name={props?.name || ""}
            value={props?.value || ""}
            className={`${classNames} w-full h-full font-medium flex-1 text-base placeholder:text-base placeholder:font-normal placeholder:text-black font-sm outline-none bg-[transparent] lg:py-3 lg:text-xl `}
            placeholder={props?.placeholder}
            autoComplete="off"
            onChange={(e) =>
              events ? events["onChange"](e.target.name, e.target.value) : {}
            }
            onFocus={(e) => (events["onFocus"] ? events["onFocus"](e) : {})}
            onBlur={(e) => (events["onBlur"] ? events["onBlur"](e) : {})}
          />
          {props?.leftIcon}
        </div>
      </div>
    ), // label, icon
    textarea: (
      <div
        className={`${props?.containerClassNames} w-full flex flex-col rounded-md`}
      >
        <label
          className={`${props?.labelClassNames} flex items-center text-base font-medium`}
          for={props?.name}
        >
          {props?.label}
        </label>
        <textarea
          rows={props?.rows}
          value={props?.value}
          placeholder={props?.placeholder}
          name={props?.name}
          onChange={(e) =>
            events ? events["onChange"](e.target.name, e.target.value) : {}
          }
          onFocus={(e) => (events["onFocus"] ? events["onFocus"](e) : {})}
          onBlur={(e) => (events["onBlur"] ? events["onBlur"](e) : {})}
          className={`${classNames} w-full my-3 outline-none border border-solid border-borderColor rounded-md text-base`}
        />
      </div>
    ),
    radio: (
      <input
        type="radio"
        name={props?.name}
        className={`${classNames} overflow-hidden w-4  text-blue-600 !bg-black border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-full`}
        key={props?.key}
        checked={props?.checked}
        onChange={(e) =>
          events ? events["onChange"](e.target.name, e.target.value) : {}
        }
        onClick={(e) =>
          events ? events["onClick"](e.target.name, e.target.value) : {}
        }
      />
    ),
  };
  const textarea = props?.type === "textarea";
  return inputs[props?.type];
}

export default Input;
