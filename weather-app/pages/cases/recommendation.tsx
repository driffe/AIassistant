function getClothingRecommendation(feelLikeTemperature: number): string {
    if (feelLikeTemperature < 10) {
      return 'You may need a warm jacket.';
    } else if (feelLikeTemperature < 20) {
      return 'A light jacket or sweater should be sufficient.';
    } else {
      return 'The weather feels comfortable. No extra layers needed.';
    }
}

export default getClothingRecommendation;