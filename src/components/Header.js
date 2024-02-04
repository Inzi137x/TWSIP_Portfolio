import React, { useState } from "react";
import DarkMode from "./dark mode/DarkMode";
import "./Header.css";

export default function Header() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const [zoom, setZoom] = useState({
    zoomHome: { transition: "", transform: "" },
    zoomSkill: { transition: "", transform: "" },
    zoomProject: { transition: "", transform: "" },
    zoomAboutMe: { transition: "", transform: "" },
    zoomContact: { transition: "", transform: "" },
  });

  const [disp, setDisp] = useState({
    dispHome: "hidden",
    dispSkill: "hidden",
    dispProject: "hidden",
    dispAboutMe: "hidden",
    dispContact: "hidden",
  });
  return (
    <div className={color ? "box box-bg" : "box"}>
      <div className="profile-logo">
        <img src="/images/profile-logo.png" alt="profile logo"></img>
      </div>
      <div className="header">
        <div
          id="home"
          onMouseOut={() => {
            setZoom(() => {
              return {
                ...zoom,
                zoomHome: {
                  transition: "",
                  transform: "",
                },
              };
            });
            setDisp(() => {
              return {
                ...disp,
                dispHome: "hidden",
              };
            });
          }}
          onMouseOver={() => {
            setZoom(() => {
              return {
                ...zoom,
                zoomHome: {
                  transition: "transform 0.5s",
                  transform: "scale(1.1)",
                },
              };
            });
            setDisp(() => {
              return {
                ...disp,
                dispHome: "visible",
              };
            });
          }}
          style={zoom.zoomHome}
        >
          <span style={{ visibility: disp.dispHome }} className="closure">
            &lt;{" "}
          </span>
          <a
            className={color ? null : "header-color"}
            href="#home-section"
            style={{ textDecoration: "none" }}
          >
            Home
          </a>
          <span style={{ visibility: disp.dispHome }}> /&gt;</span>
        </div>
        <div
          style={zoom.zoomSkill}
          onMouseOut={() => {
            setZoom(() => {
              return {
                ...zoom,
                zoomSkill: {
                  transition: "",
                  transform: "",
                },
              };
            });
            setDisp(() => {
              return {
                ...disp,
                dispSkill: "hidden",
              };
            });
          }}
          onMouseOver={() => {
            setZoom(() => {
              return {
                ...zoom,
                zoomSkill: {
                  transition: "transform 0.5s",
                  transform: "scale(1.1)",
                },
              };
            });
            setDisp(() => {
              return {
                ...disp,
                dispSkill: "visible",
              };
            });
          }}
        >
          <span style={{ visibility: disp.dispSkill }} className="closure">
            {" "}
            &lt;{" "}
          </span>
          <a href="#skill-section" style={{ textDecoration: "none" }}>
            Skills
          </a>
          <span style={{ visibility: disp.dispSkill }}> /&gt;</span>
        </div>
        <div
          style={zoom.zoomProject}
          onMouseOut={() => {
            setZoom(() => {
              return {
                ...zoom,
                zoomProject: {
                  transition: "",
                  transform: "",
                },
              };
            });
            setDisp(() => {
              return {
                ...disp,
                dispProject: "hidden",
              };
            });
          }}
          onMouseOver={() => {
            setZoom(() => {
              return {
                ...zoom,
                zoomProject: {
                  transition: "transform 0.5s",
                  transform: "scale(1.1)",
                },
              };
            });
            setDisp(() => {
              return {
                ...disp,
                dispProject: "visible",
              };
            });
          }}
        >
          <span style={{ visibility: disp.dispProject }} className="closure">
            {" "}
            &lt;{" "}
          </span>
          <a href="#projects-section" style={{ textDecoration: "none" }}>
            Projects
          </a>
          <span style={{ visibility: disp.dispProject }}> /&gt;</span>
        </div>
        <div
          style={zoom.zoomAboutMe}
          onMouseOut={() => {
            setZoom(() => {
              return {
                ...zoom,
                zoomAboutMe: {
                  transition: "",
                  transform: "",
                },
              };
            });
            setDisp(() => {
              return {
                ...disp,
                dispAboutMe: "hidden",
              };
            });
          }}
          onMouseOver={() => {
            setZoom(() => {
              return {
                ...zoom,
                zoomAboutMe: {
                  transition: "transform 0.5s",
                  transform: "scale(1.1)",
                },
              };
            });
            setDisp(() => {
              return {
                ...disp,
                dispAboutMe: "visible",
              };
            });
          }}
        >
          <span style={{ visibility: disp.dispAboutMe }} className="closure">
            {" "}
            &lt;{" "}
          </span>
          <a href="#aboutme" style={{ textDecoration: "none" }}>
            AboutMe
          </a>
          <span style={{ visibility: disp.dispAboutMe }}> /&gt;</span>
        </div>
        <div
          style={zoom.zoomContact}
          onMouseOut={() => {
            setZoom(() => {
              return {
                ...zoom,
                zoomContact: {
                  transition: "",
                  transform: "",
                },
              };
            });
            setDisp(() => {
              return {
                ...disp,
                dispContact: "hidden",
              };
            });
          }}
          onMouseOver={() => {
            setZoom(() => {
              return {
                ...zoom,
                zoomContact: {
                  transition: "transform 0.5s",
                  transform: "scale(1.1)",
                },
              };
            });
            setDisp(() => {
              return {
                ...disp,
                dispContact: "visible",
              };
            });
          }}
        >
          <span style={{ visibility: disp.dispContact }} className="closure">
            {" "}
            &lt;{" "}
          </span>
          <a href="#contact" style={{ textDecoration: "none" }}>
            Contact
          </a>
          <span style={{ visibility: disp.dispContact }}> /&gt;</span>
        </div>
      </div>
      <DarkMode />
    </div>
  );
}
