import createMiddleware from "next-intl/middleware";
import { Locale, locales } from "./lib/locales";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: "en" satisfies Locale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ru|en)/:path*"],
};
