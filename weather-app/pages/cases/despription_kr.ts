const getWeatherDescription = (weatherCode: number): string => {
    switch (weatherCode) {
      case 200:
        return '비를 동반한 천둥구름';
      case 201:
        return '가벼운 비를 동반한 천둥구름';
      case 202:
        return '폭우를 동반한 천둥구름';
      case 210:
        return '약한 천둥구름';
      case 211:
        return '천둥구름';
      case 212:
        return '강한 천둥구름';
      case 221:
        return '불규칙적 천둥구름';
      case 230:
        return '약한 연무를 동반한 천둥구름';
      case 231:
        return '연무를 동반한 천둥구름';
      case 232:
        return '강한 안개비를 동반한 천둥구름';
      case 300:
        return '가벼운 안개비';
      case 301:
        return '안개비';
      case 302:
        return '강한 안개비';
      case 310:
        return '가벼운 적은비';
      case 311:
        return '적은비';
      case 312:
        return '강한 적은비';
      case 313:
        return '소나기와 안개비';
      case 314:
        return '강한 소나기와 안개비';
      case 321:
        return '소나기';
      case 500:
        return '약한 비';
      case 501:
        return '중간 비';
      case 502:
        return '강한 비';
      case 503:
        return '매우 강한 비';
      case 504:
        return '극심한 비';
      case 511:
        return '우박';
      case 520:
        return '약한 소나기 비';
      case 521:
        return '소나기 비';
      case 522:
        return '강한 소나기 비';
      case 531:
        return '불규칙적 소나기 비';
      case 600:
        return '가벼운 눈';
      case 601:
        return '눈';
      case 602:
        return '강한 눈';
      case 611:
        return '진눈깨비';
      case 612:
        return '소나기 진눈깨비';
      case 615:
        return '약한 비와 눈';
      case 616:
        return '비와 눈';
      case 620:
        return '약한 소나기 눈';
      case 621:
        return '소나기 눈';
      case 622:
        return '강한 소나기 눈';
      case 701:
        return '박무';
      case 711:
        return '연기';
      case 721:
        return '연무';
      case 731:
        return '모래 먼지';
      case 741:
        return '안개';
      case 751:
        return '모래';
      case 761:
        return '먼지';
      case 762:
        return '화산재';
      case 771:
        return '돌풍';
      case 781:
        return '토네이도';
      case 800:
        return '구름 한 점 없는 맑은 하늘';
      case 801:
        return '약간의 구름이 낀 하늘';
      case 802:
        return '드문드문 구름이 낀 하늘';
      case 803:
        return '대부분 구름';
      case 804:
        return '구름으로 뒤덮인 흐린 하늘';
      case 900:
        return '토네이도';
      case 901:
        return '태풍';
      case 902:
        return '허리케인';
      case 903:
        return '한랭';
      case 904:
        return '고온';
      case 905:
        return '바람부는';
      case 906:
        return '우박';
      case 951:
        return '바람이 거의 없는';
      case 952:
        return '약한 바람';
      case 953:
        return '부드러운 바람';
      case 954:
        return '중간 세기 바람';
      case 955:
        return '신선한 바람';
      case 956:
        return '센 바람';
      case 957:
        return '돌풍에 가까운 센 바람';
      case 958:
        return '돌풍';
      case 959:
        return '심각한 돌풍';
      case 960:
        return '폭풍';
      case 961:
        return '강한 폭풍';
      case 962:
        return '허리케인';
      default:
        return 'Unknown Weather';
    }
  };

  export default getWeatherDescription