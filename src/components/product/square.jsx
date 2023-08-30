import { useRef, useState } from "react";

import Image from "../Image";
import { baseUrl } from "../../config";

export default function Square({ data, events, classNames, ...props }) {
  return (
    <div
      className={`${classNames} relative min-h-[45vw] max-h-[45vw] rounded-xl border shadow-product overflow-hidden gap-4`}
      onClick={() => events["onClick"]()}
    >
      <Image
        events={{ onClick: () => {} }}
        src={baseUrl + "/files/" + data?.fileIds[0]?._id}
        classNames={`min-w-full min-h-full h-full object-cover`}
      />
      {data?.categoryIds?.length ? (
        <span className="text-sm absolute right-1 bottom-2 px-3 py-0.5 rounded-full backdrop-blur-lg bg-black bg-opacity-30 text-white">
          {data?.categoryIds[0]?.name}
        </span>
      ) : null}
    </div>
  );
}
