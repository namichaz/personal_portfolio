/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import homePic from "../images/home.jpeg";

export const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const mainStyle = css({
    width: "100vw",
    height: "100vh",
    backgroundColor: "lightgray",
    position: "relative",
  });

  const imageContainerStyle = css({
    position: "relative",
    overflow: "hidden",
    "&:hover img": {
      filter: "brightness(40%)",
    },
  });

  const imageStyle = css({
    width: "100%",
    height: "auto",
    maxHeight: "850px",
    maxWidth: "100%",
    minWidth: "auto",
    position: "relative",
    transition: "filter 0.3s ease-in-out",
  });

  const textOntheImage = css({
    color: "white",
    fontSize: "1.5rem",
    fontFamily: "monospace",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "start",
    zIndex: 2,
    opacity: isHovered ? 1 : 0, // ホバー時には不透明にする
    transition: "opacity 0.3s ease-in-out",
    pointerEvents: "none", // マウスイベントを無効化
    letterSpacing: "2px",
  });

  return (
    <main css={mainStyle}>
      <div>
        <Header />
      </div>
      <article css={imageContainerStyle}>
        <img
          src={homePic}
          alt="homeImage"
          css={imageStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <div css={textOntheImage}>
          Hi, I'm Tatsuya
          <br />
          I'm a Software Engineer
          <br />
          This is my personal portfolio
        </div>
      </article>
      <Footer />
    </main>
  );
};
