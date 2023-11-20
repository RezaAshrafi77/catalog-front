import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Navbar, Image } from "~/components";
import { MdCall, MdChevronLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "~/config";
import { Carousel, Loading } from "~/components";
import { separate } from "~/utils/funcs";
import { template } from "../../../../../redux/actions";
import { IoChevronForward, IoHeartOutline } from "react-icons/io5";
import "./index.scss";

export const V1 = ({ template, getTemplateApi, loading }) => {
  const navigation = useNavigate();
  const routeParams = useParams();
  const [activeImage, setActiveImage] = useState(0);

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
  const dir = "sfpiv1-";

  return (
    <div className="sfpiv1-wrapper">
      <Navbar
        classNames="sfpiv1-navbar"
        leading={
          <Button
            icon={<IoChevronForward size={"1.75rem"} />}
            events={{ onSubmit: () => navigation(-1) }}
            classNames="text-gray-900"
          />
        }
        actions={[
          <Button
            icon={<IoHeartOutline size="2rem" color="" />}
            events={{ onSubmit: () => {} }}
            classNames="text-red-500"
          />,
        ]}
      />
      {loading || !part ? (
        <div className="flex-center-center flex-1">
          <Loading />
        </div>
      ) : (
        <div className="sfpiv1-scrollYBox no-scrollbar">
          <div className="sfpiv1-imageContainer">
            <Image
              src={baseUrl + "/files/" + part?.fileIds[activeImage]?._id}
              classNames="sfpiv1-image snap-align-start"
              events={{ onClick: () => navigation("album") }}
            />
          </div>
          <div className="sfpiv1-imageList">
            {part?.fileIds?.map((file, index) => (
              <Image
                src={baseUrl + "/files/" + file?._id}
                classNames={`sfpiv1-smallImage ${
                  activeImage === index ? "sfpiv1-smallImage-active" : ""
                }`}
                key={"products-image-" + index}
                events={{ onClick: () => setActiveImage(index) }}
              />
            ))}
          </div>
          <div className="sfpiv1-info">
            <strong className="text-lg font-bold text-gray-700">
              {part?.title}
            </strong>
            {part?.text ? (
              <>
                <b className="sfpiv1-info-tag">توضیحات محصول</b>
                <p className="sfpiv1-info-text">{part?.text}</p>
              </>
            ) : null}
          </div>
          {finalSpecs?.length
            ? finalSpecs?.map((spec) => (
                <div className="flex flex-col w-full px-4">
                  <b className="sfpiv1-info-tag">
                    {spec?.tag}
                  </b>
                  <ul className="sfpiv1-info-specs">
                    {spec?.keys?.map((prop, index) => (
                      <li className="grid grid-cols-2 gap-4 px-2">
                        <b className="font-bold text-xs py-6 text-gray-700">
                          {prop}
                        </b>
                        <span className="font-medium text-sm py-6">
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
