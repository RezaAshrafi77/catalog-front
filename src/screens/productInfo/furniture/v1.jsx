import React from "react";
import { connect } from "react-redux";
import { Button, Navbar, Image } from "~/components";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../../config";
import { Loading } from "../../../components";

export const V1 = ({ template, loading }) => {
  const navigation = useNavigate();
  const routeParams = useParams();

  const part = template?.parts?.filter(
    (part) => part?._id === routeParams?.id
  )[0];

  return (
    <div className="relative flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden bg-purple-400 bg-opacity-10 text-[#c1c1c1]">
      <Navbar
        classNames="text-textColor bg-purple-400 bg-opacity-30 text-[#c1c1c1] pl-3"
        leading={<div></div>}
        actions={[
          <Button
            icon={<MdChevronLeft size="2.5rem" color="#c1c1c1" />}
            events={{ onSubmit: () => navigation(-1) }}
          />,
        ]}
      />
      {loading || !part ? (
        <div className="flex-center-center flex-1">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-1 flex-col">
          <Image
            src={baseUrl + "/files/" + part?.fileIds[0]?._id}
            classNames="w-full flex-contain bg-black border-b border-[#ffffff33] bg-opacity-10"
            events={{
              onClick: () => navigation("album"),
            }}
          />
          <ul className="flex flex-col divide-y divide-white divide-opacity-10 py-6 px-4">
            <li className="grid grid-cols-2 gap-4">
              <b className="font-bold text-xs py-6">نام محصول:</b>
              <span className="font-medium text-xs py-6">{part?.title}</span>
            </li>
            <li className="grid grid-cols-2 gap-4">
              <b className="font-bold text-xs py-6">توضیحات محصول:</b>
              <span className="font-medium text-xs py-6">{part?.text}</span>
            </li>
            <li className="grid grid-cols-2 gap-4">
              <b className="font-bold text-xs py-6"> دسته بندی‌ها:</b>
              <div className="flex gap-4 flex-wrap font-medium text-xs py-5">
                {part?.categoryIds?.map((cat, index) => (
                  <span
                    key={"cat" + index}
                    className="bg-gray-600 text-white px-2 py-1 rounded-full"
                  >
                    {cat?.name}
                  </span>
                ))}
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
  loading: state.template.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(V1);
