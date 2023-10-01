import { useState, useEffect } from "react";
import { MdChevronRight, MdClose, MdFilterListAlt } from "react-icons/md";
import { TbMoodEmpty } from "react-icons/tb";
import { connect } from "react-redux";
import {
  Navbar,
  Button,
  Input,
  Drawer,
  Product,
  Loading,
  Failed,
} from "~/components";

export const V1 = ({ template }) => {
  const [loadingForFilter, setLoadingForFilter] = useState(false);
  const [activeCat, setActiveCat] = useState(null);
  const [filterToggle, setFilterToggle] = useState(false);

  useEffect(() => {
    setLoadingForFilter(true);
    setTimeout(() => {
      setLoadingForFilter(false);
    }, 400);
  }, [activeCat]);

  return (
    <div className="relative flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden bg-purple-400 bg-opacity-10 text-[#c1c1c1]">
      <Navbar
        classNames="text-textColor bg-purple-400 bg-opacity-30 text-[#c1c1c1] pl-3"
        leading={
          <Button
            icon={<MdChevronRight color="#c1c1c1" size={"2rem"} />}
            events={{ onSubmit: () => navigation(-1) }}
          />
        }
        actions={[
          <div
            className="flex items-center gap-1.5"
            onClick={() => setFilterToggle(true)}
          >
            <Button
              icon={<MdFilterListAlt color="#c1c1c1" size={"2rem"} />}
              events={{ onSubmit: () => {} }}
            />
          </div>,
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
            classNames="!px-0"
            leading={<div></div>}
            actions={[
              <Button
                icon={
                  <MdClose
                    size="2rem"
                    color="#c1c1c1"
                  />
                }
                events={{ onSubmit: () => setFilterToggle(false) }}
              />,
            ]}
          />
          <div className="flex flex-col flex-1 overflow-y-scroll gap-4">
            {template?.allPartCategories?.length ? (
              <>
                <div className="w-full flex justify-between border-solid border-b border-[#555] pb-3">
                  <span className="text-base font-medium">دسته بندی‌ها</span>
                </div>
                <ul className="flex flex-col gap-8 pt-4">
                  {template?.allPartCategories?.map((cat, index) => (
                    <li className="w-full flex justify-between">
                      <strong className="text-xs font-medium">
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
      {template && !loadingForFilter ? (
        template?.parts?.length ? (
          <div className="h-full overflow-y-scroll pb-[10vh]">
            <div
              className={`grid grid-cols-2 gap-x-3 gap-y-3 px-4 pt-6 pb-10 overflow-x-hidden`}
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
                  style={"withTag"}
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

export default connect(mapStateToProps, mapDispatchToProps)(V1);
