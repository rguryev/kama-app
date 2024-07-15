import Header from "./header/header";
import Footer from "./footer";

import { ReactNode } from "react";
import MaxWidthWrapper from "@/wrappers/max-width-wrapper";

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <MaxWidthWrapper>
        <div className="flex-1 flex-grow">{children}</div>
      </MaxWidthWrapper>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
