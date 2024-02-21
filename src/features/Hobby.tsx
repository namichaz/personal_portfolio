/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Container, Grid } from "@mui/material";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import profilePic from "../images/profile.jpeg";
import Card from "components/Card";

const nameStyle = css({
  letterSpacing: 2,
  fontFamily: "auto",
  fontSize: 30,
  display: "flex",
  color: "#FFFF9E",
  width: "100%",
});

const textStyle2 = css({
  fontSize: 16,
  fontFamily: "auto",
  color: "white",
  width: "100%",
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

const Hobby = () => {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "lightgray" }}>
        <Grid container spacing={1}>
          <Card />
          <Card />
          <Card />
        </Grid>{" "}
      </main>
      <Footer />
    </>
  );
};

export default Hobby;
