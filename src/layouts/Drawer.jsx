import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, Button, Navbar, Image } from "~/components";
import {
  MdSearch,
  MdOutlineStickyNote2,
  MdChevronRight,
  MdClose,
} from "react-icons/md";

export default function Drawerr({ data, ...props }) {
  const [notesToggle, setNotesToggle] = useState(false);
  const navigation = useNavigate();
  return (
    <Fragment>
      <Navbar
        classNames="!py-[3vh] bg-black"
        leading={
          <Button
            icon={<MdChevronRight size={"8vw"} color="white" />}
            events={{ onSubmit: () => navigation(-1) }}
            classNames="ml-4"
          />
        }
        logo={
          <div
            className={`transition-transform origin-center bg-white rounded-full flex-center-center ${
              props?.onScrolling ? "scale-100" : "scale-0"
            } w-10 h-10`}
          >
            <Image
              classNames="w-8"
              src="https://api.qbar.ir/static/media/restaurant/logo/1676374524.jpeg"
            />
          </div>
        }
        actions={[
          props?.onScrolling ? (
            <Button
              icon={<MdSearch size="7vw" color="white" />}
              events={{ onSubmit: () => navigation("/search") }}
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
        <div className="flex-1 flex flex-col justify-between bg-white text-background-2-dark rounded-r-2xl px-[6vw] py-[6vh]">
          <div className="flex flex-col flex-1 w-full items-center">
            <header className="flex  justify-between w-full">
              <Button
                icon={<MdClose size={"8vw"} color="black" />}
                events={{ onSubmit: () => navigation(-1) }}
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
    </Fragment>
  );
}