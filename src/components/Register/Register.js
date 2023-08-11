import React, { useContext, useEffect, useState } from "react";
import "./register.css";
import Heading from "../../container/Heading/Heading";
import ProfSkele from "../../assets/images/profileSkele.png";
import { getAppConfig, getUserData } from "../../services/APIManager";
import { IconContext } from "react-icons";
import { RiImageAddFill } from "react-icons/ri";

function Register() {
  const [tags, setTags] = useState([
    "Animation",
    "3D",
    "DigitalArt",
    "Photography",
    "Starwars",
    "Atlasian",
    "CryptoArt",
    "Vernunft",
  ]);
  const [tagSelected, setTagSelected] = useState([]);

  return (
    <div className="register-sec">
      <Heading title="Register your Profile" />
      <div style={{ marginTop: 50 }} />
      <div className="flex">
     
        <div style={{ width: "50%" ,marginBottom:25}}>
          <div className="label-text" style={{ marginBottom:25}}>Profile Image</div>
          <img src={ProfSkele} alt="" className="prof-img" />
        </div>
        <div style={{ width: "50%",marginBottom:25 }}>
          <div className="label-text" style={{ marginBottom:5}}>Banner Image</div>

          <div className="banner-image"><IconContext.Provider
                value={{
                  size: "3em",
                  color: "#cbccd19c",
                  className: "global-class-name",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    cursor: "pointer",
                    width: "100%",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RiImageAddFill />
                </div>
              </IconContext.Provider></div>
        </div>
      </div>
      <div className="flex">
        <div className="s-textbox">
          <div className="label-text">Name</div>
          <input
            placeholder="Enter your username"
            className="textfield-input"
          />
        </div>
        <div className="s-textbox">
          <div className="label-text">Email</div>
          <input
            placeholder="Enter your email address"
            className="textfield-input"
          />
        </div>
      </div>

      <div className="flex">
        <div style={{ width: "50%" }}>
          <div className="l-textbox">
            <div className="label-text">Bio</div>
            <textarea
              className="textfield-input"
              rows="5"
              cols="50"
              placeholder="Provide a brief description about yourself and your assets "
            ></textarea>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div className="l-textbox">
            <div className="label-text">Preferred Tags</div>
            <div
              className="tags"
              style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}
            >
              {tags?.map((item, index) => {
                return (
                  <div
                    className="single-tag"
                    style={{
                      background: tagSelected.includes(item)
                        ? "#fff"
                        : "transparent",
                      color: tagSelected.includes(item) ? "#000" : "#fff",
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="label-text">External Link</div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: "15px 0",
          }}
        >
          <input
            placeholder="Website Name 1"
            className="textfield-input"
            style={{
              marginBottom: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              width: "30%",
              margin: 0,
            }}
          />
          <input
            placeholder="Website Link 1"
            className="textfield-input"
            style={{
              marginBottom: 0,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              width: "59%",
              margin: 0,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: "15px 0",
          }}
        >
          <input
            placeholder="Website Name 2"
            className="textfield-input"
            style={{
              marginBottom: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              width: "30%",
              margin: 0,
            }}
          />
          <input
            placeholder="Website Link 2"
            className="textfield-input"
            style={{
              marginBottom: 0,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              width: "59%",
              margin: 0,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: "15px 0",
          }}
        >
          <input
            placeholder="Website Name 3"
            className="textfield-input"
            style={{
              marginBottom: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              width: "30%",
              margin: 0,
            }}
          />
          <input
            placeholder="Website Link 3"
            className="textfield-input"
            style={{
              marginBottom: 0,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              width: "59%",
              margin: 0,
            }}
          />
        </div>
      </div>
      <button className="register-btn">Register</button>
    </div>
  );
}

export default Register;
