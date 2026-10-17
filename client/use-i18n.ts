import { useMemo } from "react";
import { usePrefs } from "./prefs";
import { translate } from "./i18n";

export function useI18n() {
  const { language } = usePrefs();
  return useMemo(() => (text: string, values?: Record<string, string | number>) => translate(language, text, values), [language]);
}

export type Translate = ReturnType<typeof useI18n>;
