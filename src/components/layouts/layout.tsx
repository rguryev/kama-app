import Header from "../modules/header";
import Footer from "../modules/footer";
import MaxWidthWrapper from "../max-width-wrapper";
import { ReactNode } from "react";

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
