import { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

import { Navbar, Button, Image } from "~/components";
import { baseUrl } from "../config";
import { connect } from "react-redux";

export const Images = ({ template }) => {
  const navigation = useNavigate();
  const routeParams = useParams();
  const [activeFile, setActiveFile] = useState(null);

  const part = template?.parts?.filter(
    (part) => part?._id === routeParams?.id
  )[0];

  return routeParams?.id && template?._id ? (
    <div
      key={activeFile}
      className="relative flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden bg-purple-400 bg-opacity-10 text-[#c1c1c1]"
    >
      <Navbar
        classNames="text-[#c1c1c1] pl-3"
        leading={<div></div>}
        actions={[
          <Button
            icon={<MdChevronLeft color="#c1c1c1" size={"2.5rem"} />}
            events={{ onSubmit: () => navigation(-1) }}
          />,
        ]}
      />
      <Image
        key={activeFile}
        src={
          baseUrl +
          "/files/" +
          (activeFile ||
            template?.parts?.filter((part) => part?._id === routeParams?.id)[0]
              ?.fileIds[0]?._id)
        }
        classNames="w-full flex-1 object-contain h-full"
      />
      <div className="w-full flex justify-end ltr overflow-x-scroll py-4 border-t border-solid border-gray-600 divide-x divide-solid divide-gray-600">
        {part?.fileIds?.map((image, index) => (
          <Image
            events={{
              onClick: () => setActiveFile(image?._id),
            }}
            key={"image" + index}
            src={baseUrl + "/files/" + image?._id}
            classNames="object-contain w-32 h-20"
          />
        ))}
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
