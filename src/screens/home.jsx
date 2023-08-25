import { useState, useEffect } from "react";
import { MdClose, MdSearch, MdMenu, MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { Image, Navbar, Button, Drawer, Input } from "~/components";
import { baseUrl } from "../config";

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
        src={baseUrl + "/files/" + template?.backgroundFileId?._id}
        classNames="fixed top-0 left-0 w-full h-full object-fit"
        style={{
          filter: "grayscale(80%)",
        }}
        loading="lazy"
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
      <div className="w-full flex flex-col flex-center-center gap-5 z-50 backdrop-blur-lg px-[8vw] pt-8 pb-[6vh] rounded-3xl bg-black bg-opacity-20 overflow-hidden">
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
                navigation("vitrin");
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
                navigation("about-us");
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
