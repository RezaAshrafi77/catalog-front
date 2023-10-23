import { Fragment, useState } from "react";
import { MdChevronLeft, MdRefresh } from "react-icons/md";
import { TbMoodEmpty } from "react-icons/tb";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Navbar, Button, Product, Loading, Failed } from "~/components";
import { template } from "../../../redux/actions";

export const V1 = ({ template, getTemplateApi, loading }) => {
  const navigation = useNavigate();
  const [filterToggle, setFilterToggle] = useState(false);

  return (
    <div className="relative flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden bg-purple-400 bg-opacity-10 text-white">
      <Navbar
        classNames="text-textColor bg-purple-400 bg-opacity-30 text-white pl-3"
        leading={
          <strong className="text-white text-base pr-2 font-medium">
            ویترین
          </strong>
        }
        actions={[
          <Button
            icon={<MdRefresh color="#e1e1e1" size={"1.9rem"} />}
            events={{ onSubmit: () => getTemplateApi({ id: template?._id }) }}
          />,
          <Button
            icon={<MdChevronLeft color="#e1e1e1" size={"2.5rem"} />}
            events={{ onSubmit: () => navigation(-1) }}
          />,
        ]}
      />
      {template && !loading ? (
        template?.parts?.length ? (
          <div className="h-full overflow-y-scroll no-scrollbar gap-8 pb-[10vh] pt-[6vh]">
            {template?.allPartCategories?.map((partCat, index) => (
              <div
                className="flex flex-col w-full mb-8"
                key={"partCat" + index}
              >
                <div className="flex items-center w-full px-4">
                  <span className="w-2 h-2 animate-pulse bg-indigo-300 rounded-full"></span>
                  <strong className="text-sm text-indigo-100 py-1 pl-3 pr-1 rounded-md">
                    {partCat?.name}
                  </strong>
                  {/* <span className="h-[1px] flex-1 bg-white bg-opacity-10"></span> */}
                </div>
                <div className="flex items-center overflow-x-scroll no-scrollbar px-4 pt-3 pb-3">
                  {template?.parts
                    ?.filter((part) =>
                      part?.categoryIds?.find(
                        (cat) => cat?.name === partCat?.name
                      )
                    )
                    ?.map((part, index) => (
                      <Fragment>
                        <Product
                          classNames="flex flex-center-center max-w-[45vw] min-w-[45vw] max-h-[45vw] min-h-[45vw]"
                          data={part}
                          key={"vitrin-" + partCat?.name + index}
                          style={"withTag"}
                          events={{
                            onClick: () =>
                              navigation(part?._id, {
                                state: { id: part?._id },
                              }),
                          }}
                        />
                        {template?.parts?.filter((part) =>
                          part?.categoryIds?.find(
                            (cat) => cat?.name === partCat?.name
                          )
                        )?.length !==
                        index + 1 ? (
                          <div className="min-w-[20px] h-[1px] bg-[#ffffff33] shadow-md"></div>
                        ) : null}
                      </Fragment>
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
  loading: state.template.loading,
});

const mapDispatchToProps = {
  getTemplateApi: template.getTemplate,
};

export default connect(mapStateToProps, mapDispatchToProps)(V1);
