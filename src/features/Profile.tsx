/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import profilePic from "../images/profile.jpeg";
import Slider from "components/Slider";

export const Profile = () => {
  const articleStyle = css({
    width: "100vw",
    backgroundColor: "lightgray",
    color: "white",
  });

  const nameStyle = css({
    letterSpacing: 2,
    fontFamily: "monospace",
    fontSize: 36,
    display: "flex",
    paddingLeft: "25%",
    color: "#FFFF9E",
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

  const yearStyle = css({
    display: "flex",
    fontSize: 22,
    fontFamily: "monospace",
    paddingLeft: "25%",
  });
  const textStyle = css({
    fontSize: 22,
    fontFamily: "monospace",
    paddingLeft: "25%",
    textAlign: "start",
  });
  const textStyle2 = css({
    fontSize: 18,
    fontFamily: "monospace",
    paddingLeft: "25%",
    paddingTop: 30,
    // opacity: 0.5,
  });

  return (
    <>
      <article css={articleStyle}>
        <div css={textStyle2}>なみかわ たつや</div>
        <section css={nameStyle}>
          <div>Tatsuya Namikawa</div>
          <div style={{ paddingLeft: 150 }}>
            <img
              style={{
                borderRadius: "50%",
                width: 200,
                height: 200,
              }}
              src={profilePic}
              alt=""
            />
          </div>
        </section>
        <br />
        <br />
        <section style={{ lineHeight: 2 }}>
          <div css={topicStyle}>Bio</div>
          <div css={yearStyle}>
            <div style={{ fontWeight: "bold" }}>1988</div>
            <div>&ensp;&ensp;Born in Osaka(大阪), Japan</div>
          </div>
          <div css={yearStyle}>
            <div style={{ fontWeight: "bold" }}>2009</div>
            <div>
              &ensp;&ensp;Graduate Kansai Beauty Colledge(関西美容専門学校)
            </div>
          </div>
          <div css={yearStyle}>
            <div style={{ fontWeight: "bold" }}>2009</div>
            <div>
              &ensp;&ensp;Start Working as a Hair Stylist in Yokohama(横浜)
            </div>
          </div>
          <div css={yearStyle}>
            <div style={{ fontWeight: "bold" }}>2021</div>
            <div>&ensp;&ensp;Start Working as a Software Engineer</div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section style={{ lineHeight: 2 }}>
          <div css={topicStyle}>Work</div>
          <div css={textStyle}>
            &ensp;&ensp;大阪生まれ、幼少期は引っ越しを繰り返し合計５回家が変わる。
            <br />
            美容専門学校を卒業後、横浜にて美容師としてのキャリアをスタート。合計10年ほど美容師として活動。
            <br />
            美容師としてのキャリアに限界を感じ、転職を決意。
            <br />
            ホテルマン、法人営業などを経た後、職業訓練で触れたプログラミングが楽しかったことによりプログラマーに方向転換。
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section style={{ lineHeight: 2 }}>
          <div css={topicStyle}>Favorite</div>
          <div css={textStyle}>
            &ensp;&ensp;甘いもの、旅行、メキシコ料理、深煎りのコーヒー
          </div>
        </section>
        <br />
        <br />
        <br />
        <section style={{ paddingLeft: "6%", backgroundColor: "lightgray" }}>
          <Slider />
        </section>
      </article>
    </>
  );
};