import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <div className="z-50 bottom-0 bg-slate-100 h-64 inset-x-0">
      <MaxWidthWrapper>
        <div>
          <p>Footer</p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
