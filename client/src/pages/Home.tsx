import React, { useState } from "react";
import Header from "../components/header/Header";
import NavMenu from "../components/home/NavMenu";

type uidProps = {
  uid: object | any;
};

const Home = ({ uid }: uidProps) => {
  return (
    <>
      <Header uid={uid} />
      <div className="homeDiv">
        <NavMenu />
        div.
      </div>
    </>
  );
};

export default Home;
