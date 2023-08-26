import {
  MdChevronRight,
  MdChevronLeft,
  MdClose,
  MdFilterListAlt,
} from "react-icons/md";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Navbar,
  Button,
  Product,
  Drawer,
  Loading,
  Carousel,
} from "~/components";
import Image from "../components/Image";
import { baseUrl } from "../config";

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
            icon={<MdFilterListAlt size={"2rem"} />}
            events={{ onSubmit: () => setFilterToggle(true) }}
            className="text-white"
          />
        }
        actions={[
          <Button
            icon={<MdChevronLeft size={"2.5rem"} />}
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
                icon={<MdClose size="2rem" color="white" />}
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
                icon={<MdChevronRight size={"2.5rem"} />}
                events={{ onSubmit: () => setPart(null) }}
                className="text-white"
              />
            }
          />
          {part?.fileIds?.length > 1 ? (
            <Carousel
              classNames="w-[100vw] overflow-x-auto snap-x snap-mandatory scroll-smooth"
              render={part?.fileIds?.map((file, index) => (
                <Image
                  key={"carousel-items-" + index}
                  src={baseUrl + "/files/" + file?._id}
                  classNames="snap-align-start shrink-0 transition-all object-contained w-[90vw] m-3 bg-red-100"
                  events={{ onClick: () => {} }}
                />
              ))}
            />
          ) : (
            <Image
              src={baseUrl + "/files/" + part?.fileIds[0]?._id}
              classNames="object-contained w-full bg-red-100"
              key="vitrin-drawer-image"
              events={{ onClick: () => {} }}
            />
          )}
          <div className="flex flex-col px-[8vw] pt-16">
            <strong className="text-white text-3xl font-bold">
              {part?.title}
            </strong>
          </div>
        </div>
      </Drawer>
      {template ? (
        <div className="h-full overflow-y-scroll pb-[10vh]">
          <div
            className={`grid grid-cols-2 gap-3 px-4 py-10 min-h-full overflow-x-hidden`}
          >
            {template?.parts?.map((part, index) => (
              <>
                {template?.parts?.length < 3 ? (
                  <Product
                    data={part}
                    key={'vitrin-items-' + index}
                    style={"square"}
                    events={{
                      onClick: () => setPart(part),
                    }}
                  />
                ) : (
                  <Product
                    data={part}
                    key={'vitrin-items-' + index}
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
      ) : (
        <div className="flex-1 flex-center-center">
          <Loading />
        </div>
      )}
    </div>
  );
};

// 1,3,7,9,12,14,18

const mapStateToProps = (state) => ({
  template: state.template.template,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Vitrin);
