import Header from "../modules/header";
import Footer from "../modules/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import MaxWidthWrapper from "../max-width-wrapper";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const messages = await getMessages();

  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <Header />
        <MaxWidthWrapper>
          <div className="flex-1 flex-grow">{children}</div>
        </MaxWidthWrapper>
        {/* <Footer /> */}
      </NextIntlClientProvider>
    </>
  );
};

export default Layout;
