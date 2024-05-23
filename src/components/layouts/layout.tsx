import { getMessages } from "next-intl/server";
import Header from "../modules/header";
import { NextIntlClientProvider } from "next-intl";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const messages = await getMessages();

  return (
    <>
      <Header />
      <div className="flex-1 flex-grow">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
