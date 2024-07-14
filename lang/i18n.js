const localesData = {
    en: () => import('../lang/en'),
    pl: () => import('../lang/pl'),
    es: () => import('../lang/es'),
    sg: () => import('../lang/sg'),
  };
  
  export async function getLocaleData(locale) {
    const data = await localesData[locale]();
    return data;
  }
  