import React from "react";
import { connect } from "react-redux";
import { Button, Navbar, Image } from "~/components";
import { MdCall, MdChevronLeft, MdSearch } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../../config";
import { Loading } from "../../../components";
import { separate } from "../../../utils/funcs";

export const V1 = ({ template, loading }) => {
  const navigation = useNavigate();
  const routeParams = useParams();

  const part = template?.parts?.filter(
    (part) => part?._id === routeParams?.id
  )[0];

  const isSofa = part?.categoryIds?.filter(
    (cat, index) => cat?.name === "مبلمان"
  )?.length;

  return (
    <div className="relative flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden bg-purple-400 bg-opacity-10 text-[#e1e1e1]">
      <Navbar
        classNames="text-textColor bg-purple-400 bg-opacity-30 text-[#e1e1e1] pl-3"
        leading={<div></div>}
        actions={[
          <Button
            icon={<MdChevronLeft size="2.5rem" color="#e1e1e1" />}
            events={{ onSubmit: () => navigation(-1) }}
          />,
        ]}
      />
      {loading || !part ? (
        <div className="flex-center-center flex-1">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-1 flex-col overflow-y-scroll no-scrollbar pb-40">
          <div className="w-full relative">
            <Image
              src={baseUrl + "/files/" + part?.fileIds[0]?._id}
              classNames="w-full flex-contain bg-black border-b border-[#ffffff33] bg-opacity-10"
            />
            <Button
              classNames="absolute right-5 top-4 bg-white bg-opacity-40 backdrop-filter backdrop-filter-md rounded-full p-1.5 shadow-md"
              icon={<MdSearch size="1.5rem" color="white" />}
              events={{
                onSubmit: () => navigation("album"),
              }}
            />
          </div>
          <div className="flex flex-col w-full px-4 mt-8">
            <b className="font-bold text-sm mt-4 text-yellow-400 underline underline-offset-8">
              {" "}
              مشخصات
            </b>
            <ul className="flex flex-col divide-y divide-white divide-opacity-10 py-5">
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
          {(isSofa && template?.price) ? (
            <div className="flex flex-col w-full px-4">
              <b className="font-bold text-sm w-full underline underline-offset-8 mt-4 text-yellow-400">
                قیمت هر بخش
              </b>
              <ul className="flex flex-col divide-y divide-white divide-opacity-10 pt-6">
                <li className="grid grid-cols-2 gap-4">
                  <b className="font-bold text-xs py-6">تک نفره</b>
                  <span className="font-medium text-xs py-6">
                    {separate(Math.round((template?.price || 20000000) / 5.5))}
                  </span>
                </li>
                <li className="grid grid-cols-2 gap-4">
                  <b className="font-bold text-xs py-6">دو نفره</b>
                  <span className="font-medium text-xs py-6">
                    {separate(
                      Math.round(((template?.price || 20000000) / 5.5) * 1.5)
                    )}
                  </span>
                </li>
                <li className="grid grid-cols-2 gap-4">
                  <b className="font-bold text-xs py-6">سه نفره</b>
                  <span className="font-medium text-xs py-6">
                    {separate(
                      Math.round(((template?.price || 20000000) / 5.5) * 2)
                    )}
                  </span>
                </li>
              </ul>
            </div>
          ) : null}
          <Link
            className="flex items-center justify-center text-sm font-medium w-[92vw] rounded-md gap-2 h-[48px] fixed bottom-6 left-[4vw] bg-blue-600 text-white"
            to={`tel:${template?.about?.cellphone}`}
          >
            اطلاع از موجودی و قیمت
            <MdCall size="1.5rem" />
          </Link>
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
