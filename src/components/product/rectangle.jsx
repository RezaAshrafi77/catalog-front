import { useRef, useState } from "react";

import Image from "../Image";
import { baseUrl } from "../../config";

export default function Rectangle({ data, events, classNames, ...props }) {
  return (
    <div
      className={`${classNames} relative border-4 scale-down border-gray-300 rounded-xl slide-top overflow-hidden col-span-2 gap-4`}
    >
      <Image
        src={baseUrl + "/files/" + data?.fileIds[0]?._id}
        classNames="w-full h-[70vw]"
      />
      <div className="flex flex-col gap-1 absolute w-full px-4 left-0 bottom-0 py-2 bg-gray-900 bg-opacity-20 backdrop-blur-sm">
        <h1 className="text-textColor font-bold text-lg">مبل راحتی آرام</h1>
        <p className="text-gray-100">طراحی راحت و کیفیت ماندگار</p>
      </div>
    </div>
  );
}
