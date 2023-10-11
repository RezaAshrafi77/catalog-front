import { useRef, useState } from "react";

import Image from "../Image";
import { baseUrl } from "../../config";

export default function Square({ data, events, classNames, ...props }) {
  return (
    <div
      className={`${classNames} relative min-h-[45vw] max-h-[45vw] rounded-xl border border-[#ffffff33] bg-white bg-opacity-10 shadow-product overflow-hidden gap-4`}
      onClick={() => events["onClick"]()}
    >
      <Image
        events={{ onClick: () => {} }}
        src={baseUrl + "/files/" + data?.fileIds[0]?._id}
        classNames={`min-w-full min-h-full h-full object-contain`}
      />
      {data?.categoryIds?.length ? (
        <span className="text-xs absolute right-3 bottom-4 px-3 py-0.5 rounded-full backdrop-blur-lg bg-white font-medium text-black">
          {data?.categoryIds[0]?.name}
        </span>
      ) : null}
    </div>
  );
}
