const localesData = {
    en: () => import('../lang/en'),
    pl: () => import('../lang/pl'),
    es: () => import('../lang/es'),
    id: () => import('../lang/id'),
    ru: () => import('../lang/ru'),
    fr: () => import('../lang/fr'),
  };
  
  export async function getLocaleData(locale) {
    const data = await localesData[locale]();
    return data;
  }
  