/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import homePic from "../images/home2.jpeg";

export const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const imageContainerStyle = css({
    position: "relative",
    overflow: "hidden",
    "&:hover img": {
      filter: "brightness(70%)",
    },
  });

  const imageStyle = css({
    width: "100%",
    maxWidth: "auto",
    minWidth: "auto",
    position: "relative",
    transition: "filter 0.3s ease-in-out",
  });

  const textOntheImage = css({
    color: "white",
    fontSize: "40px",
    fontFamily: "monospace",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 2,
    opacity: isHovered ? 1 : 0, // ホバー時には不透明にする
    transition: "opacity 0.3s ease-in-out",
    pointerEvents: "none", // マウスイベントを無効化
  });

  return (
    <>
      <Header />
      <div css={imageContainerStyle}>
        <img
          className={"homemage"}
          src={homePic}
          alt=""
          css={imageStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <div css={textOntheImage}>Hi! I'm a SoftwareEngineer</div>
      </div>
      <Footer />
    </>
  );
};
