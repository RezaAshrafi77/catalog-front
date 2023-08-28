import {
  MdChevronRight,
  MdChevronLeft,
  MdClose,
  MdFilterListAlt,
} from "react-icons/md";
import { TbMoodEmpty } from "react-icons/tb";
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
  Failed,
  Input,
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
        classNames="!pt-8 text-textColor"
        leading={
          <div className="flex items-center gap-1.5">
            <Button
              icon={<MdFilterListAlt size={"2rem"} />}
              events={{ onSubmit: () => setFilterToggle(true) }}
              className="text-textColor"
            />
            <span>فیلترها</span>
          </div>
        }
        actions={[
          <Button
            icon={<MdChevronLeft size={"2.5rem"} />}
            events={{ onSubmit: () => navigation(-1) }}
            className="text-textColor"
          />,
        ]}
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
        <div className="relative flex-1 flex flex-col px-[5vw] bg-black bg-opacity-50 backdrop-blur-md">
          <Navbar
            classNames="!pt-8 !px-0"
            leading={<div></div>}
            actions={[
              <Button
                icon={<MdClose size="2rem" color="#cccccc" />}
                events={{ onSubmit: () => setFilterToggle(false) }}
              />,
            ]}
          />
          <div className="flex flex-col flex-1 overflow-y-scroll gap-4">
            {template?.allPartCategoris?.length || true ? (
              <>
                <div className="w-full flex justify-between border-solid border-b border-[#555] pb-3">
                  <span className="text-lg font-medium">دسته بندی‌ها</span>
                </div>
                <ul className="flex flex-col gap-8 pt-4">
                  {template?.allPartCategoris?.map((cat, index) => (
                    <li className="w-full flex justify-between">
                      <strong className="text-base font-medium">
                        {cat?.name}
                      </strong>
                      <Input type="radio" name="categories" classNames="w-6" />
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
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
                className="text-textColor"
              />
            }
          />
          {part?.fileIds?.length > 1 ? (
            part ? (
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
            ) : null
          ) : part ? (
            <Image
              src={baseUrl + "/files/" + part?.fileIds[0]?._id}
              classNames="object-contained w-full bg-red-100"
              key="vitrin-drawer-image"
              events={{ onClick: () => {} }}
            />
          ) : null}
          <div className="flex flex-col px-[8vw] pt-16">
            <strong className="text-textColor text-3xl font-bold">
              {part?.title}
            </strong>
          </div>
        </div>
      </Drawer>
      {template ? (
        template?.parts?.length ? (
          <div className="h-full overflow-y-scroll pb-[10vh]">
            <div
              className={`grid grid-cols-2 gap-3 px-4 py-10 overflow-x-hidden`}
            >
              {template?.parts?.map((part, index) => (
                <>
                  {template?.parts?.length < 3 ? (
                    <Product
                      data={part}
                      key={"vitrin-items-" + index}
                      style={"square"}
                      events={{
                        onClick: () => setPart(part),
                      }}
                    />
                  ) : (
                    <Product
                      data={part}
                      key={"vitrin-items-" + index}
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
          <Failed
            icon={<TbMoodEmpty size="40vw" color="yellow" />}
            subtitle="هیچ محصولی یافت نشد."
            classNames="gap-6"
          />
        )
      ) : (
        <div className="flex-1 flex-center-center">
          <Loading />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Vitrin);
