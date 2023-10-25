import { useState, useEffect } from "react";
import { MdClose, MdSearch, MdMenu, MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { Image, Navbar, Button, Drawer, Input } from "~/components";
import { baseUrl } from "../config";
import { separate } from "../utils/funcs";

export const Home = ({ template, ...props }) => {
  const navigation = useNavigate();

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
        classNames="fixed top-0 left-0 w-full h-full !object-cover"
        loading="lazy"
      />
      <div className="bg-black bg-opacity-50 w-full h-full fixed top-0 left-0"></div>
      <Navbar
        classNames="!fixed !pt-9 !pb-20  bg-gradient-to-b from-[#000000cc] to-transparent !text-white"
        logo={<Image src="/icons/logo.svg" classNames="w-10 rounded-md" />}
      />
      <h1 className="z-50 px-6 text-2xl pb-4 text-white font-bold">
        {template?.name}
      </h1>
      <p className="z-50 px-6 pb-[6vh] text-[3.8vw] text-gray-300 font-medium">
        {template?.about?.description}
      </p>
      <div className="w-full flex flex-col divide-y-2 divide-white flex-center-center z-50 bg-black bg-opacity-20 overflow-hidden px-6">
        {routes?.map((route, index) => (
          <Button
            key={index}
            title={route?.title}
            color="primary"
            type="outlined"
            classNames={`text-lg  !text-red-500 !justify-start !rounded-none min-h-[10vh] !max-h-[70px] ${
              routes?.length - 1 !== index
                ? "!border-b !border-x-0 !border-t-0 !border-solid !border-[#222]"
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
