import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { defaultNS, getOptions } from "./settings";

type Language = string;
type Namespace = string | string[];
type Options = { keyPrefix?: string };

const initI18next = async (lng: Language, ns: Namespace) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: Language, namespace: Namespace) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, Array.isArray(ns) ? ns[0] : ns));
  return i18nInstance;
};

export async function useTranslation(
  lng: Language,
  ns?: Namespace,
  options?: Options,
) {
  const i18nextInstance = await initI18next(lng, ns || defaultNS);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns || defaultNS,
      options?.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
}
