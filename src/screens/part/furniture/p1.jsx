import React from "react";
import { MdChevronRight } from "react-icons/md";
import { connect } from "react-redux";
import { Navbar, Button } from "~/components";

export const P1 = (props) => {
  return (
    <div className="relative flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden bg-purple-400 bg-opacity-10 text-[#c1c1c1]">
      <Navbar
        classNames="text-textColor bg-purple-400 bg-opacity-30 text-[#c1c1c1]"
        leading={
          <Button
            icon={<MdChevronRight size={"2.5rem"} />}
            // events={{ onSubmit: () => setPart(null) }}
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
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(P1);
