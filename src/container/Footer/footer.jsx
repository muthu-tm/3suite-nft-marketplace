import React, { useContext } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { IconContext } from "react-icons";
//
import "./footer.css";

function Footer(props) {

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer-cont">
      <div className="top-sec">
        <div className="social-icons"></div>
        <IconContext.Provider
          value={{
            size: "1.2em",
            color: "#f8f7f3",
            className: "global-class-name",
          }}
        >
          <div className="top-icon" onClick={backToTop}>
            <BiArrowToTop />
          </div>
        </IconContext.Provider>
      </div>
      <div className="b-bottom" />
      <div className="routes-section">
        <div className="left">
          <div className="power-by">
            <div className="heading">
              <div className="text">Heading</div>
            </div>
            <div className="sub-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut moles
            </div>
          </div>
          {/* <img src={Map} alt="" className="map-img" /> */}
        </div>

        <div className="f-route">
          <div className="route-head">Community</div>
          <ul>
            <li>xyz</li>
            <li>xyz</li>
            <li>xyz</li>
            <li>xyz</li>
          </ul>
        </div>
        <div className="f-route">
          <div className="route-head">Community</div>
          <ul>
            <li>xyz</li>
            <li>xyz</li>
            <li>xyz</li>
            <li>xyz</li>
          </ul>
        </div>
        <div className="f-route">
          <div className="route-head">Community</div>
          <ul>
            <li>xyz</li>
            <li>xyz</li>
            <li>xyz</li>
            <li>xyz</li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: 15 }} />
      <div className="b-bottom" />
      <div style={{ marginBottom: 10 }} />

      <div className="copyRights">
        <div className="sub-text">footer.copyrights.com</div>
        {/* <div className="sub-text">support@godl.com</div> */}
      </div>
      <div style={{ marginBottom: 10 }} />
    </div>
  );
}

export default Footer;
