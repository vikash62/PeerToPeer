import { AsyncStorage } from 'react-native';

export default {

  async setUserData(userData) {
    try {
      const data = JSON.stringify(userData);
      await AsyncStorage.setItem('userData', data);
    } catch (error) {
      console.log(error)
    }
  },

  async getUserData() {
    const data = await AsyncStorage.getItem('userData');
    return data;
  },
}
