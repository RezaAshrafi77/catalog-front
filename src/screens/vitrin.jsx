import {
  MdChevronRight,
  MdChevronLeft,
  MdClose,
  MdFilterListAlt,
} from "react-icons/md";
import { TbMoodEmpty } from "react-icons/tb";
import { useState, useEffect } from "react";
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
  const [activeCat, setActiveCat] = useState(null);
  const [loadingForFilter, setLoadingForFilter] = useState(false);

  useEffect(() => {
    setLoadingForFilter(true);
    setTimeout(() => {
      setLoadingForFilter(false);
    }, 400);
  }, [activeCat]);

  return (
    <div className="relative flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden">
      <Navbar
        classNames="text-textColor bg-surface"
        leading={
          <div
            className="flex items-center gap-1.5"
            onClick={() => setFilterToggle(true)}
          >
            <Button
              icon={<MdFilterListAlt size={"2rem"} />}
              events={{ onSubmit: () => {} }}
              className="text-textColor"
            />
            <span className="font-medium">فیلترها</span>
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
        <div className="relative flex-1 flex flex-col px-[5vw] bg-white bg-opacity-50 backdrop-blur-md">
          <Navbar
            classNames="!px-0"
            leading={<div></div>}
            actions={[
              <Button
                icon={<MdClose size="2rem" color="#cccccc" className="!text-textColor" />}
                events={{ onSubmit: () => setFilterToggle(false) }}
              />,
            ]}
          />
          <div className="flex flex-col flex-1 overflow-y-scroll gap-4">
            {template?.allPartCategories?.length ? (
              <>
                <div className="w-full flex justify-between border-solid border-b border-[#aaa] pb-3">
                  <span className="text-lg font-medium">دسته بندی‌ها</span>
                </div>
                <ul className="flex flex-col gap-8 pt-4">
                  {template?.allPartCategories?.map((cat, index) => (
                    <li className="w-full flex justify-between">
                      <strong className="text-base font-medium">
                        {cat?.name}
                      </strong>
                      <Input
                        key={index}
                        type="radio"
                        name="categories"
                        classNames="w-6"
                        checked={cat?.name === activeCat}
                        events={{
                          onChange: (name, value) =>
                            setActiveCat(
                              cat?.name === activeCat ? null : cat?.name
                            ),
                          onClick: (name, value) =>
                            setActiveCat(
                              cat?.name === activeCat ? null : cat?.name
                            ),
                        }}
                      />
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
        <div className="relative flex-1 flex flex-col bg-white">
          <Navbar
            classNames="bg-surface"
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
                classNames="w-[100vw] mt-2 overflow-x-auto snap-x snap-mandatory scroll-smooth h-[60vw]"
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
          <div className="flex flex-col px-[8vw] pt-8">
            <strong className="text-textColor text-xl font-bold">
              {part?.title}
            </strong>
          </div>
        </div>
      </Drawer>
      {template && !loadingForFilter ? (
        template?.parts?.length ? (
          <div className="h-full overflow-y-scroll pb-[10vh]">
            <div
              className={`grid grid-cols-2 gap-x-6 gap-y-10 px-[8vw] pt-6 pb-10 overflow-x-hidden`}
            >
              {(activeCat
                ? template?.parts?.filter((part) =>
                    part?.categoryIds?.find((cat) => cat?.name === activeCat)
                  )
                : template?.parts
              )?.map((part, index) => (
                <Product
                  classNames={`max-h-[55vw] min-h-[55vw] ${
                    index !== 0 ? (index % 2 !== 0 ? "translate-y-10" : "") : ""
                  }`}
                  data={part}
                  key={"vitrin-items-" + index}
                  style={"square"}
                  events={{
                    onClick: () => setPart(part),
                  }}
                />
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
