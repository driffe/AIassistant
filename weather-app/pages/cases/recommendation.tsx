import Translations from '../api/hoodie_translation';

function getClothingRecommendation(feelLikeTemperature: number, language: string): string {

  const translations: Record<string, Translations> = {
    en: {
      moreHoodies: 'More Hoodies',
      fleeceHoodie: 'Fleece Hoodie Day',
      bestHoodie: 'Hoodie is the best',
      tShirtDay: 'T-Shirt Day',
    },
    kr: {
      moreHoodies: '후드티로는 부족해',
      fleeceHoodie: '기모후드티 날씨',
      bestHoodie: '후드티 날씨',
      tShirtDay: '티셔츠 날씨',
    },
    // Add more languages as needed
  };

  const t = (key: keyof Translations) => translations[language][key];
  if (feelLikeTemperature < 0) {
    return t('moreHoodies');
  } else if (feelLikeTemperature <= 10) {
    return t('fleeceHoodie');
  } else if (feelLikeTemperature < 20) {
    return t('bestHoodie');
  } else {
    return t('tShirtDay');
  }
}

export default getClothingRecommendation;