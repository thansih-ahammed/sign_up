import React from "react";
// import { Helmet } from "react-helmet";

export default function NoMatch() {
  return (
    <>
      {/* <Helmet>
        <title> Error </title>
      </Helmet> */}
      <div className="h-screen justify-center items-center bg-white py-[90px] px-0 w-full ">
        <h2 className="pt-[90px] text-sm text-red-600">Error 404! Page not found .⚠️</h2>
      </div>
    </>
  );
}
