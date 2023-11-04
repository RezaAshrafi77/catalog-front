import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Navbar, Image } from "~/components";
import { MdCall, MdChevronLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "~/config";
import { Carousel, Loading } from "~/components";
import { separate } from "~/utils/funcs";
import { template } from "../../../../redux/actions";

export const V1 = ({ template, getTemplateApi, loading }) => {
  const navigation = useNavigate();
  const routeParams = useParams();

  useEffect(() => {
    if (template?._id !== window.location.pathname.split("/")[2]) {
      getTemplateApi({ id: window.location.pathname.split("/")[2] });
    }
  }, []);

  const part = template?.parts?.filter(
    (part) => part?._id === routeParams?.id
  )[0];

  const isSofa = part?.categoryIds?.filter(
    (cat, index) => cat?.name === "مبلمان"
  )?.length;

  let finalSpecs = [];
  let editedSpecifications = part?.specifications?.length
    ? part?.specifications?.map((item) => {
        return {
          ...item,
          keys: [item?.key],
          values: [item?.tag === "قیمت" ? parseInt(item?.value) : item?.value],
        };
      })
    : [];

  if (editedSpecifications?.length) {
    editedSpecifications.forEach(function (item) {
      var existing = finalSpecs?.filter(function (v, i) {
        return v?.tag == item?.tag;
      });
      if (existing.length) {
        var existingIndex = finalSpecs.indexOf(existing[0]);
        finalSpecs[existingIndex].keys = [
          ...finalSpecs[existingIndex].keys,
          item.key,
        ];
        finalSpecs[existingIndex].values = [
          ...finalSpecs[existingIndex].values,
          item?.tag === "قیمت" ? parseInt(item.value) : item?.value,
        ];
      } else {
        finalSpecs.push(item);
      }
    });
  }

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
          <div className="w-full flex flex-center-center relative bg-black h-[80vw] mb-8">
            <Carousel
              classNames="w-[100vw] mt-2 overflow-x-auto snap-x snap-mandatory scroll-smooth h-[80vw]"
              render={part?.fileIds?.map((file, index) => (
                <Image
                  key={"carousel-items-" + index}
                  src={baseUrl + "/files/" + file?._id}
                  classNames="snap-align-start shrink-0 transition-all object-contain w-[100vw] flex-contain bg-black bg-opacity-10"
                  events={{ onClick: () => navigation("album") }}
                />
              ))}
            />
          </div>
          <div className="flex flex-col px-4 gap-4 pb-8 text-indigo-200">
            <strong className="text-lg font-bold">{part?.title}</strong>
            {part?.text ? (
              <>
                <b className="font-bold text-sm mt-4 text-yellow-400 underline underline-offset-8">
                  توضیحات محصول
                </b>
                <p className="text-xs font-medium leading-9">{part?.text}</p>
              </>
            ) : null}
          </div>
          {finalSpecs?.length
            ? finalSpecs?.map((spec) => (
                <div className="flex flex-col w-full px-4">
                  <b className="font-bold text-sm mt-4 text-yellow-400 underline underline-offset-8">
                    {spec?.tag}
                  </b>
                  <ul className="flex flex-col divide-y divide-white divide-opacity-10 py-4">
                    {spec?.keys?.map((prop, index) => (
                      <li className="grid grid-cols-2 gap-4">
                        <b className="font-bold text-xs py-6 text-indigo-200">
                          {prop}
                        </b>
                        <span className="font-medium text-xs py-6">
                          {spec?.tag === "قیمت" || prop === "قیمت"
                            ? separate(spec?.values[index])
                            : spec?.values[index]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            : null}

          {isSofa && template?.price ? (
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
            اطلاع از موجودی
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

const mapDispatchToProps = {
  getTemplateApi: template.getTemplate,
};

export default connect(mapStateToProps, mapDispatchToProps)(V1);
