import React from "react";

import Image from "../Image";
import { baseUrl } from "../../config";

export default function Portrait({ data, events, classNames, ...props }) {
  return (
    <div
      className={`${classNames} relative border-4 scale-down border-gray-300 rounded-xl overflow-hidden slide-left row-span-2`}
      onClick={() => events["onClick"]()}
    >
      <Image
        src={baseUrl + "/files/" + data?.fileIds[0]?._id}
        classNames="object-cover w-[45vw] h-full min-h-[92vw]"
        events={{ onClick: () => {} }}
      />
      <span className="absolute right-1 top-2 px-3 py-0.5 rounded-full bg-orange-400 text-white">
        {"مبل"}
      </span>
    </div>
  );
}
