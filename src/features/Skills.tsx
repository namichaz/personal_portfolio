/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Footer from "components/Footer";
import Graph from "components/Graph";
import Header from "components/Header";
import React from "react";
import js from "../assets/svg/javascript.svg";
import cs from "../assets/svg/css-3.svg";
import html5 from "../assets/svg/html.svg";
import reactSvg from "../assets/svg/react.svg";
import express from "../assets/svg/express.svg";
import c from "../assets/svg/c.svg";

export const Skills = () => {
  const articleStyle = css({
    width: "100vw",
    backgroundColor: "lightgray",
    paddingTop: "50px",
  });
  const textStyle = css({
    paddingLeft: "25%",
    textAlign: "start",
    display: "flex",
  });
  const textStyle2 = css({
    paddingLeft: "24.5%",
    textAlign: "start",
    display: "flex",
    width: "50%",
  });
  const topicStyle = css({
    textDecoration: "underline",
    lineHeight: 2,
    fontFamily: "monospace",
    fontSize: 26,
    fontWeight: "bold",
    paddingLeft: "25%",
    color: "#FFFF9E",
  });
  const languageData = [
    { id: 0, value: 24, label: "Javascript", color: "#FFD700" },
    { id: 1, value: 18, label: "CSS", color: "#2C7CFF" },
    { id: 2, value: 7, label: "C#", color: "#9370DB" },
    { id: 3, value: 18, label: "HTML", color: "#FF5F17" },
  ];
  const frameworkData = [
    { id: 0, value: 5, label: "Express.js", color: "black" },
    { id: 1, value: 4, label: "React", color: "aqua" },
  ];

  return (
    <>
      <article css={articleStyle}>
        <div css={topicStyle}>Skills</div>
        <section css={textStyle}>
          <Graph data={languageData} title={"Language"} />
          <div style={{ display: "flex", gap: "40px", paddingLeft: "100px" }}>
            <img src={js} alt="Icon" style={{ width: "7%" }} />
            <img
              src={cs}
              alt="Icon"
              style={{ width: "7%", paddingLeft: "30px" }}
            />
            <img
              src={html5}
              alt="Icon"
              style={{ width: "10%", paddingTop: "155px" }}
            />
            <img
              src={c}
              alt="Icon"
              style={{ width: "7%", paddingTop: "15px" }}
            />
          </div>
        </section>
        <section css={textStyle2}>
          <Graph data={frameworkData} title={"Framework"} />
          <div style={{ display: "flex", gap: "40px", paddingLeft: "85px" }}>
            <img
              src={reactSvg}
              alt="Icon"
              style={{ width: "10%", paddingLeft: "30px" }}
            />
            <img
              src={express}
              alt="Icon"
              style={{ width: "10%", paddingTop: "10px", paddingLeft: "30px" }}
            />
          </div>
        </section>
      </article>
    </>
  );
};
