/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import profilePic from "../images/profile.jpeg";
import Slider from "components/Slider";
import Header from "components/Header";
import Footer from "components/Footer";
import { motion } from "framer-motion";

export const Profile = () => {
  const articleStyle = css({
    width: "100%",
    height: "auto",
    backgroundColor: "lightgray",
    color: "white",
  });

  const nameStyle = css({
    letterSpacing: 2,
    fontFamily: "auto",
    fontSize: 30,
    display: "flex",
    padding: "0px 25%",
    color: "#FFFF9E",
    justifyContent: "space-between",
    fontWeight: "bold",
  });

  const topicStyle = css({
    textDecoration: "underline",
    lineHeight: 2,
    fontFamily: "auto",
    fontSize: 26,
    fontWeight: "bold",
    padding: "0 25%",
    color: "#FFFF9E",
  });

  const yearStyle = css({
    display: "flex",
    fontSize: 16,
    fontFamily: "auto",
    padding: "0 25%",
  });
  const textStyle = css({
    fontSize: 16,
    fontFamily: "auto",
    padding: "0 25%",
    // textAlign: "start",
    wordBreak: "break-word",
  });
  const textStyle2 = css({
    fontSize: 16,
    fontFamily: "auto",
    padding: "0 25%",
    paddingTop: 30,
    // opacity: 0.5,
  });
  const main = css({
    width: "100%",
    height: "auto",
    maxHeight: "100vh",
  });

  return (
    <>
      <div css={main}>
        <Header />
        <article css={articleStyle}>
          <div css={textStyle2}>なみかわ たつや</div>
          <section css={nameStyle}>
            <div>Tatsuya Namikawa</div>
          </section>
          <section style={{ paddingLeft: "60%" }}>
            <div style={{ display: "flex" }}>
              <img
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "auto",
                  maxWidth: "130px",
                  border: "solid",
                }}
                src={profilePic}
                alt=""
              />
            </div>
          </section>
          <section style={{ lineHeight: 2 }}>
            <div css={topicStyle}>Bio</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div css={yearStyle}>
                <div style={{ fontWeight: "bold" }}>1988</div>
                <div>&ensp;&ensp;兵庫県に生まれる</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div css={yearStyle}>
                <div style={{ fontWeight: "bold" }}>2009</div>
                <div>&ensp;&ensp;関西美容専門学校 卒業</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div css={yearStyle}>
                <div style={{ fontWeight: "bold" }}>2009</div>
                <div>&ensp;&ensp;横浜にて美容師として働き始める</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div css={yearStyle}>
                <div style={{ fontWeight: "bold" }}>2021</div>
                <div>
                  &ensp;&ensp;職業訓練を経て、エンジニアとして働き始める
                </div>
              </div>
            </motion.div>
          </section>
          <br />
          <br />
          <br />
          <br />
          <section style={{ lineHeight: 2 }}>
            <div css={topicStyle}>Work</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div css={textStyle}>
                &ensp;&ensp;大阪の美容専門学校を卒業後、横浜にて美容師として働き始めました。横浜市内で2店舗を経験し、約10年ほど美容師として生活してました。
                30歳目前で今後の人生を考えた際に美容師としてのキャリアに限界を感じ転職を決意し、大阪に戻りました。
                ホテルマン、法人営業などを経た後、職業訓練で触れたプログラミングが楽しかったことによりIT業界へ入る事を決めました。
                まだ経験は浅いですが、色々な新しい技術に挑戦していきたいと考えております。
              </div>
            </motion.div>
          </section>
          <br />
          <br />
          <br />
          <br />
          <section style={{ lineHeight: 2 }}>
            <div css={topicStyle}>Favorite</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div css={textStyle}>
                &ensp;&ensp;甘いもの、旅行、メキシコ料理、深煎りのコーヒー
              </div>
            </motion.div>
          </section>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          {/* <br />
        <br />
        <br />
        <section style={{ paddingLeft: "6%", backgroundColor: "lightgray" }}>
          <Slider />
        </section> */}
        </article>
        <Footer />
      </div>
    </>
  );
};
