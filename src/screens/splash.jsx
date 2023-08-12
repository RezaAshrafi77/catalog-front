import { connect } from "react-redux";
import { template } from "../redux/actions";
import { useEffect } from "react";

export const Splash = ({ getTemplateApi, template }) => {
  useEffect(() => {
    getTemplateApi({ id: "64d2743140ed0e6160b144af" });
  }, []);

  return (
    <div className="relative flex flex-1 flex-col justify-center items-center max-w-full max-h-full h-full overflow-hidden bg-primary">
      <h1 className="text-white font-[tahoma] text-[50px] animate-pulse">
        cardino
      </h1>
      <span className="flex fixed bottom-8 left-1/2 -translate-x-1/2 text-white z-50 text-sm">
        <pre>0.0.1 </pre>Version
      </span>
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
