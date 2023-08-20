import React from "react";

import LargeButton from "./LargeButton";

import "../css/utils/numbered-title.css";
import "./DesignSystem.css";
import PrimaryNavigation from "./PrimaryNavigation";

function DesignSystem() {
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
              <p className="ff-serif fs-900 upper-case">Earth</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="ff-serif fs-800 upper-case">Venus</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className="ff-serif fs-700 upper-case">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className="ff-serif fs-600 upper-case">
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className="text-accent">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="ff-sans-cond fs-500 upper-case letter-spacing-1 text-accent">
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div className="flow flow-space" style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-accent">
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className="ff-serif fs-500 upper-case">384,400 km</p>
            </div>
            <div>
              <p className="text-accent">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="ff-sans-cond fs-200 upper-case letter-spacing-3">
                Avg. Distance
              </p>
            </div>
            <div>
              <p className="text-accent">
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className="ff-sans-cond fs-300 upper-case letter-spacing-2">
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

        {/* <!-- navigation --> */}
        <div>
          <PrimaryNavigation />
        </div>

        <div className="flex" style={{ marginTop: "5rem" }}>
          <LargeButton className={undefined} />
          <div>{/* <!-- explore button --> */}</div>

          <div>
            {/* <!-- Tabs --> */}

            {/* <!-- Dots --> */}

            {/* <!-- Numbers --> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DesignSystem;
