/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Graph from "components/Graph";
import React from "react";
import js from "../assets/svg/javascript.svg";
import cs from "../assets/svg/css-3.svg";
import html5 from "../assets/svg/html.svg";
import reactSvg from "../assets/svg/react.svg";
import express from "../assets/svg/express.svg";
import c from "../assets/svg/c.svg";
import postgres from "../assets/svg/postgres.svg";
import oracle from "../assets/svg/oracle.svg";
import mysql from "../assets/svg/mysql.svg";
import Header from "components/Header";
import Footer from "components/Footer";

export const Skills = () => {
  const articleStyle = css({
    width: "100vw",
    height: "100vh",
    backgroundColor: "lightgray",
    paddingTop: "50px",
  });
  const textStyle = css({
    paddingLeft: "10%",
    textAlign: "start",
    display: "flex",
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
    { id: 2, value: 18, label: "HTML", color: "#FF5F17" },
    { id: 3, value: 7, label: "C#", color: "#9370DB" },
  ];
  const frameworkData = [
    { id: 0, value: 5, label: "Express", color: "black" },
    { id: 1, value: 4, label: "React", color: "aqua" },
  ];
  const databaseData = [
    { id: 0, value: 13, label: "PostgreSQL", color: "#4682B4" },
    { id: 1, value: 7, label: "Oracle", color: "red" },
    { id: 2, value: 1, label: "MySQL", color: "#FF9933" },
  ];

  return (
    <>
      <Header />
      <article css={articleStyle}>
        <div css={topicStyle}>Skills</div>
        <section css={textStyle}>
          <Graph data={languageData} title={"Language"} />
          <div
            style={{ display: "contents", gap: "40px", paddingLeft: "10px" }}
          >
            <img src={js} alt="Icon" style={{ width: "7%" }} />
            <img
              src={cs}
              alt="Icon"
              style={{ width: "7%", paddingLeft: "30px" }}
            />
            <img
              src={html5}
              alt="Icon"
              style={{ width: "10%", paddingTop: "20px" }}
            />
            <img
              src={c}
              alt="Icon"
              style={{ width: "7%", paddingTop: "15px" }}
            />
          </div>
        </section>
        <section css={textStyle}>
          <Graph data={frameworkData} title={"Framework"} />
          <div
            style={{ display: "contents", gap: "40px", paddingLeft: "10px" }}
          >
            <img
              src={reactSvg}
              alt="Icon"
              style={{ width: "7%", paddingLeft: "17%" }}
            />
            <img
              src={express}
              alt="Icon"
              style={{
                width: "7%",
                paddingTop: "10px",
                paddingLeft: "30px",
              }}
            />
          </div>
        </section>
        <section css={textStyle}>
          <Graph data={databaseData} title={"Database"} />
          <div
            style={{ display: "contents", gap: "40px", paddingLeft: "10px" }}
          >
            <img
              src={postgres}
              alt="Icon"
              style={{ width: "6%", paddingLeft: "10%" }}
            />
            <img
              src={oracle}
              alt="Icon"
              style={{ width: "6%", paddingTop: "10px", paddingLeft: "30px" }}
            />
            <img
              src={mysql}
              alt="Icon"
              style={{ width: "6%", paddingTop: "10px", paddingLeft: "30px" }}
            />
          </div>
        </section>
        {/* <section css={textStyle2}>
          <Graph data={frameworkData} title={"Framework"} />
          <div
            style={{ display: "contents", gap: "40px", paddingLeft: "100px" }}
          >
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
        </section> */}
        {/* <section css={textStyle3}>
          <Graph data={databaseData} title={"DataBase"} />
          <div
            style={{ display: "contents", gap: "40px", paddingLeft: "100px" }}
          >
            <img
              src={postgres}
              alt="Icon"
              style={{ width: "6%", paddingLeft: "30px" }}
            />
            <img
              src={oracle}
              alt="Icon"
              style={{ width: "6%", paddingTop: "10px", paddingLeft: "30px" }}
            />
            <img
              src={mysql}
              alt="Icon"
              style={{ width: "6%", paddingTop: "10px", paddingLeft: "30px" }}
            />
          </div>
        </section> */}
      </article>
      <Footer />
    </>
  );
};
