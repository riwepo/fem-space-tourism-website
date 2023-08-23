import React from "react";

import LargeButton from "../components/LargeButton";
import PrimaryNavigation from "../components/PrimaryNavigation";
import TabList from "../components/TabList";
import DotIndicators from "../components/DotIndicators";
import NumberedIndicators from "../components/NumberedIndicators";

import "../css/utils/numbered-title.css";
import "../css/utils/underline-indicator.css";
import "./DesignSystemPage.css";

const dotIndicatorData = [
  { id: "0", role: "page title" },
  { id: "1", role: "page title" },
  { id: "2", role: "page title" },
];
const tabsData = [
  { id: "0", name: "Moon" },
  { id: "1", name: "Mars" },
  { id: "2", name: "Europa" },
  { id: "3", name: "Titan" },
];

function DesignSystemPage() {
  return (
    <div className="container">
      <h1 className="ff-serif">Design System</h1>
      <section id="colors">
        <h2 className="numbered-title">
          <span>01</span> colors
        </h2>

        <div className="flex">
          <div style={{ flexGrow: "1" }}>
            <div
              className="bg-dark text-light"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>

          <div style={{ flexGrow: "1" }}>
            <div
              className="bg-accent text-dark"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #D0D6F9
            </div>
            <p>
              <span className="text-accent">RGB</span> 208, 214, 249
            </p>
            <p>
              <span className="text-accent">HSL</span> 231°, 77%, 90%
            </p>
          </div>

          <div style={{ flexGrow: "1" }}>
            <div
              className="bg-light text-dark"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #FFFFFF
            </div>
            <p>
              <span className="text-accent">RGB</span> 255, 255, 255
            </p>
            <p>
              <span className="text-accent">HSL</span> 0°, 0%, 100%
            </p>
          </div>
        </div>
      </section>

      <section id="typography" style={{ margin: "4rem 0" }}>
        <h2 className="numbered-title">
          <span>02 </span>Typography
        </h2>
        <div className="flex">
          <div className="flow flow-space" style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-accent">
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className="ff-serif fs-900 uppercase">Earth</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="ff-serif fs-800 uppercase">Venus</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className="ff-serif fs-700 uppercase">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className="ff-serif fs-600 uppercase">
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className="text-accent">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="ff-sans-cond fs-500 uppercase letter-spacing-1 text-accent">
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div className="flow flow-space" style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-accent">
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className="ff-serif fs-500 uppercase">384,400 km</p>
            </div>
            <div>
              <p className="text-accent">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="ff-sans-cond fs-200 uppercase letter-spacing-3">
                Avg. Distance
              </p>
            </div>
            <div>
              <p className="text-accent">
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className="ff-sans-cond fs-300 uppercase letter-spacing-2">
                Europa
              </p>
            </div>
            <div>
              <p className="text-accent">Body Text</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="interactive-elements">
        <h2 className="numbered-title">
          <span>03</span> Interactive elements
        </h2>

        <div>
          <PrimaryNavigation className={undefined} isOpen={false} />
        </div>

        <div className="flex" style={{ marginTop: "5rem" }}>
          <LargeButton className={undefined} />

          <div className="flow">
            <TabList items={tabsData} activeTabIndex={0} onIndexChange={null} />
            <DotIndicators
              items={dotIndicatorData}
              activeItemIndex={0}
              onIndexChange={null}
            />
            <NumberedIndicators />
          </div>
        </div>
      </section>
    </div>
  );
}

export default DesignSystemPage;
