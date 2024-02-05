import axios from 'axios';

const API_KEY = 'MOo2Y9S56LwfmL2kHf4hw21fPES45JYxaSloLlbF';
const API_KEY_ID = '1752bnsqzm';
const API_URL = 'https://naveropenapi.apigw.ntruss.com/nmt/v1/translation';

async function translateKR(text: string): Promise<string> {
    try {
      // Make API request
      const response = await axios.post(
        API_URL,
        { source: 'kr', target: 'en', text },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Naver-Client-Id': API_KEY_ID,
            'X-Naver-Client-Secret': API_KEY,
          },
        }
      );
  
      // Extract and return translated text
      return response.data.message.result.translatedText;
    } catch (error) {
      // Handle errors
      console.log('Translation error:', error);
      throw error;
    }
}

export default translateKR;
