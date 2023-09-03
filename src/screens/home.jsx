import { useState, useEffect } from "react";
import { MdClose, MdSearch, MdMenu, MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { Image, Navbar, Button, Drawer, Input } from "~/components";
import { baseUrl } from "../config";

export const Home = ({ template, ...props }) => {
  const navigation = useNavigate();
  const [menuToggle, setMenuToggle] = useState(false);

  const routes = [
    {
      title: template?.ui?.buttonOfVitrine,
      action: () => {
        navigation("vitrin");
      },
    },
    {
      title: template?.ui?.buttonOfAbout,
      action: () => {
        navigation("about-us");
      },
    },
  ];

  return (
    <div className="flex flex-1 flex-col justify-end max-w-full max-h-full h-full overflow-hidden">
      <Image
        src={baseUrl + "/files/" + template?.backgroundFileId?._id}
        classNames="fixed top-0 left-0 w-full h-full object-fit"
        style={
          {
            // filter: "grayscale(30%)",
          }
        }
        loading="lazy"
      />
      <div className="bg-black bg-opacity-50 w-full h-full fixed top-0 left-0"></div>
      <Navbar
        classNames="!fixed !pt-8 !text-white backdrop-blur-sm"
        logo={<Image src="/icons/logo.svg" classNames="w-10 rounded-md" />}
      />
      <h1 className="z-50 px-[8vw] text-3xl pb-4 text-white font-bold">
        {template?.name}
      </h1>
      <p className="z-50 px-[8vw] pb-[6vh] text-lg text-white font-medium text-opacity-75">
        {template?.subtitle}
      </p>
      {/* <Drawer
        open={menuToggle}
        direction="right"
        size="80%"
        events={{
          onClose: () => setMenuToggle(false),
        }}
      >
        <div className="relative flex-1 flex flex-col pt-[20vh] pr-[8vw] pb-[6vh] gap-[6vh] bg-black bg-opacity-50 backdrop-blur-md">
          <Button
            icon={<MdClose size="10vw" color="#cccccc" />}
            events={{ onSubmit: () => setMenuToggle(false) }}
            classNames={"absolute left-[8vw] top-[8vw]"}
          />
        </div>
      </Drawer> */}
      <div className="w-full flex flex-col divide-y-2 divide-white flex-center-center z-50 bg-black bg-opacity-20 overflow-hidden px-[8vw]">
        {routes?.map((route, index) => (
          <Button
            key={index}
            title={route?.title}
            color="primary"
            type="outlined"
            classNames={`!text-white !justify-start !rounded-none min-h-[10vh] !max-h-[70px] ${
              routes?.length - 1 !== index
                ? "!border-b !border-x-0 !border-t-0 !border-solid !border-[#666]"
                : ""
            }`}
            events={{
              onSubmit: route?.action,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
