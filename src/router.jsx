import { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

// redux-actions
// import { setMode } from "~/states/slices/Device";

//components
import {
  Splash,
  NotFound,
  DimentionGuide,
  CafeIntro,
  FurnitureIntro,
  ProjectsIntro,
  CafeHome,
  CafeMenu,
  CafeAbout,
  FurnitureHome,
  FurnitureVitrin,
  FurnitureAbout,
  FurnitureProductInfo,
  FurnitureImages,
} from "./screens";
import { checkDevice } from "./utils/funcs";
// import { MenuFullLayer } from "~/components";

let splashInterval;
export const Router = ({ template }) => {
  const [splashDuration, setSplashDuration] = useState(2);
  const [homeIsReady, setHomeIsReady] = useState(false);
  const [device, setDevice] = useState("mobile");

  useEffect(() => {
    // get data
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });

    // check device width
    setDevice(checkDevice());
    window.addEventListener("resize", () => {
      setDevice(checkDevice());
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
            {device === "mobile" ? (
              <>
                <Route path="" element={<ProjectsIntro />} />
                <Route path="projects" element={<ProjectsIntro />} />
                <Route path="cafe" element={<CafeIntro />} />
                <Route
                  path="cafe/:id"
                  element={!homeIsReady ? <Splash /> : <CafeHome />}
                />
                <Route path="cafe/:id/menu" element={<CafeMenu />} />
                <Route path="cafe/:id/about-us" element={<CafeAbout />} />
                <Route path="furniture" element={<FurnitureIntro />} />
                <Route
                  path="furniture/:id"
                  element={!homeIsReady ? <Splash /> : <FurnitureHome />}
                />
                <Route
                  path="furniture/:id/vitrin"
                  element={<FurnitureVitrin />}
                />
                <Route
                  path="furniture/:id/about-us"
                  element={<FurnitureAbout />}
                />
                <Route
                  path="furniture/:id/vitrin/:id"
                  element={<FurnitureProductInfo />}
                />
                <Route
                  path="furniture/:id/vitrin/:id/album"
                  element={<FurnitureImages />}
                />

                <Route path="*" element={<NotFound />} />
              </>
            ) : (
              <Route path="*" element={<DimentionGuide />} />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

export default connect(mapStateToProps)(Router);
