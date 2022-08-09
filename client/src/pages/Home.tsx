import React, { useState } from "react";
import Header from "../components/header/Header";
import HomeDesc from "../components/home/HomeDesc";
import Incontournables from "../components/home/Incontournables";
import NavMenu from "../components/home/NavMenu";

type uidProps = {
  uid: object | any;
};

const Home = ({ uid }: uidProps) => {
  return (
    <>
      <Header uid={uid} />
      <div className="homeDiv">
        <HomeDesc />
        <NavMenu />
        <Incontournables />
      </div>
    </>
  );
};

export default Home;
