import React from "react";
import Banner from "../../components/Banner/Banner";
import States from "../../components/States/States";
import PageMeta from "../../components/PageMeta/PageMeta";

const Home = () => {
  return (
    <div>
      <PageMeta
        title="A S M Saim | React Developer"
        description="A S M Saim is a React Developer building responsive, user-friendly, and modern web applications."
      ></PageMeta>
      <div className="max-w-7xl mx-auto">
        <Banner></Banner>
      </div>
      <div className="">
        <States></States>
      </div>
    </div>
  );
};

export default Home;
