import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { templatesData } from "../../shared/data";
import { baseUrl } from "../../config";
import { Image } from "~/components";

export const Templates = ({}) => {
  const navigation = useNavigate();

  return (
    <div className="relative flex flex-1 ltr flex-col py-10 px-4 gap-4 max-w-full max-h-full h-full overflow-y-scroll overflow-x-hidden bg-purple-400 bg-opacity-10 text-white">
      <h1 className="text-xl text-left w-fit mb-4 bg-indigo-300 bg-opacity-20 rounded-md pl-1">
        Welcome to <span className="bg-red-600 px-1">Catalog</span>
      </h1>
      {templatesData?.map((template, index) => (
        <div
          className="flex flex-center-center w-full h-[50vh] relative overflow-hidden"
          key={template + index}
          onClick={() => navigation("/" + template?.id)}
        >
          <Image
            src={baseUrl + "/files/" + template?.fileId}
            classNames="w-full h-full absolute left-0 top-0 object-cover"
          />
          <div className="z-20 w-full h-full flex flex-center-center bg-black bg-opacity-50">
            <strong className="text-lg font-bold text-white">
              {template?.title}
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Templates;
