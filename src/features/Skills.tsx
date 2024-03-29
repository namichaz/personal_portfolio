/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Graph from "../components/Graph";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export const Skills = () => {
  const articleStyle = css({
    width: "100%",
    height: "100%",
    backgroundColor: "lightgray",
    padding: "30px",
  });
  const textStyle = css({
    padding: "0 25%",
    textAlign: "start",
    display: "flex",
    alignItems: "center",
    "> div": {
      height: "200px !important",
    },
  });
  const textStyle2 = css({
    padding: "0 25%",
    textAlign: "start",
    display: "flex",
    paddingTop: "3%",
    alignItems: "center",
    "> div": {
      height: "200px !important",
    },
  });
  const topicStyle = css({
    textDecoration: "underline",
    lineHeight: 2,
    fontFamily: "auto",
    fontSize: 26,
    fontWeight: "bold",
    paddingLeft: "24%",
    color: "#FFFF9E",
    paddingBottom: "3%",
  });
  const context = css({
    color: "white",
    fontSize: "1rem",
    paddingTop: "5%",
    paddingLeft: "5%",
    fontFamily: "auto",
    width: "20rem",
  });
  const main = css({
    width: "100%",
    height: "100vh",
    maxHeight: "100vh",
  });

  const languageData = [
    { id: 0, value: 24, label: "Javascript", color: "#FFFFDD" },
    { id: 1, value: 18, label: "CSS", color: "#A4C6FF" },
    { id: 2, value: 18, label: "HTML", color: "#FFDBC9" },
    { id: 3, value: 7, label: "C#", color: "#EAD9FF" },
  ];
  const frameworkData = [
    { id: 0, value: 3, label: "Express", color: "#AAAAAA" },
    { id: 1, value: 4, label: "React", color: "#C2EEFF" },
  ];
  const databaseData = [
    { id: 0, value: 13, label: "PostgreSQL", color: "#75A9FF" },
    { id: 1, value: 7, label: "Oracle", color: "#FA8072" },
  ];

  return (
    <>
      <div css={main}>
        <Header />
        <article css={articleStyle}>
          <div css={topicStyle}>Skills </div>
          <section css={textStyle}>
            <Graph data={languageData} title={"Language"} />
            <div css={context}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                言語の中で一番使用歴が長いのはJavascriptになります。
                フロントエンドの業務に携わることが多く、フレームワーク無しで使用する機会が多かったです。
                html、cssなども一通り扱うことができます。
              </motion.div>
            </div>
          </section>
          <section css={textStyle2}>
            <Graph data={frameworkData} title={"Framework"} />
            <div css={context}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                フレームワークの中ではReactを一番使用してます。
                プライベートではVue.jsやNext.jsを勉強中です。
              </motion.div>
            </div>
          </section>
          <section css={textStyle2}>
            <Graph data={databaseData} title={"Database"} />
            <div css={context}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                データベースの中ではPostgresを一番使用してきました。
                次いでOracleも使えます。実務経験は無いですが、Mysqlも使用したことがあります。
              </motion.div>
            </div>
          </section>
        </article>
        <Footer />
      </div>
    </>
  );
};
