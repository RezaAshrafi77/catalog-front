import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

// redux-actions
// import { setMode } from "~/states/slices/Device";

//components
import {
  Home,
  Vitrin,
  Splash,
  About,
  NotFound,
  DimentionGuide,
  ProductInfo,
  Images,
  Templates,
} from "./screens";
import { checkDevice } from "./utils/funcs";
import { template } from "./redux/actions";
// import { MenuFullLayer } from "~/components";

let splashInterval;
export const Router = ({ getTemplateApi, template }) => {
  const [splashDuration, setSplashDuration] = useState(3);
  const [homeIsReady, setHomeIsReady] = useState(false);
  const [device, setDevice] = useState("mobile");

  useEffect(() => {
    // get data
    if (!template && window.location.pathname.split("/")[1]) {
      getTemplateApi({ id: window.location.pathname.split("/")[1] });
    }
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
                <Route
                  path=""
                  element={<Templates />}
                />
                <Route
                  path="/:id"
                  element={homeIsReady ? <Home /> : <Splash />}
                />
                <Route
                  path="/:id/vitrin"
                  element={<Vitrin position={template?.name?.includes('مبل') ? "furniture" : "food"} />}
                />
                <Route
                  path="/:id/vitrin/:id"
                  element={
                    <ProductInfo position={template?.name?.includes('مبل') ? "furniture" : "food"} />
                  }
                />
                <Route path="/:id/vitrin/:id/album" element={<Images />} />
                <Route path="/:id/about-us" element={<About />} />
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

const mapDispatchToProps = {
  getTemplateApi: template.getTemplate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
