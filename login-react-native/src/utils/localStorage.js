import { AsyncStorage } from 'react-native';

export async function storeData(scope, key, value) {
  try {
    await AsyncStorage.setItem("@" + scope + ":" + key, value);
    return true;
  } catch (error) {
    console.log(error)
    return false;
  }
}

export async function retrieveData(scope, key) {
  try {
    const value = await AsyncStorage.getItem("@" + scope + ":" + key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error)
    return null;
  }
}