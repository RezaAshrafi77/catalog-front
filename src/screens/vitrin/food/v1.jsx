import { useState, useRef, useEffect } from "react";

import {
  MdSearch,
  MdChevronLeft,
  MdChevronRight,
  MdOutlineStickyNote2,
  MdClose,
} from "react-icons/md";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Image,
  Input,
  ListView,
  Food,
  Drawer,
  Navbar,
} from "~/components";

const V1 = ({ template }) => {
  const [searchMode, setSearchMode] = useState(false);
  const [catActiveIndex, setCatActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [onScrolling, setOnScrolling] = useState(false);
  const [notesToggle, setNotesToggle] = useState(false);
  const [catThresolds, setCatThresholds] = useState([]);
  const menuRef = useRef(null);
  const inputRef = useRef(null);
  const navigation = useNavigate();

  const calcScrollOptions = () => {
    let count = 0;
    let scrollPoints = [];
    if (template) {
      for (let cat of template?.allPartCategories) {
        for (let part of template?.parts) {
          if (cat?._id === part?.categoryIds[0]?._id) {
            count = count + 1;
          }
        }
        scrollPoints = [...scrollPoints, count];
        count = 0;
      }
    }
    const heightOfElem =
      document.getElementsByClassName("food-2")[0]?.clientHeight + 20;
    const catHeights = scrollPoints?.map((cat) => cat * heightOfElem);
    let catRanges = [0, 0, 0, 0];
    for (let i in catHeights) {
      if (i == 0) {
        catRanges[i] = catHeights[i];
      } else {
        catRanges[i] = catHeights[i] + catRanges[i - 1];
      }
    }
    setCatThresholds(catRanges);
  };

  const onScroll = (e) => {
    if (e.target.scrollTop === 0) {
      setOnScrolling(false);
    } else {
      setOnScrolling(true);
    }
    if (menuRef?.current?.scrollTop > catThresolds[catActiveIndex] - 200) {
      setCatActiveIndex(catActiveIndex + 1);
    }
    if (menuRef?.current?.scrollTop < catThresolds[catActiveIndex - 1] - 200) {
      setCatActiveIndex(catActiveIndex - 1);
    }
  };

  useEffect(() => {
    calcScrollOptions();
  }, []);

  useEffect(() => {
    if (searchMode) {
      inputRef.current.focus();
    }
  }, [searchMode]);

  return (
    <div
      className={`flex flex-1 flex-col max-w-full max-h-full h-full no-scrollbar overflow-y-scroll overflow-x-hidden bg-[#282828] dark:text-white`}
      onScroll={(e) => onScroll(e)}
      ref={menuRef}
    >
      <Navbar
        classNames="!py-[3vh] bg-black"
        leading={
          <Button
            icon={<MdChevronRight size={"8vw"} color="white" />}
            events={{
              onSubmit: searchMode
                ? () => {
                    setSearchMode(false);
                    setSearchValue("");
                  }
                : () => navigation(-1),
            }}
            classNames="ml-4"
          />
        }
        logo={
          !searchMode ? (
            <div
              className={`transition-transform origin-center bg-white rounded-full flex-center-center ${
                onScrolling ? "scale-100" : "scale-0"
              } w-10 h-10`}
            >
              <Image
                classNames="w-8"
                src="https://api.qbar.ir/static/media/restaurant/logo/1676374524.jpeg"
              />
            </div>
          ) : null
        }
        actions={[
          onScrolling && !searchMode ? (
            <Button
              icon={<MdSearch size="7vw" color="white" />}
              events={{ onSubmit: () => setSearchMode(true) }}
            />
          ) : null,
          <Button
            icon={<MdOutlineStickyNote2 size="7vw" color="white" />}
            events={{ onSubmit: () => setNotesToggle(true) }}
          />,
        ]}
      />
      <Drawer
        open={notesToggle}
        direction="left"
        size="82%"
        events={{
          onClose: () => setNotesToggle(false),
        }}
      >
        <div className="flex-1 flex flex-col justify-between bg-white text-[#282828] rounded-r-2xl px-[6vw] py-[6vh]">
          <div className="flex flex-col flex-1 w-full items-center">
            <header className="flex  justify-between w-full">
              <Button
                icon={<MdClose size={"8vw"} color="black" />}
                events={{ onSubmit: () => setNotesToggle(false) }}
                classNames="ml-4"
              />
            </header>
            <b className="text-lg font-bold mt-6">یادداشت سفارش</b>
          </div>
          <p className="text-center text-lg font-normal">
            برای پرداخت ، مبلغ نهایی را از رستوران دریافت کنید
          </p>
        </div>
      </Drawer>
      {!searchMode ? (
        <>
          <header
            className={`bg-gradient-to-b from-black bg-[#282828] ${
              onScrolling ? "fixed top-[70px]" : ""
            } flex flex-col w-full py-3 z-20 shadow-xl rounded-b-3xl`}
          >
            <div
              className={`transition-transform origin-center overflow-hidden shadow-xl ${
                onScrolling ? "h-0 scale-0" : "h-auto scale-100"
              } flex-col px-[6vw]`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex-center-center">
                  <Image
                    src="https://api.qbar.ir/static/media/restaurant/logo/1676374524.jpeg"
                    classNames="w-10 h-10"
                  />
                </div>
                <h1 className="text-xl font-bold">کافه رستوران ونهان</h1>
              </div>
              <Input
                type="text"
                name="searchValue"
                placeholder="جستجو کنید ..."
                value=""
                rightIcon={
                  <Button
                    icon={<MdSearch size="8vw" color="#bababa" />}
                    events={{
                      onSubmit: () => {},
                      onFocus: () => {},
                      onBlur: () => {},
                    }}
                  />
                }
                events={{
                  onFocus: () => setSearchMode(true),
                }}
                classNames="px-3 py-4 text-sm gap-2 !rounded-3xl shadow-xl !bg-[#444] placeholder:text-gray-300"
                containerClassNames="!bg-[#444] !rounded-2xl pr-2"
              />
            </div>
            <div className={`flex flex-col w-full pt-4 min-h-[8vh]`}>
              <ul className="px-[6vw] overflow-x-scroll pb-4 mt-4 flex items-center max-w-screen">
                {template?.allPartCategories?.map((item, index) => (
                  <Button
                    classNames={`${
                      catActiveIndex === index
                        ? "bg-red-500 text-white"
                        : "border border-solid border-red-500 text-red-500"
                    } font-medium text-sm ml-2 outline-none min-w-fit px-4 !rounded-full !py-1 !max-h-[30px]`}
                    title={item?.name}
                    key={index}
                    events={{
                      onSubmit: () => {
                        setTimeout(() => {
                          setCatActiveIndex(index);
                        }, 1000);
                        if (index === 0) {
                          menuRef.current.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        } else {
                          menuRef.current.scrollTo({
                            top: catThresolds[index - 1],
                            behavior: "smooth",
                          });
                        }
                      },
                    }}
                  />
                ))}
              </ul>
            </div>
          </header>
        </>
      ) : (
        <>
          <header
            className={`bg-gradient-to-b from-black bg-[#282828]
              fixed top-[76px]
             flex flex-col w-full py-3 px-4 z-20 shadow-xl rounded-b-3xl`}
          >
            <form
              onSubmit={(e) => {
                inputRef?.current?.blur();
                e.preventDefault();
              }}
              className="w-full"
            >
              <Input
                type="text"
                name="searchValue"
                value={searchValue}
                refs={inputRef}
                placeholder="جستجو کنید ..."
                events={{
                  onFocus: () => {},
                  onChange: (name, value) => setSearchValue(value),
                }}
                classNames="px-3 py-4 text-sm gap-2 !rounded-3xl shadow-xl !bg-[#444] placeholder:text-gray-300"
                containerClassNames="!bg-[#444] !rounded-2xl"
              />
            </form>
          </header>
        </>
      )}
      <ListView
        classNames={`!bg-[#363636] ${onScrolling || searchMode ? "pt-28" : ""}`}
        type="simple"
        orientation="vertical"
        render={template?.parts
          ?.sort(
            (part1, part2) =>
              part1?.categoryIds[0]?.name - part2?.categoryIds[0]?.name
          )
          ?.filter((part) => part?.title?.includes(searchValue))
          ?.map((part, index) => (
            <Food
              index={1}
              data={part}
              key={"part" + index}
              events={{ onClick: () => {} }}
            />
          ))}
      />
      {onScrolling ? (
        <Button
          classNames={
            "dark:bg-white fixed bottom-4 rounded-full w-12 h-12 rotate-90 left-1/2 -translate-x-1/2"
          }
          icon={<MdChevronLeft color="#555" size="60%" />}
          events={{
            onSubmit: () => {
              menuRef.current.scrollTo({ top: 0, behavior: "smooth" });
            },
          }}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

export default connect(mapStateToProps)(V1);
