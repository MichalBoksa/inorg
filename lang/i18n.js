const localesData = {
    en: () => import('../lang/en'),
    pl: () => import('../lang/pl'),
    es: () => import('../lang/es'),
    id: () => import('../lang/id'),
    ru: () => import('../lang/ru'),
  };
  
  export async function getLocaleData(locale) {
    const data = await localesData[locale]();
    return data;
  }
  