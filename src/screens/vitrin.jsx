import {
  MdChevronRight,
  MdChevronLeft,
  MdClose,
  MdFilterListAlt,
} from "react-icons/md";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Navbar, Button, Product, Drawer } from "~/components";
import Image from "../components/Image";

export const Vitrin = ({ template, ...props }) => {
  const navigation = useNavigate();
  const [filterToggle, setFilterToggle] = useState(false);
  const [part, setPart] = useState(null);

  return (
    <div className="relative flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden bg-gradient">
      <Navbar
        classNames="!pt-8 text-white"
        leading={
          <Button
            icon={<MdFilterListAlt size={"9vw"} />}
            events={{ onSubmit: () => setFilterToggle(true) }}
            className="text-white"
          />
        }
        actions={[
          <Button
            icon={<MdChevronLeft size={"11vw"} />}
            events={{ onSubmit: () => navigation(-1) }}
            className="text-white"
          />,
        ]}
        title="ویترین"
      />
      <Drawer
        key={"vitrin-drawer-filter"}
        open={filterToggle}
        direction="right"
        size="75%"
        events={{
          onClose: () => setFilterToggle(false),
        }}
      >
        <div className="relative flex-1 flex flex-col px-4 bg-black bg-opacity-50 backdrop-blur-md">
          <Navbar
            classNames="!pt-8 !px-0"
            leading={<div></div>}
            actions={[
              <Button
                icon={<MdClose size="10vw" color="white" />}
                events={{ onSubmit: () => setFilterToggle(false) }}
              />,
            ]}
          />
        </div>
      </Drawer>
      <Drawer
        key={"vitrin-drawer-part"}
        open={part}
        direction="right"
        size="100%"
        events={{
          onClose: () => setPart(null),
        }}
      >
        <div className="relative flex-1 flex flex-col bg-gradient-to-b from-[#171120] to-[#39355d]">
          <Navbar
            classNames="!pt-8"
            leading={
              <Button
                icon={<MdChevronRight size={"11vw"} />}
                events={{ onSubmit: () => setPart(null) }}
                className="text-white"
              />
            }
          />
          <Image
            src={part?.fileId}
            classNames="object-contained w-full bg-red-100 h-[100vw] min-h-[92vw]"
            events={{ onClick: () => {} }}
          />
          <div className="flex flex-col px-[8vw] pt-6">
            <strong className="text-white text-3xl font-bold">
              {part?.title}
            </strong>
          </div>
        </div>
      </Drawer>
      <div className="h-full overflow-y-scroll pb-[10vh]">
        <div className={`grid grid-cols-2 gap-3 p-4 overflow-x-hidden`}>
          {template?.parts?.map((part, index) => (
            <>
              {template?.parts?.length < 3 ? (
                <Product
                  data={part}
                  key={index}
                  style={"square"}
                  events={{
                    onClick: () => setPart(part),
                  }}
                />
              ) : (
                <Product
                  data={part}
                  key={index}
                  style={
                    index === 1 ||
                    ((index - 1) % 6 === 0 && index !== 1) ||
                    (index % 3 === 0 && index % 2 !== 0)
                      ? "portrait"
                      : "square"
                  }
                  events={{
                    onClick: () => setPart(part),
                  }}
                />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

// 1,3,7,9,12,14,18

const mapStateToProps = (state) => ({
  template: state.template.template,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Vitrin);
