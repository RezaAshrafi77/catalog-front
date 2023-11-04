import React from "react";
import { separate } from "~/utils/funcs";

import { Image, Button } from "~/components";
import { baseUrl } from "../../config";

export default function V1({ data, classNames, events, ...props }) {
  return (
    <div
      className={`${classNames} food-2 outline-none flex flex-col w-full p-4 dark:text-white bg-[#282828] rounded-xl shadow-food-1 border border-[#282828]`}
      onClick={() => events["onClick"]()}
    >
      <div className="flex w-full justify-between mb-4">
        <strong className="text-sm font-medium">{data?.title}</strong>
        <Image
          src={
            data?.fileIds[0]?._id
              ? baseUrl + "/files/" + data?.fileIds[0]?._id
              : null
          }
          classNames="bg-white z-10 w-[20vw] h-[20vw] rounded-xl border border-black"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4 w-full">
          {separate(data?.specifications[0]?.value)}
          {data?.specifications?.map((spec, index) => {
            <div
              className="flex justify-between items-center bg-red-200 p-2"
              key={"price" + index}
            >
              <span className="text-sm font-medium">
                {spec?.key === "قیمت" ? separate(spec?.value) : null}
              </span>
            </div>;
          })}
        </div>
        {props?.notesCount ? (
          <div className="flex !w-[25vw] items-center justify-between">
            <Button
              title="+"
              classNames="border border-solid border-red-500 text-red-500 !w-6 !h-6 text-sm font-medium !border-[1px]"
              events={{
                onSubmit: () => events["addToNotes"](),
              }}
            />
            <span className="text-lg">{props?.notesCount}</span>
            <Button
              title="-"
              classNames="border border-solid border-red-500 text-red-500 !w-6 !h-6 text-sm font-medium !border-[1px]"
              events={{
                onSubmit: () => events["removeFromNotes"](),
              }}
            />
          </div>
        ) : (
          <Button
            title="افزودن"
            classNames="border border-solid border-red-500 text-red-500 !w-[25vw] !h-6 text-sm font-medium !border-[1px]"
            events={{
              onSubmit: () => events["addToNotes"](),
            }}
          />
        )}
      </div>
    </div>
  );
}
