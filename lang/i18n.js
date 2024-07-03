const localesData = {
    en: () => import('../lang/en'),
    pl: () => import('../lang/pl'),
  };
  
  export async function getLocaleData(locale) {
    const data = await localesData[locale]();
    return data;
  }
  