import React from "react";
import Header from "../components/header/Header";

type uidProps = {
  uid: object | any;
};
const About = ({ uid }: uidProps) => {
  return (
    <>
      <Header uid={uid} />
      <div>
        <h1>ABOUT</h1>
      </div>
    </>
  );
};

export default About;
