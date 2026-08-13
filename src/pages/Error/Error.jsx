import React from "react";
import errorImg from "../../assets/App-Error.png";
import PageMeta from "../../components/PageMeta/PageMeta";
import { Link } from "react-router";

const Error = () => {
  return (
    <>
      <PageMeta
        title="Page Not Found | A S M Saim"
        description="The page you're looking for could not be found. Return to the portfolio homepage of A S M Saim."
      />

      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center space-y-4">
          <img className="mx-auto" src={errorImg} alt="" />
          <h1 className="text-5xl font-bold">Oops! Page Not Found.</h1>
          <Link
            to="/"
            className="mt-8 btn btn-md border-none rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] "
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
