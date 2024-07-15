import Header from "./header/header";
import Footer from "./footer";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const BlogLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="mx-auto w-full max-w-screen-xl flex-1 flex-grow px-2 sm:px-0">
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default BlogLayout;
