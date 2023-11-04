import { connect } from "react-redux";
import { useEffect } from "react";

import { Loading, Image } from "../components";
import { template } from "../redux/actions";

export const Splash = ({ getTemplateApi }) => {
  useEffect(() => {
    getTemplateApi({ id: window.location.pathname.split("/")[2] });
  }, []);

  return (
    <div className="relative flex flex-1 flex-col justify-center items-center max-w-full max-h-full h-full overflow-hidden bg-gray-900">
      <Image src={"/icons/logo.svg"} classNames=" w-1/5 md:w-20" />
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
        <Loading type="dot-falling fill-red-500" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

const mapDispatchToProps = {
  getTemplateApi: template.getTemplate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
