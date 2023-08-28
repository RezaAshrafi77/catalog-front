import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";

import { Button } from "./index";

export default function Counter({ data, classNames, events, ...props }) {
  return (
    <div
      className={`${classNames} flex items-center gap-[2vw] rounded-full bg-[#FA4A0C]`}
    >
      <Button classNames="p-0 m-0" icon={<MdAdd size="4.5vw" color="#fff" />} />
      <span className="text-[5vw] h-[5vw] font-bold text-textColor">{data || 1}</span>
      <Button
        classNames="p-0 m-0"
        icon={<MdRemove size="4.5vw" color="#fff" />}
      />
    </div>
  );
}
