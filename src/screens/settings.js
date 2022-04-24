import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        <View style={styles.main}>
            <Text/>
            <Text style={styles.txt}>{t("HelloFromSettings")}</Text>
            <Text style={styles.txt}>{t("Count")}: {count}</Text>
            <Text/>
            <Button style={styles.btn} mode='contained' onPress={() => dispatch({ type: 'INCREMENT' })}>{t("Increment")}</Button>
            <Button style={styles.btn} mode='contained' onPress={() => dispatch({ type: 'DECREMENT' })}>{t("Decrement")}</Button>
            <Button style={styles.btn} mode='contained' onPress={() => setLang('FI')} disabled={isCurrentLang('FI')}>{t("Finnish")}</Button>
            <Button style={styles.btn} mode='contained' onPress={() => setLang('EN')} disabled={isCurrentLang('EN')}>{t("English")}</Button>
            <Button style={styles.btn} mode='contained' onPress={() => setLang('SW')} disabled={isCurrentLang('SW')}>{t("Swedish")}</Button>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: "aqua",
        height: 900
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "teal",
        marginTop: 10,
        marginBottom: 15
    },
    btn: {
        width: 200,
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 8
    }
})

export default Settings;