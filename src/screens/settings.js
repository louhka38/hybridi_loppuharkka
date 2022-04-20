import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// settings
// {
//   "lang": "EN"|"FI"  
// }
const storeSettings = ({ lang='EN' }) => {
    const _settings = {
        lang
    };
    return JSON.stringify(_settings);
};

export const Settings = ({ count, lang, dispatch }) => {

    const { t, i18n } = useTranslation();
    const isCurrentLang = (_lang) => _lang === lang ? true : false;
    const setLang = async (_lang) => {
        AsyncStorage.getItem('settings')
            .then((_settings) => AsyncStorage.setItem('settings', storeSettings({..._settings, lang: _lang})))
            .catch(() => AsyncStorage.setItem('settings', storeSettings({ lang: _lang })))
            .finally(() => {
                dispatch({ type: _lang});
                i18n.changeLanguage(_lang);
            });
    };

    return (
        <View>
            <Text>Hello from settings</Text>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })}/>
            <Button title="Decrement" onPress={() => dispatch({ type: 'DECREMENT' })}/>
            <Button title={t("Finnish")} onPress={() => setLang('FI')} disabled={isCurrentLang('FI')}/>
            <Button title={t("English")} onPress={() => setLang('EN')} disabled={isCurrentLang('EN')}/>
        </View>
    )
};

export default Settings;