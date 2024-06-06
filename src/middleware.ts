import createMiddleware from "next-intl/middleware";
import { Locale } from "./lib/locales";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,
  // Used when no locale matches
  defaultLocale: "en" satisfies Locale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ru|en)/:path*"],
};
