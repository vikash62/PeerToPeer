import { AsyncStorage } from 'react-native';

export default {

    setFcmToken(data) {
        return AsyncStorage.setItem('fcmToken', JSON.stringify(data));
    },
    getFcmToken() {
        return AsyncStorage.getItem('fcmToken');
    },
    
}