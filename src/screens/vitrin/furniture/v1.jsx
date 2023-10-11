import { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { TbMoodEmpty } from "react-icons/tb";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Navbar, Button, Product, Loading, Failed } from "~/components";

export const V1 = ({ template }) => {
  const navigation = useNavigate();
  const [filterToggle, setFilterToggle] = useState(false);

  return (
    <div className="relative flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden bg-purple-400 bg-opacity-10 text-[#c1c1c1]">
      <Navbar
        classNames="text-textColor bg-purple-400 bg-opacity-30 text-[#c1c1c1] pl-3"
        leading={
          <strong className="text-[#c1c1c1] text-lg pr-2 font-medium">
            ویترین
          </strong>
        }
        actions={[
          <Button
            icon={<MdChevronLeft color="#c1c1c1" size={"2.5rem"} />}
            events={{ onSubmit: () => navigation(-1) }}
          />,
        ]}
      />
      {template ? (
        template?.parts?.length ? (
          <div className="h-full overflow-y-scroll no-scrollbar gap-8 pb-[10vh] pt-8">
            {template?.allPartCategories?.map((partCat, index) => (
              <div className="flex flex-col w-full" key={"partCat" + index}>
                <div className="flex items-center w-full px-4">
                  <strong className="bg-white bg-opacity-20 text-white py-1 px-3 rounded-md">
                    {partCat?.name}
                  </strong>
                  <span className="h-[1px] flex-1 bg-white bg-opacity-20"></span>
                </div>
                <div className="flex gap-4 items-center overflow-x-scroll no-scrollbar px-4 py-6">
                  {template?.parts?.map((part, index) => (
                    <Product
                      classNames="max-w-[45vw] min-w-[45vw] max-h-[45vw] min-h-[45vw]"
                      data={part}
                      key={"vitrin-" + partCat?.name + index}
                      style={"withTag"}
                      events={{
                        onClick: () =>
                          navigation(part?._id, { state: { id: part?._id } }),
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
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
