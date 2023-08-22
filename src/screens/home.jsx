import { useState, useEffect } from "react";
import { MdClose, MdSearch, MdMenu, MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { Image, Navbar, Button, Drawer, Input } from "~/components";

export const Home = ({ template, ...props }) => {
  const navigation = useNavigate();
  const [menuToggle, setMenuToggle] = useState(false);
  const [navigateLoadings, setNavigateLoading] = useState({
    vitrin: false,
    about: false,
  });

  return (
    <div className="flex flex-1 flex-col flex-center-center max-w-full max-h-full h-full overflow-hidden bg-black px-[8vw]">
      <Image
        src="data:image/jpeg;base64,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"
        classNames="fixed top-0 left-0 w-full h-full object-fit"
        style={{
          filter: "grayscale(80%)",
        }}
      />
      <div className="bg-black bg-opacity-50 w-full h-full fixed top-0 left-0"></div>
      <Navbar
        classNames="!pt-8 text-white backdrop-blur-sm"
        leading={
          <></>
          // <Button
          //   icon={<MdMenu size={"11vw"} />}
          //   events={{ onSubmit: () => setMenuToggle(true) }}
          //   className="text-white"
          // />
        }
      />
      <Drawer
        open={menuToggle}
        direction="right"
        size="80%"
        events={{
          onClose: () => setMenuToggle(false),
        }}
      >
        <div className="relative flex-1 flex flex-col pt-[20vh] pr-[8vw] pb-[6vh] gap-[6vh] bg-black bg-opacity-50 backdrop-blur-md">
          <Button
            icon={<MdClose size="10vw" color="white" />}
            events={{ onSubmit: () => setMenuToggle(false) }}
            classNames={"absolute left-[8vw] top-[8vw]"}
          />
        </div>
      </Drawer>
      {/* <div className="flex-1"></div> */}
      {/* <form className="fixed top-0 left-0 h-full w-full z-10 flex flex-col justify-center px-[8vw]">
        <Input
          classNames="px-[3vw] gap-2 font-bold text-black bg-white bg-opacity-50 border-2 border-white"
          containerClassNames="slide-left !h-[54px] bg-transparent"
          name="searchValue"
          rightIcon={
            <MdSearch
              color="white"
              className="border-2 border-white bg-primary p-[8px] h-[54px] w-[54px]"
            />
          }
          value={searchValue}
          placeholder="نام محصول را وارد کنید ..."
          type="text"
          events={{
            onChange: (name, value) => setSearchValue(value),
            onFocus: (e) => e.stopPropagation(),
            onBlur: () => {},
          }}
        />
        <Input
          classNames="flex-1 px-[3vw] !h-[54px] gap-2 font-medium rounded-md text-base text-black bg-white bg-opacity-50 border-2 border-white"
          name="searchValue"
          containerClassNames="slide-right"
          value={searchValue}
          options={["دسته بندی", "مبل", "صندلی"]?.map((option, index) => (
            <option>{option}</option>
          ))}
          leftIcon={
            <MdChevronLeft
              className="absolute left-2 -rotate-90 top-1/2 -translate-y-1/2"
              size="6vw"
              color="white"
            />
          }
          type="select"
          events={{
            onChange: (name, value) => {},
            onFocus: (e) => e.stopPropagation(),
            onBlur: () => {},
          }}
        />
        <Button
          title="جستجو"
          color="primary"
          type="contained"
          classNames="slide-bottom mt-12 !bg-primary"
          loading={loading}
          events={{
            onSubmit: (e) => {
              e.preventDefault();
              setLoading(true);
            },
          }}
        />
      </form> */}
      <div className="w-full flex flex-col flex-center-center gap-4 z-50 backdrop-blur-lg px-[8vw] pt-8 pb-[6vh] rounded-3xl bg-black bg-opacity-20 overflow-hidden">
        <h1 className="text-white opacity-75 text-3xl font-medium mb-[8vh]">
          {template?.name}
        </h1>
        <Button
          key={0}
          loading={navigateLoadings?.vitrin}
          title="مشاهده ویترین"
          color="primary"
          type="contained"
          classNames="!bg-primary"
          events={{
            onSubmit: (e) => {
              setNavigateLoading({ ...navigateLoadings, vitrin: true });
              setTimeout(() => {
                navigation("/vitrin");
              }, 1500);
            },
          }}
        />
        <Button
          key={1}
          title="اطلاعات تماس"
          loading={navigateLoadings?.about}
          color="primary"
          type="outlined"
          classNames="!bg-white text-primary"
          events={{
            onSubmit: (e) => {
              setNavigateLoading({ ...navigateLoadings, about: true });
              setTimeout(() => {
                navigation("/about-us");
              }, 1500);
            },
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
