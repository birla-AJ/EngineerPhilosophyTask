import AsyncStorage from "@react-native-async-storage/async-storage";


export const storeData = async (key, value) => {
    try {
        return await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log("error store in async storage", e);
        return false;
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (e) {
        console.log("error get from async storage", e);
        return false;
    }
};

export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.log("error get from async storage", e);
        return false;
    }
}