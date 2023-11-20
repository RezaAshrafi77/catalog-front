import { Fragment, useState, useEffect } from "react";
import { IoChevronBack, IoMenu } from "react-icons/io5";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Navbar, Button, Product, Loading, Failed } from "~/components";
import { template } from "~/redux/actions";

export const V1 = ({ template, getTemplateApi, loading }) => {
  const navigation = useNavigate();
  const [catActiveIndex, setCatActiveIndex] = useState(0);
  const [catLoading, setCatLoading] = useState(false);
  const [scrollToggle, setScrollToggle] = useState(false);

  useEffect(() => {
    if (template?._id !== window.location.pathname.split("/")[2]) {
      getTemplateApi({ id: window.location.pathname.split("/")[2] });
    }
  }, []);

  useEffect(() => {
    setCatLoading(true);
    setTimeout(() => {
      setCatLoading(false);
    }, 1000);
  }, [catActiveIndex]);

  return (
    <div className="relative flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden bg-white text-black pt-4 select-none">
      <Navbar
        classNames="text-textColor text-black px-4"
        leading={
          <Button
            icon={<IoMenu size={"2rem"} />}
            events={{ onSubmit: () => {} }}
            classNames="text-gray-900"
          />
        }
        actions={[
          <Button
            icon={<IoChevronBack size={"1.75rem"} />}
            events={{ onSubmit: () => navigation(-1) }}
            classNames="text-gray-900"
          />,
        ]}
      />

      <header className="pt-6 pb-2 gap-4 w-full flex flex-col">
        {!scrollToggle ? (
          <div className="flex flex-col gap-1 px-5">
            <span className="font-normal text-sm">سلام!</span>
            <p className="font-medium text-base">
              دنبال چه محصولی برای خرید هستی؟
            </p>
          </div>
        ) : null}
        <ul className="flex w-full px-5 pb-3 overflow-x-scroll no-scrollbar">
          {template?.allPartCategories?.map((item, index) => (
            <Button
              classNames={`${
                catActiveIndex === index
                  ? "bg-[#028779] text-white border-2 border-solid border-[#028779]"
                  : "border-2 border-solid border-[#028779] text-[#028779]"
              } font-medium text-sm ml-2 outline-none min-w-fit px-4 !rounded-full !py-1 !max-h-[30px]`}
              title={item?.name}
              key={index}
              events={{
                onSubmit: () => {
                  setCatActiveIndex(index);
                },
              }}
            />
          ))}
        </ul>
      </header>
      {template && !catLoading ? (
        <div
          className="flex-1 overflow-y-scroll flex flex-col px-5 pt-4 gap-8 bg-white drop-shadow-lg ltr pb-[30vh]"
          onScroll={(e) => {
            if (e.target.scrollTop === 0) {
              setScrollToggle(false);
            } else {
              setScrollToggle(true);
            }
          }}
        >
          {template?.parts
            ?.filter(
              (part) =>
                part?.categoryIds[0]?._id ===
                template?.allPartCategories[catActiveIndex]?._id
            )
            ?.map((part, index) => (
              <Product
                key={index}
                style="sofa"
                data={part}
                events={{
                  onClick: () => navigation(part?._id),
                }}
              />
            ))}
        </div>
      ) : null}
      {loading || catLoading ? (
        <div className="flex-1 flex-center-center">
          <Loading type="dot-pulse" />
        </div>
      ) : null}
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
