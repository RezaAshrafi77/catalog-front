import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

// redux-actions
// import { setMode } from "~/states/slices/Device";

//components
import { Home, Vitrin, Splash, About } from "./screens";
// import { MenuFullLayer } from "~/components";

let splashInterval;
export const Router = ({ template }) => {
  const [splashDuration, setSplashDuration] = useState(3);
  const [homeIsReady, setHomeIsReady] = useState(false);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  useEffect(() => {
    splashInterval = setInterval(() => {
      setSplashDuration(splashDuration - 1);
    }, 1000);
    return () => clearInterval(splashInterval);
  }, [splashDuration]);

  useEffect(() => {
    if (splashDuration === 0) {
      clearInterval(splashInterval);
      if (template) {
        setHomeIsReady(true);
      }
    }
  }, [splashDuration, template]);

  return (
    <div className={`dark h-full`}>
      <div
        className={`flex flex-col h-full w-full rtl overflow-x-hidden lg:py-0`}
      >
        {/* {menuFullLayer ? <MenuFullLayer /> : null} */}
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              exact
              element={homeIsReady ? <Home /> : <Splash />}
            />
            <Route path="/vitrin" exact element={<Vitrin />} />
            <Route path="/about-us" exact element={<About />} />
            <Route path="*" exact element={<></>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
