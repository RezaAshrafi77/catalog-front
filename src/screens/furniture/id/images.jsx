import { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

import { Navbar, Button, Image, Carousel } from "~/components";
import { baseUrl } from "~/config";
import { connect } from "react-redux";
import { IoChevronBack, IoCloseOutline, IoExitOutline } from "react-icons/io5";

export const Images = ({ template }) => {
  const navigation = useNavigate();
  const routeParams = useParams();

  const part = template?.parts?.filter(
    (part) => part?._id === routeParams?.id
  )[0];

  return routeParams?.id && template?._id ? (
    <div className="relative flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden bg-white">
      <Navbar
        classNames="text-[#e1e1e1] px-4"
        leading={<div></div>}
        actions={[
          <Button
            icon={<IoCloseOutline color="" size={"2.5rem"} />}
            events={{ onSubmit: () => navigation(-1) }}
            classNames="text-gray-900"
          />,
        ]}
      />
      <Carousel
        classNames="w-[100vw] mt-2 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth h-[100%]"
        render={part?.fileIds?.map((file, index) => (
          <Image
            key={"carousel-items-" + index}
            src={baseUrl + "/files/" + file?._id}
            classNames="snap-align-start shrink-0 transition-all object-contain w-[100vw] flex-contain"
          />
        ))}
      />
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
