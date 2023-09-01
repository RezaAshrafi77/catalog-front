import { connect } from "react-redux";
import { useEffect } from "react";

import { Loading } from "../components";

export const Splash = ({}) => {
  useEffect(() => {}, []);

  return (
    <div className="relative flex flex-1 flex-col justify-center items-center max-w-full max-h-full h-full overflow-hidden bg-background">
      <h1 className="text-red-500 font-[tahoma] font-bold text-[10vw] animate-pulse">
        CATALOG
      </h1>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
        <Loading type="dot-falling fill-red-500" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

export default connect(mapStateToProps)(Splash);
