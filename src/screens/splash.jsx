import { connect } from "react-redux";
import { useEffect } from "react";

export const Splash = ({ }) => {
  useEffect(() => {
  }, []);

  return (
    <div className="relative flex flex-1 flex-col justify-center items-center max-w-full max-h-full h-full overflow-hidden bg-white">
      <h1 className="text-red-500 font-[tahoma] font-bold text-[50px] animate-pulse">
        Cardino
      </h1>
      <span className="flex fixed bottom-8 left-1/2 -translate-x-1/2 text-red-500 z-50 text-sm">
        <pre>0.0.1 </pre>Version
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

export default connect(mapStateToProps)(Splash);
