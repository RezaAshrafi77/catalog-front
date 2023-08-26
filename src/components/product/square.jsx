import { useRef, useState } from "react";

import Image from "../Image";
import { baseUrl } from "../../config";

export default function Square({ data, events, classNames, ...props }) {
  return (
    <div
      className={`${classNames} relative slide-right scale-down min-h-[45vw] max-h-[45vw] rounded-xl border-4 border-gray-300 overflow-hidden gap-4`}
      onClick={() => events["onClick"]()}
    >
      <Image
        events={{ onClick: () => {} }}
        src={baseUrl + "/files/" + data?.fileIds[0]?._id}
        classNames={`min-w-[45vw] min-h-[45vw] max-h-[45vw] object-cover`}
      />
      <span className="absolute right-1 top-2 px-3 py-0.5 rounded-full bg-red-400 text-white">
        {"تخت خواب"}
      </span>
    </div>
  );
}
