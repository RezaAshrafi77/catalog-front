import { useRef, useState } from "react";

import Image from "../Image";
import { baseUrl } from "../../config";

export default function WithText({ data, events, classNames, ...props }) {
  return (
    <div
      className={`${classNames} flex justify-between col-span-2 gap-3 text-gray-100`}
    >
      <div
        className={`slide-right w-1/2 h-full border-4 border-gray-300 rounded-xl overflow-hidden relative bg-black gap-4`}
      >
        <Image
          src={baseUrl + "/files/" + data?.fileIds[0]?._id}
          classNames="h-full"
        />
      </div>
      <div className="slide-left flex-1 flex flex-col justify-center gap-4 py-8">
        <h1 className="font-medium text-3xl">
          مبلی
          <br /> راحتی <br />
          اسکارلت
        </h1>
        <p className="text-sm leading-7 text-gray-300">
          مبل راحتی ال استون انتخاب عالی برای طرفداران مبل ال می باشد. مبل راحتی
          استون شامل یک عدد کاناپه 3 نفره، یک عدد مبل دو نفره ، یک عدد تک نفره،
        </p>
      </div>
    </div>
  );
}
