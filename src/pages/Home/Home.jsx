import React from "react";
import Banner from "../../components/Banner/Banner";
import States from "../../components/States/States";

const Home = () => {
  return (
    <div>
      <title>Saim-Home</title>
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
